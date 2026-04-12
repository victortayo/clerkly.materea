import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  type: 'default' | 'encouragement';
  duration: number;
  onClose: () => void;
}

export function Toast({ message, type, duration, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isEncouragement = type === 'encouragement';

  return (
    <motion.div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full shadow-lg border z-[102] text-sm font-semibold ${isEncouragement
          ? 'bg-indigo-950/90 border-indigo-800 text-white'
          : 'bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
        }`}
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.8 }}
      transition={{ type: 'spring', damping: 15, stiffness: 300, mass: 0.5 }}
    >
      {isEncouragement && (
        <img src="/avatar.png" alt="Chief" className="w-8 h-8 rounded-full" />
      )}
      <p className={`pr-2 ${isEncouragement ? 'text-[10px] sm:text-xs' : ''}`}>{message}</p>
    </motion.div>
  );
}
