import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { clerklyLearnLibrary, LearningModule, LearningModuleCategory } from '../data/learn';
import { Remarkable } from 'remarkable';

interface ClerklyLearnProps {
  onClose: () => void;
}

export function ClerklyLearn({ onClose }: ClerklyLearnProps) {
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);
  const [isMobileContentVisible, setIsMobileContentVisible] = useState(false);

  // Initialize remarkable with HTML support enabled
  const md = new Remarkable({ html: true });

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const firstModule = clerklyLearnLibrary.find(m => m.category === 'Symptom Clerking');
      if (firstModule) {
        setSelectedModule(firstModule);
      }
    }
  }, []);

  const handleSelectModule = (module: LearningModule) => {
    setSelectedModule(module);
    if (window.innerWidth < 768) {
      setIsMobileContentVisible(true);
    }
  };

  const handleMobileBack = () => {
    setIsMobileContentVisible(false);
  };

  const categories: LearningModuleCategory[] = ['Symptom Clerking', 'Physical Examination', 'Laboratory Interpretation', 'Clinical Scoring Systems'];

  const Sidebar = (
    <div className={`w-full md:w-80 bg-white dark:bg-slate-800 md:border-r border-slate-200 dark:border-slate-700 p-6 flex-col gap-4 shrink-0 md:overflow-y-auto custom-scrollbar ${isMobileContentVisible ? 'hidden md:flex' : 'flex'}`}>
      {categories.map(category => (
        <div key={category}>
          <h2 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 px-2">{category}</h2>
          <div className="flex flex-col gap-1">
            {clerklyLearnLibrary
              .filter(module => module.category === category)
              .map(module => (
                  <button
                      key={module.id}
                      onClick={() => handleSelectModule(module)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedModule?.id === module.id
                          ? 'bg-indigo-100 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                  >
                      {module.title}
                  </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  const Content = (
    <div className={`flex-1 p-6 md:p-8 bg-slate-50 dark:bg-slate-900 overflow-y-auto custom-scrollbar flex-col min-h-0 ${isMobileContentVisible ? 'flex' : 'hidden md:flex'}`}>
      <div className="md:hidden mb-4">
        <button onClick={handleMobileBack} className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
          <i className="fa-solid fa-chevron-left"></i>
          Back to Topics
        </button>
      </div>
      {!selectedModule ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto opacity-50 py-12">
          <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shrink-0">
            <i className="fa-solid fa-book-medical text-3xl text-slate-400"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Welcome to the Library</h3>
          <p className="text-sm text-slate-500">Select a topic from the navigation panel to start learning.</p>
        </div>
      ) : (
        <motion.div 
          key={selectedModule.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="learn-content" dangerouslySetInnerHTML={{ __html: md.render(selectedModule.content) }} />
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/80 z-[100] flex items-center justify-center sm:p-4 font-sans backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-slate-50 dark:bg-slate-900 w-full max-w-6xl h-[100dvh] sm:h-[90vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="font-brand text-lg sm:text-xl font-bold text-slate-900 dark:text-amber-100 flex items-center gap-2">
                <i className="fa-solid fa-book-medical text-amber-500"></i>
                Clerkly Learn
              </h1>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-slate-600 dark:text-indigo-200 dark:hover:text-white">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-row">
          {Sidebar}
          {Content}
        </div>
      </div>
    </div>
  );
}
