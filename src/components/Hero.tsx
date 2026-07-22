import { useState, useRef, useEffect } from 'react';
import { Specialty } from '../types';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSpecialty: Specialty | 'All';
  setSelectedSpecialty: (specialty: Specialty | 'All') => void;
  showBookmarks: boolean;
  setShowBookmarks: (show: boolean) => void;
}

export function Hero({
  searchQuery,
  setSearchQuery,
  selectedSpecialty,
  setSelectedSpecialty,
  showBookmarks,
  setShowBookmarks
}: HeroProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const specialties: (Specialty | 'All')[] = [
    'All',
    'Pediatrics',
    'Internal Medicine',
    'Obstetrics and Gynecology',
    'Surgery',
    'General Outpatient',
    'Behavioral Sciences'
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <section className="w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="py-20 sm:py-32 flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-brand text-6xl sm:text-8xl font-bold text-indigo-950 dark:text-indigo-100 mb-4 tracking-tighter">
            clerkly
          </h1>
          <p className="text-slate-400 dark:text-slate-500 text-sm sm:text-base font-medium tracking-[0.2em] uppercase">
            clinical notes
          </p>
        </div>

        <div className="w-full max-w-2xl px-4">
          <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-2">
            {/* Search Bar */}
            <div className="flex-grow w-full bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 flex items-center transition-colors">
              <i className="fa-solid fa-magnifying-glass text-slate-400 mr-3"></i>
              <input
                type="text"
                className="w-full bg-transparent border-none text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-0 text-sm"
                placeholder="Search condition, symptom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="relative group">
                <button
                  onClick={() => setShowBookmarks(!showBookmarks)}
                  className={`ml-2 w-9 h-9 flex items-center justify-center rounded-lg transition-all active:scale-90 ${
                    showBookmarks
                      ? 'bg-indigo-100 dark:bg-indigo-900/50'
                      : 'bg-slate-200 dark:bg-slate-700/50 hover:bg-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  <i
                    className={`fa-bookmark transition-colors ${
                      showBookmarks
                        ? 'fa-solid text-indigo-600 dark:text-indigo-300'
                        : 'fa-regular text-slate-500 dark:text-slate-400 group-hover:text-indigo-500'
                    }`}
                  ></i>
                </button>
                <span className="absolute top-full right-0 mt-2 whitespace-nowrap bg-slate-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  {showBookmarks ? 'Showing Bookmarks' : 'Show Bookmarks'}
                </span>
              </div>
            </div>

            {/* Specialty Dropdown */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto px-4 py-3 bg-slate-100 dark:bg-slate-800 text-indigo-950 dark:text-indigo-200 rounded-xl text-sm font-bold flex items-center justify-between sm:justify-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
              >
                <span className="whitespace-nowrap">
                  {selectedSpecialty === 'All' ? 'All Specialties' : selectedSpecialty}
                </span>
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-full sm:w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {specialties.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => {
                        setSelectedSpecialty(spec);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        selectedSpecialty === spec
                          ? 'font-bold bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200'
                          : 'font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {spec === 'All' ? 'All Specialties' : spec}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
