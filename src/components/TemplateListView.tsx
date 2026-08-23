import { Template } from '../types';
import { MouseEvent, useState } from 'react';
import { useToast } from '../context/ToastContext';

interface TemplateListViewProps {
  templates: Template[];
  onView: (template: Template) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (template: Template) => void;
}

function TemplateRow({
  template,
  index,
  onView,
  isBookmarked,
  onToggleBookmark
}: {
  template: Template;
  index: number;
  onView: (t: Template) => void;
  isBookmarked: boolean;
  onToggleBookmark: (t: Template) => void;
}) {
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

  return (
    <div
      onClick={() => onView(template)}
      style={{ animationDelay: `${index * 50}ms` }}
      className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors mb-3 last:mb-0 hover:shadow-md transition-shadow cursor-pointer"
    >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4">
            {/* --- Left Column: Title & Summary --- */}
            <div className="sm:col-span-5 flex flex-col justify-center p-2">
                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-indigo-950 dark:group-hover:text-white font-brand">
                    {template.title}
                </span>
                <span className="text-xs text-slate-400 mt-0.5 truncate max-w-[200px] sm:max-w-xs font-sans opacity-70">
                    {template.summary}
                </span>
            </div>

            {/* --- Right Column: Other data --- */}
            <div className="col-span-1 sm:col-span-7">
                <div className="bg-slate-50 dark:bg-slate-800/50 shadow-inner dark:shadow-slate-900/50 rounded-lg p-4 h-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center h-full">
                        <div className="sm:col-span-1">
                            <span className="inline-flex px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                {template.specialty}
                            </span>
                        </div>
                        <div className="col-span-1 sm:col-span-2 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <button className="text-xs font-medium text-slate-500 hover:text-indigo-900 dark:text-slate-400 dark:hover:text-indigo-300 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                    View
                                </button>
                                <button
                                    onClick={handleBookmark}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all active:scale-95 border ${
                                    isBookmarked
                                        ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400'
                                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                                    }`}
                                >
                                    <i className={`${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark text-xs`}></i>
                                </button>
                                <button
                                    onClick={handleCopy}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all active:scale-95 border ${
                                    copied
                                        ? 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400'
                                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                                    }`}
                                    title={copied ? "Copied" : "Copy Template"}
                                >
                                    <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                                </button>
                                <div className="hidden sm:block sm:col-span-1 text-slate-500 dark:text-slate-400 font-mono text-xs pl-2">
                                    {template.lastModified}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export function TemplateListView({
  templates,
  onView,
  bookmarkedIds,
  onToggleBookmark
}: TemplateListViewProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mt-4">
        {templates.map((template, index) => (
          <TemplateRow
            key={template.id}
            template={template}
            index={index}
            onView={onView}
            isBookmarked={bookmarkedIds.has(template.id)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}
