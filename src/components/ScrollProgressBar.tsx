import { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';
import WellDoneConfetti from './WellDoneConfetti';

const encouragementPopups = [
  { percent: 25, message: "You're doing great, keep it up!" },
  { percent: 50, message: "Halfway there, you're making great progress!" },
  { percent: 75, message: "Almost at the end, well done!" },
];

interface ScrollProgressBarProps {
  templateId: string;
  mode: 'teach' | 'documentation'; 
}

const ScrollProgressBar = ({ templateId, mode }: ScrollProgressBarProps) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [shownPopups, setShownPopups] = useState<number[]>([]);
  const [lastShownPercent, setLastShownPercent] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isProgressButtonVisible, setIsProgressButtonVisible] = useState(false);
  const { showToast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage > 100 ? 100 : percentage);

      if (scrollTop > 300) {
        setIsProgressButtonVisible(true);
      } else {
        setIsProgressButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setShownPopups([]);
    setLastShownPercent(null);
    setShowConfetti(false);
  }, [templateId, mode]);

  useEffect(() => {
    if (mode === 'teach') {
      const currentPopup = encouragementPopups.find(p => 
        scrollPercentage >= p.percent && 
        !shownPopups.includes(p.percent) &&
        (lastShownPercent === null || p.percent > lastShownPercent)
      );

      if (currentPopup) {
        setShownPopups(prev => [...prev, currentPopup.percent]);
        setLastShownPercent(currentPopup.percent);
        showToast(currentPopup.message, 'encouragement', 3000);
      }

      if (scrollPercentage >= 97 && !showConfetti) {
        showToast("Well done, Chief!", 'encouragement', 5000);
        setShowConfetti(true);
      }
    }
  }, [scrollPercentage, shownPopups, lastShownPercent, mode, showToast, showConfetti]);

  const circumference = 2 * Math.PI * 28; // 2 * pi * r

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-200 dark:bg-slate-700 z-50">
        <div 
          className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {isProgressButtonVisible && mode === 'teach' && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={scrollToTop} 
            className="relative w-14 h-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60">
              <circle 
                className="text-slate-200 dark:text-slate-700" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="transparent" 
                r="28" 
                cx="30" 
                cy="30"
              />
              <circle 
                className="text-yellow-400" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="transparent" 
                r="28" 
                cx="30" 
                cy="30" 
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: circumference - (scrollPercentage / 100) * circumference,
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                  transition: 'stroke-dashoffset 0.3s ease-out'
                }}
              />
            </svg>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      )}

      {showConfetti && <WellDoneConfetti onComplete={() => setShowConfetti(false)} />}
    </>
  );
};

export default ScrollProgressBar;
