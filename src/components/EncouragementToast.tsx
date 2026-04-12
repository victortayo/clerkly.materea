import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface EncouragementToastProps {
  message: string;
  duration: number;
  onClose: () => void;
}

export function EncouragementToast({ message, duration, onClose }: EncouragementToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      className="fixed top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full shadow-lg border z-[102] text-sm font-semibold bg-indigo-950/90 border-indigo-800 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', damping: 20, stiffness: 150 }}
    >
      <img src="/avatar.png" alt="Chief" className="w-8 h-8 rounded-full" />
      <p className="pr-2">{message}</p>
    </motion.div>
  );
}
