import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTopButton as BackToTop } from './BackToTopButton';
import { AppUser } from '../types';

interface LayoutProps {
  user: AppUser | null;
  children: React.ReactNode;
  hero?: React.ReactNode;
  onReset: () => void;
  onOpenHelp: () => void;
  onOpenAbout: () => void;
  onOpenDisclaimer: () => void;
  onShowBookmarks: () => void;
  showBackToTop?: boolean;
}

export const Layout = ({ 
  user, 
  children, 
  hero, 
  onReset, 
  onOpenHelp, 
  onOpenAbout,
  onOpenDisclaimer,
  onShowBookmarks,
  showBackToTop = true
}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 transition-colors duration-300">
      <Header 
        user={user}
        onReset={onReset} 
        onShowBookmarks={onShowBookmarks}
      />
      
      {hero && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {hero}
        </div>
      )}

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <Footer 
        onOpenHelp={onOpenHelp}
        onOpenAbout={onOpenAbout}
        onOpenDisclaimer={onOpenDisclaimer}
      />
      {showBackToTop && <BackToTop />}
    </div>
  );
};
