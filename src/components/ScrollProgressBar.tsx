import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../context/ToastContext';

const completionMessages = [
  "Well done, chief!",
  "Did you just read all that? Impressive!",
  "You've conquered the scroll!",
  "Knowledge acquired. Mission complete.",
  "You're on fire! 🔥",
];

const encouragementMessages = [
  "Serious Chiefs finish what they start.😎",
  "You’re almost done. Don’t stop here.😏",
  "Stop abandoning cases like this.🙂",
  "So we’re just stopping halfway now?🙄",
  "We both know you want to stop too early.😑",
  "You must finish what you started Chief.😐",
  "You’re this close. Don’t leave now.😳",
];

const ConfettiPiece = () => {
    const x = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = Math.random() * 3 + 2;
    const rotation = Math.random() * 360;
    const colors = ['#F59E0B', '#FBBF24', '#FDE68A', '#FFFFFF', '#EC4899'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <motion.div
            className="absolute top-0"
            style={{ left: `${x}vw`, backgroundColor: color, width: '10px', height: '10px' }}
            initial={{ y: '-10vh', opacity: 1, rotate: 0 }}
            animate={{ y: '110vh', opacity: 0.8, rotate: rotation }}
            transition={{ duration, delay, ease: "linear" }}
        />
    )
}

const ScrollProgressBar: React.FC<{ templateId: string }> = ({ templateId }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [completionMessage, setCompletionMessage] = useState('');
  const [encouragementMilestones, setEncouragementMilestones] = useState<number[]>([]);
  const [triggeredMilestones, setTriggeredMilestones] = useState<number[]>([]);
  const { showToast } = useToast();

  // Effect for setup and scroll listener management
  useEffect(() => {
    // Reset states for the new template/page
    setHasCompleted(false);
    setShowCelebration(false);
    setScrollProgress(0);
    setTriggeredMilestones([]);

    const randomCompletionMessage = completionMessages[Math.floor(Math.random() * completionMessages.length)];
    setCompletionMessage(randomCompletionMessage);

    const numEncouragements = Math.floor(Math.random() * 2) + 1;
    const newMilestones: number[] = [];
    const availableMilestones = Array.from({ length: 61 }, (_, i) => i + 20); // 20% to 80%
    for (let i = 0; i < numEncouragements; i++) {
        const randomIndex = Math.floor(Math.random() * availableMilestones.length);
        const selected = availableMilestones.splice(randomIndex, 1)[0];
        if (selected) newMilestones.push(selected);
    }
    setEncouragementMilestones(newMilestones.sort((a, b) => a - b));

    // Simple scroll handler that only updates progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight <= 0) {
        setScrollProgress(100); // If no scrollbar, consider it completed
        return;
      }
      const scrollPosition = window.scrollY;
      setScrollProgress((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    // Cleanup listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [templateId]); // Re-run this effect when the templateId changes

  // Effect to react to changes in scrollProgress
  useEffect(() => {
    // Set visibility of the scroll-to-top button
    if (scrollProgress > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Trigger encouragement toasts
    encouragementMilestones.forEach(milestone => {
        if (scrollProgress >= milestone && !triggeredMilestones.includes(milestone)) {
            setTriggeredMilestones(prev => [...prev, milestone]);
            const randomMessage = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
            showToast(randomMessage, 'encouragement', 4000);
        }
    });

    // Trigger celebration at 100%
    if (scrollProgress >= 97 && !hasCompleted) {
        setHasCompleted(true);
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 5000);
    }
  }, [scrollProgress, encouragementMilestones, triggeredMilestones, hasCompleted, showToast]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* --- Celebration --- */}
      <AnimatePresence>
        {showCelebration && (
          <>
            <div className="fixed inset-0 w-full h-full pointer-events-none z-[100]">
                {Array.from({ length: 50 }).map((_, i) => <ConfettiPiece key={i} />)}
            </div>
            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl text-center z-[101]"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
            >
                <h3 className="text-2xl font-bold font-brand text-amber-600 dark:text-amber-400 mb-2 whitespace-nowrap">🎉 Well Done! 🎉</h3>
                <p className="text-slate-700 dark:text-slate-300">{completionMessage}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    
      {/* --- Scroll-to-Top Button --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-xl flex items-center justify-center text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 transition-all hover:scale-110 z-50 group border border-slate-200 dark:border-slate-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transition: 'opacity 0.3s, transform 0.3s' }}
        aria-label="Scroll to top"
      >
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
              <circle
                  className="text-indigo-950/50"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  r={radius}
                  cx="24"
                  cy="24"
              />
              <circle
                  className="text-amber-500 dark:text-amber-400"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  fill="transparent"
                  r={radius}
                  cx="24"
                  cy="24"
                  style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
              />
          </svg>
          <i className="fa-solid fa-arrow-up absolute text-base"></i>
      </button>
    </>
  );
};

export default ScrollProgressBar;
