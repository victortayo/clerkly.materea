import { useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage, '...', totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-2 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-indigo-950 dark:hover:text-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
      >
        <i className="fa-solid fa-chevron-left text-xs"></i>
      </button>

      <div className="flex gap-2 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors">
        {visiblePages.map((page, index) => (
          page === '...' ? (
            <div key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-slate-400 text-xs">
              ...
            </div>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all 
                ${currentPage === page
                  ? 'bg-indigo-950 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 scale-105'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-indigo-950 dark:hover:text-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
      >
        <i className="fa-solid fa-chevron-right text-xs"></i>
      </button>
    </div>
  );
}
