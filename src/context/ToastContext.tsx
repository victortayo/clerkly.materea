import { createContext, useContext, useState, ReactNode } from 'react';
import { Toast } from '../components/Toast';
import { CopyToast } from '../components/CopyToast';
import { SaveToast } from '../components/SaveToast';

type ToastType = 'default' | 'encouragement' | 'copy' | 'save';

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

  const renderToast = () => {
    if (!toast) return null;

    switch (toast.type) {
      case 'copy':
        return (
          <CopyToast
            key={toast.key}
            message={toast.message}
            duration={toast.duration}
            onClose={closeToast}
          />
        );
      case 'save':
        return (
          <SaveToast
            key={toast.key}
            message={toast.message}
            duration={toast.duration}
            onClose={closeToast}
          />
        );
      case 'default':
      case 'encouragement':
        return (
          <Toast
            key={toast.key}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={closeToast}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {renderToast()}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
