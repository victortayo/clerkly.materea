import { useTheme } from '../hooks/useTheme';
import { useBookmarks } from '../hooks/useBookmarks';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

interface HeaderProps {
  onReset: () => void;
  onShowBookmarks: () => void;
}

export function Header({ onReset, onShowBookmarks }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { bookmarkedTemplateIds } = useBookmarks();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // The onAuthStateChanged listener in App.tsx will handle the redirect to the sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-morphism transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          {/* Left Side: Logo / Home Button */}
          <button 
            onClick={onReset}
            className="flex items-center gap-2 group p-1.5 -ml-1.5 rounded-xl hover:bg-slate-50 transition-all"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-100 dark:shadow-none bg-indigo-950 group-hover:bg-black dark:bg-white dark:group-hover:bg-indigo-200 transition-colors">
              <i className="fa-solid fa-file-medical text-white dark:text-indigo-950 text-sm leading-none"></i>
            </div>
          </button>

          {/* Right Side: Actions Container */}
          <div className="flex items-center gap-2">
            {/* Theme Toggler */}
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

            {/* Bookmarks Button */}
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
            
            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 hover:text-red-900 hover:bg-red-100 dark:text-slate-300 dark:hover:text-red-400 dark:hover:bg-red-800 transition-all"
              title="Sign Out"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
