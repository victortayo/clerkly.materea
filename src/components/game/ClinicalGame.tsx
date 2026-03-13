import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClinicalCase, GamePhase, HistoryQuestion, PhysicalExamAction, InvestigationOption, DiagnosisOption, ManagementAction } from '../../types/game';
import { generateClinicalCase } from '../../services/gameGenerator';
import { useToast } from '../../context/ToastContext';

interface ClinicalGameProps {
  onClose: () => void;
}

export function ClinicalGame({ onClose }: ClinicalGameProps) {
  const [phase, setPhase] = useState<GamePhase>('start');
  const [currentCase, setCurrentCase] = useState<ClinicalCase | null>(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Game State
  const [revealedHistory, setRevealedHistory] = useState<Set<string>>(new Set());
  const [performedExam, setPerformedExam] = useState<Set<string>>(new Set());
  const [orderedLabs, setOrderedLabs] = useState<Set<string>>(new Set());
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string | null>(null);
  const [performedManagement, setPerformedManagement] = useState<Set<string>>(new Set());
  
  // Score Breakdown
  const [scores, setScores] = useState({
    history: 0,
    examination: 0,
    investigations: 0,
    diagnosis: 0,
    management: 0
  });

  const { showToast } = useToast();

  useEffect(() => {
    if (phase !== 'start' && phase !== 'briefing' && phase !== 'summary') {
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatCountdown = (seconds: number) => {
    const targetTime = 300; // 5 minutes
    const remaining = targetTime - seconds;
    const isNegative = remaining < 0;
    const absSeconds = Math.abs(remaining);
    const mins = Math.floor(absSeconds / 60);
    const secs = absSeconds % 60;
    return `${isNegative ? '-' : ''}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startGame = async () => {
    if (!navigator.onLine) {
      showToast("⚠️ You are currently offline. Simulation mode requires an internet connection.");
      return;
    }

    setLoading(true);
    try {
      const newCase = await generateClinicalCase();
      setCurrentCase(newCase);
      setPhase('briefing');
      setScore(0);
      setElapsedTime(0);
      setRevealedHistory(new Set());
      setPerformedExam(new Set());
      setOrderedLabs(new Set());
      setSelectedDiagnosis(null);
      setPerformedManagement(new Set());
      setScores({
        history: 0,
        examination: 0,
        investigations: 0,
        diagnosis: 0,
        management: 0
      });
    } catch (error) {
      console.error(error);
      showToast("Failed to generate case. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (points: number, message: string, type: 'success' | 'error' | 'neutral' = 'neutral') => {
    setScore(prev => prev + points);
  };

  const handleHistory = (q: HistoryQuestion) => {
    if (revealedHistory.has(q.id)) return;
    setRevealedHistory(prev => new Set(prev).add(q.id));
    setScores(prev => ({ ...prev, history: prev.history + q.score }));
    handleAction(q.score, q.answer, q.score > 0 ? 'success' : 'neutral');
  };

  const handleExam = (exam: PhysicalExamAction) => {
    if (performedExam.has(exam.id)) return;
    setPerformedExam(prev => new Set(prev).add(exam.id));
    setScores(prev => ({ ...prev, examination: prev.examination + exam.score }));
    handleAction(exam.score, exam.finding, 'success');
  };

  const handleLab = (lab: InvestigationOption) => {
    if (orderedLabs.has(lab.id)) return;
    setOrderedLabs(prev => new Set(prev).add(lab.id));
    setScores(prev => ({ ...prev, investigations: prev.investigations + lab.score }));
    
    if (lab.isPenalty) {
      handleAction(lab.score, lab.penaltyReason || "Not indicated", 'error');
    } else {
      handleAction(lab.score, lab.result, 'success');
    }
  };

  const handleDiagnosis = (option: DiagnosisOption) => {
    setSelectedDiagnosis(option.id);
    const points = option.isCorrect ? 50 : 0;
    setScores(prev => ({ ...prev, diagnosis: points }));
    const message = option.isCorrect ? "Correct Diagnosis" : "Incorrect Diagnosis";
    handleAction(points, message, option.isCorrect ? 'success' : 'error');
    showToast(`${message} (${points > 0 ? '+' : ''}${points})`);
    
    setTimeout(() => setPhase('management'), 1500);
  };

  const handleManagement = (action: ManagementAction) => {
    if (performedManagement.has(action.id)) return;
    setPerformedManagement(prev => new Set(prev).add(action.id));
    setScores(prev => ({ ...prev, management: prev.management + action.score }));
    
    if (action.isPenalty) {
      handleAction(action.score, action.penaltyReason || "Dangerous action", 'error');
    } else {
      handleAction(action.score, "Action performed", 'success');
    }
  };

  const getGrade = () => {
    const percentage = (score / 250) * 100;
    if (percentage >= 80) return { label: 'DISTINCTION', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
    if (percentage >= 60) return { label: 'PASS', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    return { label: 'NEEDS REVIEW', color: 'text-red-600 bg-red-50 border-red-200' };
  };

  const renderPatientVignette = () => {
    if (!currentCase) return null;
    return (
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 sticky top-4">
          <h3 className="text-[10px] font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-widest mb-3 flex items-center gap-2">
            <i className="fa-solid fa-notes-medical"></i>
            Patient Vignette
          </h3>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700 mb-4">
            <p className="text-slate-600 dark:text-slate-300 italic text-xs leading-relaxed">
              "{currentCase.presentation.description}"
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-[10px]">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Age / Sex</p>
                <p className="font-bold text-slate-900 dark:text-white text-xs">{currentCase.presentation.age} / {currentCase.presentation.sex}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-[10px]">
                <i className="fa-solid fa-list"></i>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Complaint</p>
                <p className="font-bold text-slate-900 dark:text-white text-xs">{currentCase.presentation.chiefComplaint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const phases: GamePhase[] = ['history', 'examination', 'investigation', 'diagnosis', 'management'];

  return (
    <div className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/80 z-[100] flex items-center justify-center sm:p-4 font-sans backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-slate-50 dark:bg-slate-900 w-full max-w-6xl h-[100dvh] sm:h-[90vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
      {/* Header */}
      <div className="sticky top-0 bg-white dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="font-brand text-lg sm:text-xl font-bold text-slate-900 dark:text-indigo-100 flex items-center gap-2">
                <span className="text-xl sm:text-2xl">😎</span>
                Clinical Simulation
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                {currentCase?.metadata.title || "New Case"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            {phase !== 'start' && phase !== 'briefing' && phase !== 'summary' && (
              <div className="flex items-center gap-4 sm:gap-6 mr-2 sm:mr-4">
                <div className="hidden md:flex items-center gap-2">
                  <span className={`text-sm font-mono font-bold ${elapsedTime > 300 ? 'text-red-500 dark:text-red-400' : 'text-slate-600 dark:text-indigo-200'}`}>
                    {formatCountdown(elapsedTime)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-500 dark:text-indigo-200 uppercase tracking-wider hidden md:inline">Score</span>
                  <div className="px-2 py-1 sm:px-3 sm:py-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="text-base sm:text-lg font-black text-indigo-950 dark:text-indigo-400">
                      {score}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-slate-600 dark:text-indigo-200 dark:hover:text-white">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        {/* Phase Bar */}
        {phase !== 'start' && phase !== 'briefing' && phase !== 'summary' && (
          <div className="border-t border-slate-100 dark:border-slate-800 overflow-x-auto hide-scrollbar">
            <div className="max-w-7xl mx-auto px-4 flex min-w-max justify-start sm:justify-center">
              {phases.map((p, i) => {
                const isActive = phase === p;
                const isPast = phases.indexOf(phase) > i;
                return (
                  <div 
                    key={p}
                    className={`flex items-center h-12 sm:h-14 px-3 sm:px-4 transition-all relative ${
                      isActive 
                        ? 'text-indigo-950 dark:text-indigo-400' 
                        : isPast 
                          ? 'text-slate-500 dark:text-slate-400' 
                          : 'text-slate-300 dark:text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all shadow-sm ${
                        isActive 
                          ? 'bg-indigo-950 text-white scale-110 ring-2 ring-indigo-100 dark:ring-indigo-900' 
                          : isPast 
                            ? 'bg-indigo-100 text-indigo-950 dark:bg-indigo-900/40 dark:text-indigo-400' 
                            : 'bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600'
                      }`}>
                        {isPast ? <i className="fa-solid fa-check"></i> : i + 1}
                      </div>
                      <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isActive ? 'opacity-100' : 'opacity-70'}`}>{p}</span>
                    </div>
                    
                    {/* Connector Line */}
                    {i < phases.length - 1 && (
                      <div className={`hidden sm:block ml-4 w-8 h-0.5 rounded-full ${
                        isPast ? 'bg-indigo-200 dark:bg-indigo-900' : 'bg-slate-200 dark:bg-slate-800'
                      }`}></div>
                    )}
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activePhase"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-950 dark:bg-indigo-400"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-6 pb-32 overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          {phase === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8"
            >
              <div className="text-8xl animate-bounce mb-4">
                😎
              </div>
              
              <div className="space-y-4 max-w-lg">
                <h2 className="font-brand text-4xl font-bold text-indigo-950 dark:text-white tracking-tight">
                  Clinical Simulation
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Manage a patient in the shortest possible time.
                </p>
              </div>
              
              <button
                onClick={startGame}
                disabled={loading}
                className="font-brand w-full max-w-xs flex items-center justify-center gap-2 bg-indigo-950 text-white font-bold py-4 px-6 rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <i className="fa-solid fa-play"></i>
                    <span>Start Simulation</span>
                  </>
                )}
              </button>
            </motion.div>
          )}

          {phase === 'briefing' && currentCase && (
            <motion.div
              key="briefing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 ease-out group flex flex-col overflow-hidden">
                <div className="p-8 flex-1">
                  {/* Header: Specialty and Time */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900/40 px-2 py-0.5 rounded">
                        {currentCase.metadata.specialty}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      {currentCase.metadata.estimatedTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2 font-brand group-hover:text-indigo-950 dark:group-hover:text-indigo-300 transition-colors">
                    {currentCase.metadata.title}
                  </h3>

                  {/* Setting (Sub-specialty style) */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-6">
                    {currentCase.metadata.setting}
                  </p>
                  
                  {/* Description (Summary style) */}
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-sans bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 italic">
                    "{currentCase.presentation.description}"
                  </div>

                  {/* Patient Details (Tags style or small grid) */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="flex flex-col items-start text-left gap-1.5 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 text-xs mb-1">
                              <i className="fa-solid fa-user"></i>
                          </div>
                          <div>
                              <p className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">{currentCase.presentation.age}y {currentCase.presentation.sex}</p>
                              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400">Patient Profile</p>
                          </div>
                      </div>
                      <div className="flex flex-col items-start text-left gap-1.5 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 text-xs mb-1">
                              <i className="fa-solid fa-list"></i>
                          </div>
                          <div>
                              <p className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-tight">{currentCase.presentation.chiefComplaint}</p>
                              <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">{currentCase.presentation.duration}</p>
                          </div>
                      </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="px-8 py-5 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30">
                  <button 
                    onClick={() => setPhase('history')}
                    className="w-full py-3 text-sm font-bold text-white bg-indigo-950 hover:bg-black rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    Begin Clerking
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'history' && currentCase && (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {renderPatientVignette()}

              <div className="lg:col-span-2 space-y-3">
                <div className="flex items-center justify-between mb-1 px-1">
                  <h3 className="font-brand text-lg font-bold text-slate-800 dark:text-white">History Questions</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {revealedHistory.size} / {currentCase.history.length} Asked
                  </span>
                </div>
                
                {currentCase.history.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleHistory(q)}
                    disabled={revealedHistory.has(q.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all group relative overflow-hidden ${
                      revealedHistory.has(q.id)
                        ? 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <p className={`font-bold text-sm mb-2 transition-colors ${
                          revealedHistory.has(q.id) 
                            ? 'text-slate-400 font-sans' 
                            : 'text-slate-800 dark:text-white font-brand group-hover:text-indigo-900 dark:group-hover:text-indigo-300'
                        }`}>
                          {q.text}
                        </p>
                        
                        {revealedHistory.has(q.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30"
                          >
                            <div className="flex gap-2">
                              <div className="mt-0.5">
                                <i className="fa-solid fa-comment-medical text-indigo-500 text-xs"></i>
                              </div>
                              <p className="text-indigo-900 dark:text-indigo-200 italic font-medium text-xs leading-relaxed">
                                "{q.answer}"
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {revealedHistory.has(q.id) && (
                        <div className={`px-2 py-0.5 rounded text-[10px] font-bold shadow-sm ${
                          q.score > 0 
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}>
                          {q.score > 0 ? `+${q.score}` : q.score}
                        </div>
                      )}
                      
                      {!revealedHistory.has(q.id) && (
                        <div className="w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors text-xs">
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'examination' && currentCase && (
            <motion.div
              key="examination"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {renderPatientVignette()}
              <div className="lg:col-span-2 space-y-3">
                <div className="flex items-center justify-between mb-1 px-1">
                  <h3 className="font-brand text-lg font-bold text-slate-800 dark:text-white">Physical Examination</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {performedExam.size} / {currentCase.examination.length} Performed
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentCase.examination.map((exam) => (
                    <button
                      key={exam.id}
                      onClick={() => handleExam(exam)}
                      disabled={performedExam.has(exam.id)}
                      className={`text-left p-3 rounded-xl border transition-all h-full flex flex-col relative overflow-hidden group ${
                        performedExam.has(exam.id)
                          ? 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-bold text-sm text-slate-800 dark:text-white leading-tight">
                          {exam.action}
                        </p>
                      </div>
                      
                      {performedExam.has(exam.id) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800"
                        >
                          <p className="text-slate-600 dark:text-slate-400 text-xs font-medium">
                            {exam.finding}
                          </p>
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'investigation' && currentCase && (
            <motion.div
              key="investigation"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {renderPatientVignette()}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-1 px-1">
                  <h3 className="font-brand text-lg font-bold text-slate-800 dark:text-white">Investigations</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {orderedLabs.size} Ordered
                  </span>
                </div>
                {['Bedside', 'Laboratory', 'Imaging'].map((category) => {
                  const items = currentCase.investigations.filter(i => i.category === category);
                  if (items.length === 0) return null;

                  return (
                    <div key={category} className="space-y-2">
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1">{category}</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {items.map((lab) => (
                          <button
                            key={lab.id}
                            onClick={() => handleLab(lab)}
                            disabled={orderedLabs.has(lab.id)}
                            className={`text-left p-3 rounded-xl border transition-all relative ${
                              orderedLabs.has(lab.id)
                                ? lab.isPenalty
                                  ? 'bg-red-50 border-red-100'
                                  : 'bg-slate-50 border-slate-200'
                                : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100/50'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className={`font-bold text-sm ${orderedLabs.has(lab.id) && lab.isPenalty ? 'text-red-700' : 'text-slate-800'}`}>
                                {lab.name}
                              </span>
                              {orderedLabs.has(lab.id) && (
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                  lab.isPenalty ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                                }`}>
                                  {lab.score > 0 ? `+${lab.score}` : lab.score}
                                </span>
                              )}
                            </div>
                            
                            {orderedLabs.has(lab.id) && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`text-xs font-mono mt-1 ${lab.isPenalty ? 'text-red-600' : 'text-slate-600'}`}
                              >
                                {lab.isPenalty ? lab.penaltyReason : lab.result}
                              </motion.div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {phase === 'diagnosis' && currentCase && (
            <motion.div
              key="diagnosis"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {renderPatientVignette()}
              <div className="lg:col-span-2 space-y-4">
                <div className="mb-4 px-1">
                  <h3 className="font-brand text-lg font-bold text-slate-800 dark:text-white">
                    Primary Diagnosis
                  </h3>
                  <p className="text-slate-500 text-xs">Select the most likely condition based on your findings.</p>
                </div>

                <div className="grid gap-2">
                  {currentCase.diagnosisOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleDiagnosis(option)}
                      disabled={selectedDiagnosis !== null}
                      className={`p-3 rounded-xl border transition-all text-left relative overflow-hidden ${
                        selectedDiagnosis === option.id
                          ? option.isCorrect
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900'
                            : 'bg-red-50 border-red-500 text-red-900'
                          : selectedDiagnosis !== null && option.isCorrect
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-900 ring-2 ring-indigo-100' // Reveal correct answer
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">{option.text}</span>
                        {selectedDiagnosis === option.id && (
                          <i className={`fa-solid ${option.isCorrect ? 'fa-check' : 'fa-xmark'} text-base`}></i>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'management' && currentCase && (
            <motion.div
              key="management"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {renderPatientVignette()}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-1 px-1">
                  <h3 className="font-brand text-lg font-bold text-slate-800 dark:text-white">Management Plan</h3>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {performedManagement.size} Actions
                  </span>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800 mb-4">
                  <p className="text-indigo-900 dark:text-indigo-200 font-medium text-xs">
                    Diagnosis: <strong>{currentCase.diagnosisOptions.find(d => d.isCorrect)?.text}</strong>
                  </p>
                </div>

                <div className="grid gap-2">
                  {currentCase.management.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleManagement(action)}
                      disabled={performedManagement.has(action.id)}
                      className={`text-left p-3 rounded-xl border transition-all ${
                        performedManagement.has(action.id)
                          ? action.isPenalty
                            ? 'bg-red-50 border-red-200'
                            : 'bg-slate-50 border-slate-200'
                          : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`font-bold text-sm ${performedManagement.has(action.id) && action.isPenalty ? 'text-red-700' : 'text-slate-800'}`}>
                          {action.action}
                        </span>
                        {performedManagement.has(action.id) && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            action.isPenalty ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {action.score > 0 ? `+${action.score}` : action.score}
                          </span>
                        )}
                      </div>
                      
                      {performedManagement.has(action.id) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`mt-1 text-xs italic ${action.isPenalty ? 'text-red-600' : 'text-slate-500'}`}
                        >
                          {action.isPenalty ? action.penaltyReason : action.explanation}
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'summary' && currentCase && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* Score Card */}
              <div className="bg-indigo-950 dark:bg-slate-900 rounded-2xl shadow-xl shadow-indigo-100/50 border border-indigo-900 dark:border-slate-700 overflow-hidden text-center p-6">
                <div className="mb-4">
                  <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${getGrade().color}`}>
                    {getGrade().label}
                  </span>
                </div>
                
                <div className="text-6xl font-black text-white mb-1 tracking-tighter">
                  {score}<span className="text-2xl text-indigo-200/50 font-bold">/250</span>
                </div>
                
                <p className="text-indigo-200 text-sm font-medium mb-6">
                  Time: {formatTime(elapsedTime)}
                </p>

                {/* Breakdown Bars */}
                <div className="space-y-3 max-w-md mx-auto mb-6">
                  {[
                    { label: 'History', val: scores.history, max: 50, color: 'bg-blue-500' },
                    { label: 'Examination', val: scores.examination, max: 50, color: 'bg-emerald-500' },
                    { label: 'Investigations', val: scores.investigations, max: 40, color: 'bg-amber-500' },
                    { label: 'Diagnosis', val: scores.diagnosis, max: 50, color: 'bg-purple-500' },
                    { label: 'Management', val: scores.management, max: 60, color: 'bg-rose-500' },
                  ].map((cat) => (
                    <div key={cat.label} className="flex items-center gap-3 text-xs">
                      <span className="w-24 text-left font-bold text-indigo-200">{cat.label}</span>
                      <div className="flex-1 h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${cat.color}`}
                          style={{ width: `${Math.max(0, (cat.val / cat.max) * 100)}%` }}
                        ></div>
                      </div>
                      <span className="w-10 text-right font-mono text-white">{cat.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teaching Points */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                <h3 className="text-base font-brand font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-lightbulb text-amber-500"></i> Key Learning Points
                </h3>
                <ul className="space-y-2">
                  {currentCase.teachingPoints?.map((point, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <span className="font-bold text-indigo-500">{i + 1}.</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SSA Context */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-5 border border-indigo-100 dark:border-indigo-800">
                <h3 className="text-base font-brand font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-earth-africa"></i> Sub-Saharan Africa Context
                </h3>
                <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
                  {currentCase.ssaContext}
                </p>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl font-bold transition-colors text-sm shadow-sm"
                >
                  Exit Simulation
                </button>
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-indigo-950 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-colors text-sm"
                >
                  Next Case
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Actions (Sticky) */}
      {phase !== 'start' && phase !== 'briefing' && phase !== 'summary' && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-30 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)]">
          <div className="max-w-5xl mx-auto flex justify-center sm:justify-end items-center">
            {phase === 'history' && (
              <button 
                onClick={() => setPhase('examination')}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-950 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Proceed to Examination <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
            {phase === 'examination' && (
              <button 
                onClick={() => setPhase('investigation')}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-950 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Proceed to Investigations <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
            {phase === 'investigation' && (
              <button 
                onClick={() => setPhase('diagnosis')}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-950 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Make Diagnosis <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
            {phase === 'diagnosis' && (
              <button 
                onClick={() => setPhase('management')}
                disabled={selectedDiagnosis === null}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                  selectedDiagnosis === null
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-indigo-950 hover:bg-black text-white shadow-indigo-200 dark:shadow-none'
                }`}
              >
                Proceed to Management <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
            {phase === 'management' && (
              <button 
                onClick={() => setPhase('summary')}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Finish Case <i className="fa-solid fa-check"></i>
              </button>
            )}

          </div>
        </div>
      )}
      </div>
    </div>
  );
}
