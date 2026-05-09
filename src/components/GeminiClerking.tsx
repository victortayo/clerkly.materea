import { useState, useEffect, useRef } from 'react';
import { assistClerking } from '../services/gemini';
import { useToast } from '../context/ToastContext';

interface GeminiClerkingProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onOpenGame: () => void;
  onOpenLearn: () => void;
  onOpenCalculator: () => void;
}

export function GeminiClerking({ isOpen, onClose, onOpen, onOpenGame, onOpenLearn, onOpenCalculator }: GeminiClerkingProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [selectedTasks, setSelectedTasks] = useState<string[]>(['complete']);
  const [copied, setCopied] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const loadingMessages = [
    'Analyzing clinical notes...',
    'Identifying key patterns...',
    'Formulating potential diagnoses...',
    'Structuring the management plan...',
    'Finalizing the summary...'
  ];

  // Handle scroll visibility for FAB
  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(false);
      setIsMenuOpen(false); // Close menu on scroll
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsButtonVisible(true);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleGenerate = async () => {
    if (!input.trim() || selectedTasks.length === 0) return;

    if (window.innerWidth < 768) { // Check for mobile screen size
      outputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (!navigator.onLine) {
      setOutput("⚠️ You are currently offline.\n\nAI features require an active internet connection to process your request. Please check your connection and try again.");
      return;
    }

    setLoading(true);
    setOutput(''); // Clear previous output

    let messageIndex = 0;
    setLoadingMessage(loadingMessages[messageIndex]);
    loadingIntervalRef.current = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[messageIndex]);
    }, 2500);

    try {
      const result = await assistClerking(input, selectedTasks);
      if (result) {
        setOutput(result);
      }
    } catch (error) {
      console.error(error);
      setOutput("Error generating response. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    showToast('Copied', 'copy', 2000);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTask = (taskId: string) => {
    setSelectedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(t => t !== taskId) 
        : [...prev, taskId]
    );
  };

  const tasks = [
    { id: 'complete', label: 'Complete Note' },
    { id: 'diagnosis', label: 'Suggest Diagnosis' },
    { id: 'summary', label: 'Generate Summary' },
    { id: 'plan', label: 'Create Plan' },
  ];

  return (
    <>
      {/* Dropup Menu */}
      {isMenuOpen && (
        <div className="fixed bottom-24 right-6 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[60] animate-in slide-in-from-bottom-4 fade-in duration-200 origin-bottom-right">
          <div className="p-2 space-y-1">
            <button
              onClick={() => {
                onOpen();
                setIsMenuOpen(false);
                setIsButtonVisible(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-950 dark:bg-indigo-950 flex items-center justify-center text-white dark:text-white group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Clerkly Assistant</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">AI-powered clinical notes</p>
              </div>
            </button>

            <div className="w-[96%] h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>

            <button
              onClick={() => {
                onOpenCalculator();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-calculator"></i>
              </div>
              <div className="text-left flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Clerkly Calculator</p>
                  </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Essential clinical calculators</p>
              </div>
            </button>

            <div className="w-[96%] h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>

            <button
              onClick={() => {
                onOpenLearn();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-book-medical"></i>
              </div>
              <div className="text-left flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Clerkly Learn</p>
                  </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Clinical reasoning modules</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-indigo-950 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-black focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 z-50 
        ${isButtonVisible && !isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
        ${isMenuOpen ? 'rotate-90 bg-slate-800' : ''}`}
        title="Open AI Tools"
        disabled={!isButtonVisible || isOpen}
      >
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-circle-plus'} text-2xl transition-transform duration-300`}></i>
      </button>

      {/* Modal Background (Backdrop Overlay) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/80 z-[100] flex items-center justify-center sm:p-4 font-sans backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={onClose}
        >
          {/* Modal Dialogue Container */}
          <div 
            className="bg-slate-50 dark:bg-slate-900 w-full max-w-6xl h-[100dvh] sm:h-[90vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <h1 className="font-brand text-lg sm:text-xl font-bold text-indigo-950 dark:text-indigo-100 flex items-center gap-2">
                      <i className="fa-solid fa-circle-plus text-indigo-500"></i>
                      Clerking Assistant
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                      AI-powered clinical documentation and reasoning
                    </p>
                  </div>
                </div>
                
                <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-slate-600 dark:text-indigo-200 dark:hover:text-white">
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>
            </div>

            {/* Modal Body (Split Grid) */}
            <div className="flex-1 overflow-y-auto md:overflow-hidden custom-scrollbar flex flex-col md:flex-row">
              
              {/* Input Area (Left Column) */}
              <div className="w-full md:w-1/2 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-4 shrink-0 md:overflow-y-auto custom-scrollbar">
                <div className="flex flex-col flex-1">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                    Provide parts of your clerking, and our AI will help you complete it, suggest a diagnosis, generate a summary, and create a management plan.
                  </p>
                  <textarea 
                    className="w-full flex-1 min-h-[200px] p-4 text-sm font-mono bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors resize-none" 
                    placeholder="e.g., 45M c/o chest pain x 2 hrs, radiating to left arm. Sweaty. BP 150/90. ECG ST elevation..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                  {tasks.map((t) => (
                    <label key={t.id} className="flex items-center space-x-3 cursor-pointer group py-1.5 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={selectedTasks.includes(t.id)}
                        onChange={() => toggleTask(t.id)}
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-900 dark:group-hover:text-indigo-300 transition-colors">
                        {t.label}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <button 
                    onClick={handleGenerate}
                    disabled={loading || !input.trim() || selectedTasks.length === 0}
                    className="font-brand w-full py-4 bg-indigo-950 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>Generate</span>
                      </>
                    )}
                  </button>

                  {/* Clinical Safety Disclaimer */}
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20">
                    <i className="fa-solid fa-triangle-exclamation text-amber-500/80 text-sm mt-0.5 shrink-0"></i>
                    <p className="text-[11px] text-amber-900/80 dark:text-amber-200/80 leading-snug">
                      AI may produce inaccurate information. Always verify important clinical details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Output Display (Right Column) */}
              <div ref={outputRef} className="flex-1 p-6 md:p-8 bg-slate-50 dark:bg-slate-900 overflow-hidden md:overflow-y-auto custom-scrollbar flex flex-col min-h-[50vh] md:min-h-0 relative">
                {loading ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto py-12">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shrink-0 animate-pulse overflow-hidden">
                      <img src="/avatar.png" alt="Loading" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Working on it, Chief...</h3>
                    <p className="text-sm text-slate-500 h-4">{loadingMessage}</p>
                  </div>
                ) : output ? (
                  <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex-1 overflow-y-auto relative custom-scrollbar">
                    <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap break-words leading-relaxed font-mono text-sm pr-12">
                      {output}
                    </p>
                    <button 
                      onClick={handleCopy}
                      className="absolute top-4 right-4 p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors shadow-sm border border-slate-200 dark:border-slate-600"
                      title={copied ? "Copied" : "Copy Result"}
                    >
                      {copied ? <i className="fa-solid fa-check"></i> : <i className="fa-regular fa-copy"></i>}
                    </button>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto opacity-50 py-12">
                     <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shrink-0">
                        <i className="fa-solid fa-circle-plus text-3xl text-slate-400"></i>
                     </div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Ready to Assist</h3>
                    <p className="text-sm text-slate-500">Provide your clerking notes and select the tasks you want the AI to perform.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
