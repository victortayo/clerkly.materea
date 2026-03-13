import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  onReset: () => void;
  onOpenHelp: () => void;
  onOpenContribute: () => void;
  onShowBookmarks: () => void;
}

export function Layout({ children, hero, onReset, onOpenHelp, onOpenContribute, onShowBookmarks }: LayoutProps & { hero?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
      <Header onReset={onReset} onShowBookmarks={onShowBookmarks} />
      {hero}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      <Footer onOpenHelp={onOpenHelp} onOpenContribute={onOpenContribute} />
    </div>
  );
}
