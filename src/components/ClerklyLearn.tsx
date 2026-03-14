import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { generateLearningModule, generatePhysicalExamModule, generateLabInterpretationModule, generateClinicalScoringModule, generateManagementPlanModule, LearningModule, PhysicalExamModule, LabInterpretationModule, ClinicalScoringModule, ManagementPlanModule } from '../services/gemini';
import { useToast } from '../context/ToastContext';

interface ClerklyLearnProps {
  onClose: () => void;
}

const SYMPTOMS = [
  'Fever', 'Vomiting', 'Abdominal Pain', 'Diarrhea', 'Breathlessness',
  'Chest Pain', 'Headache', 'Cough', 'Hemoptysis', 'Palpitations',
  'Loss of Consciousness', 'Leg Swelling', 'Jaundice', 'Weight Loss',
  'Dysuria', 'Polyuria', 'Hematuria', 'Back Pain', 'Joint Pain',
  'Seizures', 'Weakness', 'Vaginal Bleeding', 'Amenorrhea', 'Trauma', 'Rash'
];

const PHYSICAL_EXAMINATIONS = [
  'General Physical Examination', 'Glasgow Coma Scale', 'Pupillary Examination',
  'Respiratory Examination', 'Cardiovascular Examination', 'Abdominal Examination',
  'Neurological Examination', 'Fundoscopy', 'Peripheral Pulse Examination',
  'Jugular Venous Pressure Examination', 'Thyroid Examination', 'Lymph Node Examination',
  'Breast Examination', 'Digital Rectal Examination', 'Musculoskeletal Joint Examination',
  'Lower Limb Edema Examination', 'Capillary Refill Time', 'Hydration Assessment',
  'Meningeal Signs Examination', 'Cranial Nerve Examination', 'Motor System Examination',
  'Sensory Examination', 'Gait Examination', 'Obstetric Abdominal Examination',
  'Pediatric Growth Assessment'
];

const LABORATORY_INVESTIGATIONS = [
  'Full Blood Count', 'Serum Electrolytes', 'Renal Function Tests',
  'Liver Function Tests', 'Blood Glucose', 'Arterial Blood Gas',
  'Urinalysis', 'Malaria Parasite Test', 'Blood Culture',
  'Lipid Profile', 'Thyroid Function Tests', 'D-Dimer',
  'Serum Lactate', 'CSF Analysis', 'Pregnancy Test'
];

const CLINICAL_SCORING_SYSTEMS = [
  'Glasgow Coma Scale', 'CURB-65', 'qSOFA', 'NEWS2', 'Wells Score', 'PERC Rule',
  'CHA₂DS₂-VASc', 'HAS-BLED', 'TIMI Score', 'HEART Score',
  'Child-Pugh Score', 'MELD Score', 'Glasgow-Blatchford Score',
  'APACHE II', 'SOFA Score',
  'Bishop Score', 'Modified Early Obstetric Warning Score',
  'Pediatric Glasgow Coma Scale', 'IMCI Danger Signs'
];

const DISEASES = [
  'Community Acquired Pneumonia', 'Severe Malaria', 'Pulmonary Tuberculosis',
  'Typhoid Fever', 'Bacterial Meningitis', 'Sepsis',
  'Diabetic Ketoacidosis', 'Hypoglycemia', 'Acute Ischemic Stroke',
  'Status Epilepticus', 'Anaphylaxis',
  'Acute Heart Failure', 'Hypertensive Emergency', 'Acute Coronary Syndrome',
  'Upper GI Bleeding', 'Acute Pancreatitis', 'Hepatic Encephalopathy',
  'Hyponatremia', 'Hyperkalemia', 'Hypokalemia'
];

const SETTINGS = [
  'Emergency Department', 'Outpatient Clinic', 'Rural Clinic',
  'Pediatric Ward', 'Medical Ward', 'Obstetric Emergency Unit'
];

type LibraryType = 'symptom' | 'examination' | 'laboratory' | 'scoring' | 'management';

