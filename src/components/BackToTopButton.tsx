import { useState, useEffect } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 w-10 h-10 rounded-full bg-indigo-950 text-white dark:text-indigo-300 shadow-lg flex items-center justify-center transition-all transform hover:scale-110 z-50 border border-slate-200 dark:border-slate-700 animate-in slide-in-from-bottom-4 fade-in duration-300"
          aria-label="Go to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
