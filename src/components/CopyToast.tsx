import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface CopyToastProps {
  message: string;
  duration: number;
  onClose: () => void;
}

export function CopyToast({ duration, onClose }: CopyToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl bg-indigo-950 text-white"
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.8 }}
      transition={{ type: 'spring', damping: 15, stiffness: 300, mass: 0.5 }}
    >
      <i className="fa-solid fa-check-circle text-emerald-400"></i>
      <p className="text-sm font-medium">Copied</p>
    </motion.div>
  );
}
