import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ToastProvider } from '../context/ToastContext';
import { BackToTopButton } from './BackToTopButton';

interface LayoutProps {
  children: ReactNode;
  onReset: () => void;
  onShowBookmarks: () => void;
  onOpenHelp: () => void;
  onOpenAbout: () => void;
  onOpenDisclaimer: () => void;
  hero?: ReactNode;
  showBackToTop?: boolean;
}

export function Layout({ 
  children, 
  hero, 
  showBackToTop, 
  onReset, 
  onShowBookmarks, 
  onOpenHelp, 
  onOpenAbout, 
  onOpenDisclaimer 
}: LayoutProps) {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
        <Header onReset={onReset} onShowBookmarks={onShowBookmarks} />
        {hero}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
          {children}
        </main>
        <Footer 
          onOpenHelp={onOpenHelp} 
          onOpenAbout={onOpenAbout} 
          onOpenDisclaimer={onOpenDisclaimer} 
        />
        {showBackToTop && <BackToTopButton />}
      </div>
    </ToastProvider>
  );
}
