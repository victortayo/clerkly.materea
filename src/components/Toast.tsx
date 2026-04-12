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
      className={`fixed top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full shadow-lg border z-[102] text-sm font-semibold ${isEncouragement
          ? 'bg-indigo-950/90 border-indigo-800 text-white'
          : 'bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
        }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', damping: 20, stiffness: 150 }}
    >
      {isEncouragement && (
        <img src="/avatar.png" alt="Chief" className="w-8 h-8 rounded-full" />
      )}
      <p className="pr-2">{message}</p>
    </motion.div>
  );
}
