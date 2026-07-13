import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { clerklyLearnLibrary, LearningModule, LearningModuleCategory } from '../data/learn';

interface ClerklyLearnProps {
  onClose: () => void;
}

export function ClerklyLearn({ onClose }: ClerklyLearnProps) {
  const [selectedCategory, setSelectedCategory] = useState<LearningModuleCategory | null>(null);
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);
  const [isMobileContentVisible, setIsMobileContentVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories: LearningModuleCategory[] = ['Symptom Clerking', 'Physical Examination', 'Laboratory Interpretation', 'Clinical Scoring Systems', 'Counselling'];

  // Auto-select first category and module on desktop for a better initial view.
  useEffect(() => {
    if (window.innerWidth >= 768) {
        if (!selectedCategory) {
            const firstCategory = categories[0];
            setSelectedCategory(firstCategory);
            const firstModule = clerklyLearnLibrary.find(m => m.category === firstCategory);
            if (firstModule) {
                setSelectedModule(firstModule);
            }
        }
    }
  }, []); // Empty dependency array to run only once on mount.

  const handleSelectModule = (module: LearningModule) => {
    setSelectedModule(module);
    if (window.innerWidth < 768) {
      setIsMobileContentVisible(true);
    }
  };

  const handleMobileBack = () => {
    setIsMobileContentVisible(false);
    setSelectedModule(null); // Also clear module selection on mobile back
  };
  
  const handleCategorySelect = (category: LearningModuleCategory) => {
      setSelectedCategory(category);
      setSelectedModule(null); // Deselect module when changing category
  }
  
  const handleBackToCategories = () => {
      setSelectedCategory(null);
      setSelectedModule(null);
  }

  // Filter modules based on search query
  const query = searchQuery.trim().toLowerCase();
  const filteredModules = query.length > 0
    ? clerklyLearnLibrary.filter(m => 
        m.title.toLowerCase().includes(query) || 
        m.category.toLowerCase().includes(query) || 
        (m.subCategory && m.subCategory.toLowerCase().includes(query))
      )
    : [];

  const Sidebar = (
    <div className={`w-full md:w-80 bg-white dark:bg-slate-800 md:border-r border-slate-200 dark:border-slate-700 p-4 md:p-6 flex-col gap-4 shrink-0 md:overflow-y-auto custom-scrollbar ${isMobileContentVisible ? 'hidden md:flex' : 'flex'}`}>
      <div className="relative mb-2">
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search symptoms or topics..."
          className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-2.5 pl-9 pr-9 text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all dark:text-slate-200"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <i className="fa-solid fa-xmark text-xs"></i>
          </button>
        )}
      </div>

      {query.length > 0 ? (
        <div>
          <div className="flex justify-between items-center mb-3 px-2">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Search Results</h2>
            <span className="text-[10px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-1.5 py-0.5 rounded-full">
              {filteredModules.length}
            </span>
          </div>
          {filteredModules.length > 0 ? (
            <div className="flex flex-col gap-1.5">
              {filteredModules.map(module => (
                <button
                  key={module.id}
                  onClick={() => handleSelectModule(module)}
                  className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition-colors border ${
                  selectedModule?.id === module.id
                      ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 shadow-sm'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span>{module.title}</span>
                    <span className="text-[10px] opacity-60 font-medium uppercase tracking-tight">
                      {module.category}{module.subCategory ? ` • ${module.subCategory}` : ''}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-face-frown text-slate-300 text-xl"></i>
              </div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">No topics found matching your search.</p>
            </div>
          )}
        </div>
      ) : (
        <>
          {!selectedCategory ? (
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Categories</h2>
              <div className="flex flex-col gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="w-full text-left p-3 rounded-lg transition-all flex justify-between items-center bg-slate-50 hover:bg-white dark:bg-slate-900/50 dark:hover:bg-slate-700/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md active:scale-[0.98] hover:border-indigo-300 dark:hover:border-indigo-600"
                  >
                    <span className="text-slate-700 dark:text-slate-200 text-xs font-bold">{category}</span>
                    <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <button onClick={handleBackToCategories} className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline mb-4 px-2">
                <i className="fa-solid fa-chevron-left text-[10px]"></i>
                Back to Categories
              </button>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider my-3 px-2">{selectedCategory}</h2>
              
              {selectedCategory === 'Symptom Clerking' ? (
                <div className="flex flex-col gap-6">
                  {(() => {
                    const modules = clerklyLearnLibrary.filter(m => m.category === 'Symptom Clerking');
                    const grouped: Record<string, LearningModule[]> = {};
                    modules.forEach(m => {
                      const sub = m.subCategory || 'Other';
                      if (!grouped[sub]) grouped[sub] = [];
                      grouped[sub].push(m);
                    });
                    
                    return Object.entries(grouped).map(([subCategory, subModules]) => (
                      <div key={subCategory} className="flex flex-col gap-1.5">
                        <h3 className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-2 mb-1">
                          {subCategory}
                        </h3>
                        {subModules.map(module => (
                          <button
                            key={module.id}
                            onClick={() => handleSelectModule(module)}
                            className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition-colors border ${
                            selectedModule?.id === module.id
                                ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 shadow-sm'
                                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'
                            }`}
                          >
                            {module.title}
                          </button>
                        ))}
                      </div>
                    ));
                  })()}
                </div>
              ) : (
                <div className="flex flex-col gap-1.5">
                  {clerklyLearnLibrary
                    .filter(module => module.category === selectedCategory)
                    .map(module => (
                        <button
                            key={module.id}
                            onClick={() => handleSelectModule(module)}
                            className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition-colors border ${
                            selectedModule?.id === module.id
                                ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 shadow-sm'
                                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'
                            }`}
                        >
                            {module.title}
                        </button>
                    ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
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
            {selectedCategory ? (
                 <i className="fa-solid fa-list-ul text-3xl text-slate-400"></i>
            ) : (
                <i className="fa-solid fa-book-medical text-3xl text-slate-400"></i>
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
            {selectedCategory ? `Select a module from "${selectedCategory}"` : 'Welcome to the Library'}
          </h3>
          <p className="text-sm text-slate-500">
              {selectedCategory ? 'Select a topic from the navigation panel to start learning.' : 'Select a category to begin.'}
          </p>
        </div>
      ) : (
        <motion.div 
          key={selectedModule.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="learn-content" dangerouslySetInnerHTML={{ __html: selectedModule.content }} />
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