import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useBookmarks } from '../hooks/useBookmarks';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AppUser } from '../types';

interface HeaderProps {
  user: AppUser | null;
  onReset: () => void;
  onShowBookmarks: () => void;
}

export function Header({ user, onReset, onShowBookmarks }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { bookmarkedTemplateIds } = useBookmarks();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-morphism transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          <button 
            onClick={onReset}
            className="flex items-center gap-2 group p-1.5 -ml-1.5 rounded-xl hover:bg-slate-50 transition-all"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-100 dark:shadow-none bg-indigo-950 group-hover:bg-black dark:bg-white dark:group-hover:bg-indigo-200 transition-colors">
              <i className="fa-solid fa-file-medical text-white dark:text-indigo-950 text-sm leading-none"></i>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-indigo-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-indigo-400 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </button>

            <button
              onClick={onShowBookmarks}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 hover:text-indigo-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-slate-800 transition-all"
              title="My Bookmarks"
            >
              <i className="fa-solid fa-bookmark"></i>
              {bookmarkedTemplateIds.size > 0 && (
                <span className="text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-1.5 py-0.5 rounded-md">
                  {bookmarkedTemplateIds.size}
                </span>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onBlur={() => setTimeout(() => setIsMenuOpen(false), 150)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-indigo-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-indigo-400 dark:hover:bg-slate-800 transition-all"
              >
                 <i className="fa-solid fa-user"></i>
              </button>
              {isMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  {user && (
                    <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                      {user.displayName && <p className="font-bold text-sm text-slate-800 dark:text-slate-100 truncate">{user.displayName}</p>}
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                       {user.role && (
                        <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700/50 flex items-center gap-4">
                            <div>
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Role</p>
                                <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{user.role}</p>
                            </div>
                            {user.specialty && user.specialty !== 'N/A' && (
                                <div className="border-l border-slate-200 dark:border-slate-700/50 pl-4">
                                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Specialty</p>
                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{user.specialty}</p>
                                </div>
                            )}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-2">
                    <button
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={handleSignOut}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-bold text-red-500 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