export function ClerklyLearn({ onClose }: ClerklyLearnProps) {
  const [libraryType, setLibraryType] = useState<LibraryType>('symptom');
  const [symptom, setSymptom] = useState(SYMPTOMS[0]);
  const [examination, setExamination] = useState(PHYSICAL_EXAMINATIONS[0]);
  const [investigation, setInvestigation] = useState(LABORATORY_INVESTIGATIONS[0]);
  const [scoringSystem, setScoringSystem] = useState(CLINICAL_SCORING_SYSTEMS[0]);
  const [disease, setDisease] = useState(DISEASES[0]);
  const [setting, setSetting] = useState(SETTINGS[0]);
  
  const [isLibraryDropdownOpen, setIsLibraryDropdownOpen] = useState(false);
  const [isSymptomDropdownOpen, setIsSymptomDropdownOpen] = useState(false);
  const [isExaminationDropdownOpen, setIsExaminationDropdownOpen] = useState(false);
  const [isInvestigationDropdownOpen, setIsInvestigationDropdownOpen] = useState(false);
  const [isScoringDropdownOpen, setIsScoringDropdownOpen] = useState(false);
  const [isDiseaseDropdownOpen, setIsDiseaseDropdownOpen] = useState(false);
  const [isSettingDropdownOpen, setIsSettingDropdownOpen] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [module, setModule] = useState<LearningModule | PhysicalExamModule | LabInterpretationModule | ClinicalScoringModule | ManagementPlanModule | null>(null);
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});

  const { showToast } = useToast();

  const handleGenerate = async () => {
    if (!navigator.onLine) {
      showToast("⚠️ You are currently offline. Clerkly Learn requires an internet connection.");
      return;
    }

    setLoading(true);
    setModule(null);
    setQuizAnswers({});
    setShowExplanations({});
    setActiveTab('content');

    try {
      let generatedModule;
      if (libraryType === 'symptom') {
        generatedModule = await generateLearningModule(symptom, setting, 'Advanced');
      } else if (libraryType === 'examination') {
        generatedModule = await generatePhysicalExamModule(examination, setting, 'Advanced');
      } else if (libraryType === 'laboratory') {
        generatedModule = await generateLabInterpretationModule(investigation, setting, 'Advanced');
      } else if (libraryType === 'scoring') {
        generatedModule = await generateClinicalScoringModule(scoringSystem, setting, 'Advanced');
      } else {
        generatedModule = await generateManagementPlanModule(disease, setting, 'Advanced');
      }

      if (generatedModule) {
        setModule(generatedModule);
      } else {
        showToast("Failed to generate module. Please try again.");
      }
    } catch (error) {
      console.error(error);
      showToast("An error occurred while generating the module. The model may be unavailable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    setShowExplanations(prev => ({ ...prev, [questionIndex]: true }));
  };

  const isSymptomModule = (mod: any): mod is LearningModule => {
    return 'symptom' in mod;
  };

  const isPhysicalExamModule = (mod: any): mod is PhysicalExamModule => {
    return 'examination' in mod;
  };

  const isLabModule = (mod: any): mod is LabInterpretationModule => {
    return 'investigation' in mod;
  };

  const isScoringModule = (mod: any): mod is ClinicalScoringModule => {
    return 'scoring_system' in mod;
  };

  const isManagementModule = (mod: any): mod is ManagementPlanModule => {
    return 'disease' in mod;
  };

  const renderHeading = (iconClass: string, text: string) => (
    <>
      <h3 className={`text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2`}>
        <i className={`fa-solid ${iconClass} text-indigo-500`}></i>
        {text}
      </h3>
      <hr className="border-slate-200 dark:border-slate-700 mb-4" />
    </>
  );

  const renderSideHeading = (iconClass: string, text: string) => (
    <>
      <h3 className={`text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2`}>
        <i className={`fa-solid ${iconClass}`}></i>
        {text}
      </h3>
      <hr className="border-emerald-200 dark:border-emerald-700 mb-4" />
    </>
);

  const renderMistakeHeading = (iconClass: string, text: string) => (
    <>
      <h3 className={`text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2`}>
        <i className={`fa-solid ${iconClass}`}></i>
        {text}
      </h3>
      <hr className="border-amber-200 dark:border-amber-700 mb-4" />
    </>
  );

  return (
    <div className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/80 z-[100] flex items-center justify-center sm:p-4 font-sans backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-slate-50 dark:bg-slate-900 w-full max-w-6xl h-[100dvh] sm:h-[90vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <h1 className="font-brand text-lg sm:text-xl font-bold text-slate-900 dark:text-amber-100 flex items-center gap-2">
                  <i className="fa-solid fa-book-medical text-amber-500"></i>
                  Clerkly Learn
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                  Clinical reasoning modules
                </p>
              </div>
            </div>
            
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-slate-600 dark:text-indigo-200 dark:hover:text-white">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        <div className={`flex-1 overflow-y-auto custom-scrollbar ${
          module ? '' : 'md:overflow-hidden flex-col md:flex-row'
        }`}>
          {/* Sidebar Controls */}
          <div className={`w-full md:w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-6 flex flex-col gap-6 shrink-0 ${
            module ? 'md:hidden' : 'md:flex'
          } md:overflow-y-auto custom-scrollbar`}>
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Library</label>
              <button
                onClick={() => {
                  setIsLibraryDropdownOpen(!isLibraryDropdownOpen);
                  setIsSymptomDropdownOpen(false);
                  setIsExaminationDropdownOpen(false);
                  setIsInvestigationDropdownOpen(false);
                  setIsScoringDropdownOpen(false);
                  setIsDiseaseDropdownOpen(false);
                  setIsSettingDropdownOpen(false);
                }}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 border border-slate-200 dark:border-slate-700"
              >
                <span className="whitespace-nowrap truncate">
                  {libraryType === 'symptom' ? 'Symptom Clerking' : libraryType === 'examination' ? 'Physical Examination' : libraryType === 'laboratory' ? 'Laboratory Interpretation' : libraryType === 'scoring' ? 'Clinical Scoring Systems' : 'Management Plan'}
                </span>
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isLibraryDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLibraryDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto custom-scrollbar">
                  <button
                    onClick={() => {
                      setLibraryType('symptom');
                      setIsLibraryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                      libraryType === 'symptom'
                        ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Symptom Clerking
                  </button>
                  <button
                    onClick={() => {
                      setLibraryType('examination');
                      setIsLibraryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                      libraryType === 'examination'
                        ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Physical Examination
                  </button>
                  <button
                    onClick={() => {
                      setLibraryType('laboratory');
                      setIsLibraryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                      libraryType === 'laboratory'
                        ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Laboratory Interpretation
                  </button>
                  <button
                    onClick={() => {
                      setLibraryType('scoring');
                      setIsLibraryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                      libraryType === 'scoring'
                        ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Clinical Scoring Systems
                  </button>
                  <button
                    onClick={() => {
                      setLibraryType('management');
                      setIsLibraryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                      libraryType === 'management'
                        ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Management Plan
                  </button>
                </div>
              )}
            </div>

            {libraryType === 'symptom' ? (
              <div className="relative">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Symptom</label>
                <button
                  onClick={() => {
                    setIsSymptomDropdownOpen(!isSymptomDropdownOpen);
                    setIsLibraryDropdownOpen(false);
                    setIsSettingDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 border border-slate-200 dark:border-slate-700"
                >
                  <span className="whitespace-nowrap truncate">{symptom}</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isSymptomDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isSymptomDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto custom-scrollbar">
                    {SYMPTOMS.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setSymptom(s);
                          setIsSymptomDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          symptom === s
                            ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : libraryType === 'examination' ? (
              <div className="relative">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Examination</label>
                <button
                  onClick={() => {
                    setIsExaminationDropdownOpen(!isExaminationDropdownOpen);
                    setIsLibraryDropdownOpen(false);
                    setIsSettingDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 border border-slate-200 dark:border-slate-700"
                >
                  <span className="whitespace-nowrap truncate">{examination}</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isExaminationDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isExaminationDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto custom-scrollbar">
                    {PHYSICAL_EXAMINATIONS.map((e) => (
                      <button
                        key={e}
                        onClick={() => {
                          setExamination(e);
                          setIsExaminationDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          examination === e
                            ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : libraryType === 'laboratory' ? (
              <div className="relative">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Investigation</label>
                <button
                  onClick={() => {
                    setIsInvestigationDropdownOpen(!isInvestigationDropdownOpen);
                    setIsLibraryDropdownOpen(false);
                    setIsSettingDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 border border-slate-200 dark:border-slate-700"
                >
                  <span className="whitespace-nowrap truncate">{investigation}</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isInvestigationDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isInvestigationDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto custom-scrollbar">
                    {LABORATORY_INVESTIGATIONS.map((inv) => (
                      <button
                        key={inv}
                        onClick={() => {
                          setInvestigation(inv);
                          setIsInvestigationDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          investigation === inv
                            ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {inv}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : libraryType === 'scoring' ? (
              <div className="relative">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Scoring System</label>
                <button
                  onClick={() => {
                    setIsScoringDropdownOpen(!isScoringDropdownOpen);
                    setIsLibraryDropdownOpen(false);
                    setIsSettingDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 border border-slate-200 dark:border-slate-700"
                >
                  <span className="whitespace-nowrap truncate">{scoringSystem}</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isScoringDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isScoringDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto custom-scrollbar">
                    {CLINICAL_SCORING_SYSTEMS.map((sys) => (
                      <button
                        key={sys}
                        onClick={() => {
                          setScoringSystem(sys);
                          setIsScoringDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          scoringSystem === sys
                            ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sys}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Disease</label>
                <button
                  onClick={() => {
                    setIsDiseaseDropdownOpen(!isDiseaseDropdownOpen);
                    setIsLibraryDropdownOpen(false);
                    setIsSettingDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 border border-slate-200 dark:border-slate-700"
                >
                  <span className="whitespace-nowrap truncate">{disease}</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isDiseaseDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isDiseaseDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto custom-scrollbar">
                    {DISEASES.map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          setDisease(d);
                          setIsDiseaseDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          disease === d
                            ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Clinical Setting</label>
              <button
                onClick={() => {
                  setIsSettingDropdownOpen(!isSettingDropdownOpen);
                  setIsSymptomDropdownOpen(false);
                  setIsExaminationDropdownOpen(false);
                  setIsInvestigationDropdownOpen(false);
                  setIsScoringDropdownOpen(false);
                  setIsDiseaseDropdownOpen(false);
                  setIsLibraryDropdownOpen(false);
                }}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 border border-slate-200 dark:border-slate-700"
              >
                <span className="whitespace-nowrap truncate">{setting}</span>
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isSettingDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isSettingDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto custom-scrollbar">
                  {SETTINGS.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSetting(s);
                        setIsSettingDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                        setting === s
                          ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="mt-auto w-full py-4 bg-indigo-950 hover:bg-black text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <i className="fa-solid fa-circle-plus"></i>
                  Generate Module
                </>
              )}
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 md:p-8 bg-slate-50 dark:bg-slate-900 overflow-y-auto custom-scrollbar flex flex-col min-h-0">
            {!module && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto opacity-50 py-12">
                <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shrink-0">
                  <i className="fa-solid fa-book-medical text-3xl text-slate-400"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Ready to Learn?</h3>
                <p className="text-sm text-slate-500">Select your parameters on the left and generate a custom clinical reasoning module.</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-950 dark:border-indigo-400 mb-4 shrink-0"></div>
                <p className="text-indigo-950 dark:text-indigo-400 font-medium animate-pulse">Generating your custom module...</p>
              </div>
            )}

            {module && !loading && (
              <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Module Header */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50">
                      {module.clinical_context}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800/50">
                      Advanced
                    </span>
                  </div>
                  <h2 className="text-3xl font-brand font-bold text-slate-900 dark:text-white mb-2">
                    {isSymptomModule(module) ? `Clerking: ${module.symptom}` : isPhysicalExamModule(module) ? `Examination: ${module.examination}` : isLabModule(module) ? `Investigation: ${module.investigation}` : isScoringModule(module) ? `Scoring System: ${module.scoring_system}` : `Management: ${module.disease}`}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {isSymptomModule(module) ? module.definition : isPhysicalExamModule(module) || isLabModule(module) ? module.overview : module.learning_objective}
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-px">
                  <button
                    onClick={() => setActiveTab('content')}
                    className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
                      activeTab === 'content' 
                        ? 'border-indigo-950 text-indigo-950 dark:border-indigo-400 dark:text-indigo-400' 
                        : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    <i className="fa-solid fa-book-open mr-2"></i>
                    Learning Content
                  </button>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
                      activeTab === 'quiz' 
                        ? 'border-indigo-950 text-indigo-950 dark:border-indigo-400 dark:text-indigo-400' 
                        : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    <i className="fa-solid fa-clipboard-question mr-2"></i>
                    Interactive Quiz
                  </button>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'content' && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      {isSymptomModule(module) ? (
                        <>
                          {/* Characterization */}
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            {renderHeading('fa-book-open', 'Core Characterization')}
                            <ul className="space-y-3">
                              {module.core_characterization_questions.map((q, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                  <i className="fa-solid fa-circle-check text-emerald-500 mt-1 text-xs"></i>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Red Flags */}
                          <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/30">
                          <h3 className="text-lg font-bold text-rose-800 dark:text-rose-300 mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-triangle-exclamation"></i>
                              Red Flag Questions
                            </h3>
                            <hr className="border-rose-200 dark:border-rose-700 mb-4" />
                            <ul className="space-y-3">
                              {module.red_flag_questions.map((q, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-rose-900 dark:text-rose-200">
                                  <i className="fa-solid fa-circle-exclamation text-rose-500 mt-1 text-xs"></i>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Differentials & Associated Symptoms */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                              {renderHeading('fa-list-ul', 'Differentials')}
                              <ul className="space-y-2">
                                {module.important_differential_diagnoses.map((d, i) => (
                                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                              {renderHeading('fa-link', 'Associated Symptoms')}
                              <div className="flex flex-wrap gap-2">
                                {module.associated_symptoms.map((s, i) => (
                                  <span key={i} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-medium border border-indigo-100 dark:border-indigo-800/30">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Checklist & Mistakes */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900/30">
                              {renderSideHeading('fa-clipboard-check', 'Quick Checklist')}
                              <ul className="space-y-2">
                                {module.quick_clerking_checklist.map((c, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-900 dark:text-emerald-200">
                                    <i className="fa-solid fa-check mt-1 text-xs"></i>
                                    <span>{c}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900/30">
                              {renderMistakeHeading('fa-lightbulb', 'Common Mistakes')}
                              <ul className="space-y-2">
                                {module.common_clerking_mistakes.map((m, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200">
                                    <i className="fa-solid fa-xmark mt-1 text-xs text-amber-500"></i>
                                    <span>{m}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : isPhysicalExamModule(module) ? (
                        <>
                          {/* Indications */}
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-stethoscope text-indigo-500"></i>
                              Indications
                            </h3>
                            <ul className="space-y-3">
                              {module.indications.map((ind, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                  <i className="fa-solid fa-circle-check text-emerald-500 mt-1 text-xs"></i>
                                  <span>{ind}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Step-by-Step Technique */}
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-list-ol text-indigo-500"></i>
                              Step-by-Step Technique
                            </h3>
                            <div className="space-y-6">
                              {module.step_by_step_technique.map((step, i) => (
                                <div key={i} className="border-l-2 border-indigo-100 dark:border-indigo-900/50 pl-4">
                                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{step.step_name}</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{step.description}</p>
                                  {step.scoring_or_details && step.scoring_or_details.length > 0 && (
                                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 mt-3">
                                      <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
                                          <tr>
                                            <th className="px-4 py-3 font-semibold border-b border-slate-200 dark:border-slate-700">Score/Detail</th>
                                            <th className="px-4 py-3 font-semibold border-b border-slate-200 dark:border-slate-700">Response</th>
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                          {step.scoring_or_details.map((detail, j) => (
                                            <tr key={j} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                              <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">{detail.score}</td>
                                              <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{detail.response}</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Findings & Interpretation */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-eye text-indigo-500"></i>
                                Important Findings
                              </h3>
                              <ul className="space-y-2">
                                {module.important_clinical_findings.map((finding, i) => (
                                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                                    {finding}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-brain text-indigo-500"></i>
                                Interpretation
                              </h3>
                              <ul className="space-y-2">
                                {module.interpretation.map((interp, i) => (
                                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                                    {interp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Checklist & Mistakes */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900/30">
                              <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-clipboard-check"></i>
                                Quick Checklist
                              </h3>
                              <ul className="space-y-2">
                                {module.quick_checklist.map((c, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-900 dark:text-emerald-200">
                                    <i className="fa-solid fa-check mt-1 text-xs"></i>
                                    <span>{c}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900/30">
                              <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-lightbulb"></i>
                                Common Mistakes
                              </h3>
                              <ul className="space-y-2">
                                {module.common_mistakes.map((m, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200">
                                    <i className="fa-solid fa-xmark mt-1 text-xs text-amber-500"></i>
                                    <span>{m}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : isScoringModule(module) ? (
                        <>
                          {/* Clinical Scenario */}
                          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-user-doctor"></i>
                              Clinical Scenario
                            </h3>
                            <div className="space-y-4 text-sm text-indigo-900 dark:text-indigo-200">
                              <p><span className="font-bold">Patient:</span> {module.clinical_scenario.age}</p>
                              <p><span className="font-bold">Symptoms:</span> {module.clinical_scenario.symptoms}</p>
                              
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h4 className="font-bold mb-2">Physical Exam Findings</h4>
                                  <p>{module.clinical_scenario.physical_exam_findings}</p>
                                </div>
                                <div>
                                  <h4 className="font-bold mb-2">Relevant Laboratory Values</h4>
                                  <p>{module.clinical_scenario.relevant_laboratory_values}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Explanation Section */}
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-calculator text-indigo-500"></i>
                              Score Breakdown
                            </h3>
                            
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Calculation</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {module.explanation.score_calculation}
                                </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Clinical Significance</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {module.explanation.clinical_significance}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Risk Assessment</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {module.explanation.mortality_or_risk_implications}
                                  </p>
                                </div>
                              </div>

                              <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                                  <i className="fa-solid fa-arrow-right"></i>
                                  Recommended Management
                                </h4>
                                <p className="text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                                  {module.explanation.correct_management}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* African Context */}
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900/30">
                            <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-earth-africa"></i>
                              African Clinical Context
                            </h3>
                            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                              {module.african_clinical_context}
                            </p>
                          </div>
                        </>
                      ) : isLabModule(module) ? (
                        <>
                          {/* Normal Ranges */}
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-vial text-indigo-500"></i>
                              Normal Reference Ranges
                            </h3>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 mt-3">
                              <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
                                  <tr>
                                    <th className="px-4 py-3 font-semibold border-b border-slate-200 dark:border-slate-700">Test</th>
                                    <th className="px-4 py-3 font-semibold border-b border-slate-200 dark:border-slate-700">Normal Range</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                  {module.normal_reference_ranges.map((range, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">{range.test}</td>
                                      <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{range.normal_range}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Clinical Scenario */}
                          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-user-doctor"></i>
                              Clinical Scenario
                            </h3>
                            <p className="text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed">
                              {module.sample_clinical_scenario}
                            </p>
                          </div>

                          {/* Results Table */}
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-file-medical text-indigo-500"></i>
                              Laboratory Results
                            </h3>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 mt-3">
                              <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">
                                  <tr>
                                    <th className="px-4 py-3 font-semibold border-b border-slate-200 dark:border-slate-700">Test</th>
                                    <th className="px-4 py-3 font-semibold border-b border-slate-200 dark:border-slate-700">Result</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                  {module.laboratory_results.map((result, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                      <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">{result.test}</td>
                                      <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{result.result}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Interpretation & Differentials */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-brain text-indigo-500"></i>
                                Interpretation
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">
                                {module.interpretation_question.question}
                              </p>
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {module.interpretation_question.explanation}
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-list-ul text-indigo-500"></i>
                                Differentials
                              </h3>
                              <ul className="space-y-2">
                                {module.differential_diagnoses.map((d, i) => (
                                  <li key={i} className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Clinical Significance & Next Steps */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-heart-pulse text-rose-500"></i>
                                Clinical Significance
                              </h3>
                              <ul className="space-y-2">
                                {module.clinical_significance.map((sig, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <i className="fa-solid fa-circle text-[6px] mt-2 text-rose-400"></i>
                                    <span>{sig}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900/30">
                              <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
                                <i className="fa-solid fa-arrow-right"></i>
                                Next Management Steps
                              </h3>
                              <ul className="space-y-2">
                                {module.next_management_steps.map((step, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-900 dark:text-emerald-200">
                                    <i className="fa-solid fa-check mt-1 text-xs"></i>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Common Mistakes */}
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900/30">
                            <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-lightbulb"></i>
                              Common Interpretation Mistakes
                            </h3>
                            <ul className="space-y-2">
                              {module.common_mistakes.map((m, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200">
                                  <i className="fa-solid fa-xmark mt-1 text-xs text-amber-500"></i>
                                  <span>{m}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : isManagementModule(module) ? (
                        <>
                          {/* Clinical Scenario */}
                          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-user-doctor"></i>
                              Clinical Scenario
                            </h3>
                            <div className="space-y-4 text-sm text-indigo-900 dark:text-indigo-200">
                              <p><span className="font-bold">Patient:</span> {module.clinical_scenario.age}</p>
                              <p><span className="font-bold">Symptoms:</span> {module.clinical_scenario.symptoms}</p>
                              
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h4 className="font-bold mb-2">Vital Signs</h4>
                                  <p>{module.clinical_scenario.vital_signs}</p>
                                </div>
                                <div>
                                  <h4 className="font-bold mb-2">Physical Exam</h4>
                                  <p>{module.clinical_scenario.physical_exam_findings}</p>
                                </div>
                              </div>
                              {module.clinical_scenario.key_lab_results && (
                                <div className="mt-4">
                                  <h4 className="font-bold mb-2">Key Lab Results</h4>
                                  <p>{module.clinical_scenario.key_lab_results}</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Full Management Plan */}
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-clipboard-list text-indigo-500"></i>
                              Full Management Plan
                            </h3>
                            
                            <div className="space-y-6">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Immediate Care</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {module.full_management_plan.immediate_care}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Definitive Therapy</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {module.full_management_plan.definitive_therapy}
                                  </p>
                                </div>
                              </div>

                              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Medication Dosing</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {module.full_management_plan.medication_dosing}
                                </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Fluid Therapy</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {module.full_management_plan.fluid_therapy}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Electrolyte Correction</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {module.full_management_plan.electrolyte_correction}
                                  </p>
                                </div>
                              </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Monitoring Parameters</h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {module.full_management_plan.monitoring_parameters}
                                  </p>
                                </div>
                                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                                  <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
                                    <i className="fa-solid fa-arrow-right"></i>
                                    Disposition
                                  </h4>
                                  <p className="text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                                    {module.full_management_plan.disposition}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* African Context */}
                          <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900/30">
                            <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                              <i className="fa-solid fa-earth-africa"></i>
                              African Clinical Context
                            </h3>
                            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                              {module.african_clinical_context}
                            </p>
                          </div>
                        </>
                      ) : null}
                    </motion.div>
                  )}

                  {activeTab === 'quiz' && (
                    <motion.div
                      key="quiz"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                    >
                      {(isLabModule(module) ? [module.interpretation_question] : isScoringModule(module) ? module.interactive_questions : isManagementModule(module) ? module.interactive_questions : module.interactive_questions).map((q, index) => {
                        const isAnswered = showExplanations[index];
                        const isCorrect = quizAnswers[index] === q.correct_answer;

                        return (
                          <div key={index} className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
                              <span className="text-indigo-500 mr-2">Q{index + 1}.</span>
                              {q.question}
                            </h3>
                            
                            <div className="space-y-3 mb-6">
                              {q.options.map((opt, i) => {
                                const isSelected = quizAnswers[index] === opt;
                                const isThisCorrect = opt === q.correct_answer;
                                
                                let btnClass = "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                                
                                if (!isAnswered) {
                                  btnClass += "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-700 dark:text-slate-300";
                                } else {
                                  if (isThisCorrect) {
                                    btnClass += "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-medium";
                                  } else if (isSelected) {
                                    btnClass += "bg-rose-50 dark:bg-rose-900/20 border-rose-500 text-rose-800 dark:text-rose-200";
                                  } else {
                                    btnClass += "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 opacity-50";
                                  }
                                }

                                return (
                                  <button
                                    key={i}
                                    onClick={() => !isAnswered && handleQuizAnswer(index, opt)}
                                    disabled={isAnswered}
                                    className={btnClass}
                                  >
                                    <div className="flex justify-between items-center">
                                      <span>{opt}</span>
                                      {isAnswered && isThisCorrect && <i className="fa-solid fa-check text-emerald-500"></i>}
                                      {isAnswered && isSelected && !isThisCorrect && <i className="fa-solid fa-xmark text-rose-500"></i>}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {isAnswered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className={`p-4 rounded-xl border ${
                                  isCorrect 
                                    ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800/30' 
                                    : 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/10 dark:border-indigo-800/30'
                                }`}
                              >
                                <p className="text-sm font-bold mb-1 flex items-center gap-2">
                                  {isCorrect ? (
                                    <span className="text-emerald-700 dark:text-emerald-400"><i className="fa-solid fa-thumbs-up mr-2"></i>Correct!</span>
                                  ) : (
                                    <span className="text-indigo-700 dark:text-indigo-400"><i className="fa-solid fa-circle-info mr-2"></i>Explanation</span>
                                  )}
                                </p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {q.explanation}
                                </p>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
