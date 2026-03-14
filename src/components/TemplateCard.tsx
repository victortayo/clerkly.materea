import { Template } from '../types';
import { useState, MouseEvent } from 'react';
import { useToast } from '../context/ToastContext';

interface TemplateCardProps {
  template: Template;
  onView: (template: Template) => void;
  isBookmarked: boolean;
  onToggleBookmark: (template: Template) => void;
  viewMode: 'grid' | 'list';
}

export function TemplateCard({
  template,
  onView,
  isBookmarked,
  onToggleBookmark,
  viewMode
}: TemplateCardProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(template.content);
    setCopied(true);
    showToast('Template copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = (e: MouseEvent) => {
    e.stopPropagation();
    onToggleBookmark(template);
  };

  // List view
  if (viewMode === 'list') {
    return (
      <div 
        onClick={() => onView(template)}
        className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-6 active:scale-[0.99]"
      >
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {template.specialty}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {template.lastModified}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            {template.title}
          </h3>
          <p className="text-sm text-slate-500 italic mb-3">{template.subSpecialty}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
            {template.summary}
          </p>
        </div>
        
        <div className="flex items-center gap-3 self-start sm:self-center">
           <button
            onClick={handleBookmark}
            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all active:scale-95 ${
              isBookmarked 
                ? 'bg-indigo-50 text-indigo-950 dark:bg-indigo-900/30 dark:text-indigo-200' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400'
            }`}
          >
            <i className={`${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark`}></i>
          </button>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div 
      className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-700/50 transition-all duration-300 ease-out group flex flex-col h-full overflow-hidden"
    >
      <div className="p-5 flex-1 cursor-pointer" onClick={() => onView(template)}>
        {/* Header: Specialty and Date */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900/40 px-2 py-0.5 rounded">
            {template.specialty}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">
            {template.lastModified}
          </span>
        </div>

        {/* Title and Bookmark Icon */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-950 dark:group-hover:text-indigo-300 transition-colors font-brand">
            {template.title}
          </h3>
          <button 
            onClick={handleBookmark} 
            className={`flex items-center transition-all active:scale-90 ${isBookmarked ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-300 hover:text-slate-400 dark:text-slate-600 dark:hover:text-slate-500'}`}
          >
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark text-sm`}></i>
          </button>
        </div>

        {/* Sub-specialty */}
        <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-3">
          {template.subSpecialty}
        </p>
        
        {/* Summary */}
        <div className="text-[11px] text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-sans bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
          {template.summary}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {template.symptoms.slice(0, 3).map((symptom, idx) => (
            <span key={idx} className="bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] border border-slate-100 dark:border-slate-600">
              {symptom}
            </span>
          ))}
          {template.symptoms.length > 3 && (
            <span className="text-[10px] text-slate-400 dark:text-slate-500 self-center">
              +{template.symptoms.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700 flex gap-2">
        <button 
          onClick={() => onView(template)}
          className="flex-1 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
        >
          Open Template
        </button>
        
        <button
          onClick={handleCopy}
          className={`w-10 h-9 flex items-center justify-center rounded-lg transition-all active:scale-95 shadow-sm 
            ${copied ? 'bg-emerald-600 text-white' : 'bg-indigo-950 dark:bg-indigo-900 text-white hover:bg-black dark:hover:bg-indigo-800'}`}
          title={copied ? "Copied" : "Copy Template"}
        >
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
        </button>
      </div>
    </div>
  );
}