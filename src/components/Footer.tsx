interface FooterProps {
  onOpenHelp: () => void;
  onOpenAbout: () => void;
  onOpenDisclaimer: () => void;
}

export function Footer({ onOpenHelp, onOpenAbout, onOpenDisclaimer }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-indigo-950 text-slate-400 dark:text-slate-500 py-3 border-t border-slate-200/10 dark:border-slate-800 transition-colors z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-[11px]">
            &copy; {new Date().getFullYear()} Clerkly
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenHelp} 
              className="font-brand hover:text-white transition-colors text-[11px] font-semibold bg-transparent border-none cursor-pointer"
            >
              Help
            </button>
            <button 
              onClick={onOpenDisclaimer} 
              className="font-brand hover:text-white transition-colors text-[11px] font-semibold bg-transparent border-none cursor-pointer"
            >
              Disclaimer
            </button>
            <button 
              onClick={onOpenAbout} 
              className="font-brand hover:text-white transition-colors text-[11px] font-semibold bg-transparent border-none cursor-pointer"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
