import { createContext, useContext, useState, ReactNode } from 'react';
import { Toast } from '../components/Toast';

type ToastType = 'default' | 'encouragement';

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

interface ToastConfig {
  message: string;
  type: ToastType;
  duration: number;
  key: number;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastConfig | null>(null);

  const showToast = (message: string, type: ToastType = 'default', duration = 3000) => {
    setToast({ message, type, duration, key: Date.now() });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          key={toast.key}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
