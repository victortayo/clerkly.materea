interface FooterProps {
  onOpenHelp: () => void;
  onOpenAbout: () => void;
  onOpenDisclaimer: () => void;
}

export function Footer({ onOpenHelp, onOpenAbout, onOpenDisclaimer }: FooterProps) {
  return (
    <footer className="bg-indigo-950 dark:bg-slate-900 text-slate-400 dark:text-slate-500 py-12 mt-16 border-t border-transparent dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Logo & Brand Anchor */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
            <i className="fa-solid fa-file-medical text-white text-xs"></i>
          </div>
          <span className="text-white font-bold tracking-tight text-xl font-brand">clerkly</span>
        </div>
        <p className="text-xs max-w-md mx-auto mb-6 leading-relaxed">
          Repository for clinical clerking templates and more.
        </p>
        
        {/* Action Links */}
        <div className="flex justify-center gap-6 mb-6">
          <button 
            onClick={onOpenHelp} 
            className="hover:text-white transition-colors text-xs font-semibold bg-transparent border-none cursor-pointer"
          >
            Help
          </button>
          <button 
            onClick={onOpenDisclaimer} 
            className="hover:text-white transition-colors text-xs font-semibold bg-transparent border-none cursor-pointer"
          >
            Disclaimer
          </button>
          <button 
            onClick={onOpenAbout} 
            className="hover:text-white transition-colors text-xs font-semibold bg-transparent border-none cursor-pointer"
          >
            About
          </button>
        </div>
        
        {/* Copyright / Legal Text Line */}
        <div className="text-[10px] border-t border-slate-800 pt-4">
          &copy; {new Date().getFullYear()} Clerkly. All rights reserved. <br /> For educational purposes.
        </div>
      </div>
    </footer>
  );
}
