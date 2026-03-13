import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, onClose, duration = 2000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Check if the message indicates a copy action
  const isCopyAction = message.toLowerCase().includes('cop');

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-indigo-950 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce flex items-center gap-3">
      <i className="fa-solid fa-check-circle text-emerald-400"></i>
      <span className="font-medium text-sm">{isCopyAction ? 'Copied' : message}</span>
    </div>
  );
}
