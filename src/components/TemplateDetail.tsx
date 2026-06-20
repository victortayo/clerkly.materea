import { useState, useEffect, useMemo } from 'react';
import { Template } from '../types';
import { generateClinicalInsight } from '../services/gemini';
import { useToast } from '../context/ToastContext';
import { ClinicalInsightModal } from './ClinicalInsightModal';
import ScrollProgressBar from './ScrollProgressBar';

interface TemplateDetailProps {
  template: Template;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export function TemplateDetail({ template, onBack, isBookmarked, onToggleBookmark }: TemplateDetailProps) {
  const [copied, setCopied] = useState(false);
  const [insight, setInsight] = useState<{ 
    managementPrinciples: string[], 
    criticalActions: string[], 
    contraindications: string[], 
    contextualNotes: string 
  } | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [isInsightModalOpen, setIsInsightModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // State specifically for the content being edited in the textarea
  const [editedContent, setEditedContent] = useState(template ? template.content : '');
  const [mode, setMode] = useState<'teach' | 'documentation'>('documentation');
  const { showToast } = useToast();
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(true);

  // When the template prop changes (e.g., navigating between templates), reset the edited content.
  useEffect(() => {
    if (template) {
      setEditedContent(template.content);
    }
  }, [template]);

  // Handle side-effects of switching modes, like clearing insights or exiting edit mode.
  useEffect(() => {
    setInsight(null);
    if (mode === 'teach') {
      setIsEditing(false); // Can't edit in teach mode
    }
  }, [mode]);

  if (!template) {
    return <div>Loading...</div>; // Or some other placeholder
  }
  
  // Derive the content for teach mode, memoizing the result.
  const teachModeContent = useMemo(() => {
    const content = template.documentation || 'Not yet available';
    return content.replace(/—/g, '-');
  }, [template.documentation]);

  const handleCopy = () => {
    // Determine what content to copy based on the current mode.
    const textToCopy = mode === 'teach' ? teachModeContent : (isEditing ? editedContent : template.content);
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        showToast('Content copied to clipboard', 'copy', 2000);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
        console.error('Modern copy failed, falling back.', err);
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "1px";
    textArea.style.height = "1px";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if(successful) {
        setCopied(true);
        showToast('Content copied to clipboard', 'copy', 2000);
        setTimeout(() => setCopied(false), 2000);
      } else {
        showToast('Failed to copy content', 'default', 3000);
      }
    } catch (err) {
      console.error('Fallback copy failed', err);
      showToast('Failed to copy content', 'default', 3000);
    }

    document.body.removeChild(textArea);
  };

  // Resets the content in the editor to the original template content.
  const handleReset = () => {
    setEditedContent(template.content);
    showToast('Template reset to original');
  };

  // Toggles edit mode, ensuring the editor is populated with fresh content.
  const handleToggleEdit = () => {
    if (!isEditing) {
      setEditedContent(template.content);
    }
    setIsEditing(!isEditing);
  }

  const handleGetInsight = async () => {
    setIsInsightModalOpen(true);
    if (insight) return;
    
    setLoadingInsight(true);
    try {
      const result = await generateClinicalInsight(template);
      setInsight(result);
    } catch (error) {
      console.error(error);
      showToast('Failed to generate insight');
    } finally {
      setLoadingInsight(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-in fade-in slide-in-from-right duration-500">
      <ScrollProgressBar templateId={template.id} mode={mode} />
      
      <ClinicalInsightModal 
        isOpen={isInsightModalOpen}
        onClose={() => setIsInsightModalOpen(false)}
        isLoading={loadingInsight}
        insight={insight}
        templateTitle={template.title}
      />

      {isDisclaimerVisible && (
        <div className="bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-100/50 dark:border-amber-900/50 mb-4">
          <div className="flex gap-2 items-start">
            <i className="fa-solid fa-circle-info text-amber-500 text-[11px] mt-0.5"></i>
            <div className="flex-1 space-y-1">
              <p className="text-[11px] font-bold text-amber-900 dark:text-amber-200">For Educational Use Only</p>
              <p className="text-[10px] text-amber-800/80 dark:text-amber-200/70 leading-snug">
                This content is for informational purposes and is not a substitute for clinical judgment.
              </p>
            </div>
            <button onClick={() => setIsDisclaimerVisible(false)} className="-mr-1 -mt-1 p-1 rounded-full text-amber-500/70 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-500/10">
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>
        </div>
      )}

      {/* Floating Back Button */}
      <button 
        onClick={onBack}
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-all hover:scale-110 hover:-translate-y-0.5 z-50 group border border-slate-200 dark:border-slate-700"
        aria-label="Back to templates"
      >
        <i className="fa-solid fa-arrow-left group-hover:-translate-x-0.5 transition-transform"></i>
      </button>

      {/* Header Card */}
      <div className="relative bg-indigo-950 dark:bg-slate-900 rounded-3xl p-3 sm:p-6 shadow-xl shadow-indigo-900/20 dark:shadow-none border border-indigo-800 dark:border-slate-800 mb-8 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="relative flex justify-between items-start gap-4">
          <div className="flex-1">
            {/* Specialty Pill (Dynamic Color - Dark Mode Optimized) */}
            <div className="mb-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-wide shadow-sm border ${
                template.specialty === 'Pediatrics' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' :
                template.specialty === 'Internal Medicine' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' :
                template.specialty === 'Obstetrics and Gynecology' ? 'bg-rose-500/10 text-rose-300 border-rose-500/20' :
                template.specialty === 'Surgery' ? 'bg-orange-500/10 text-orange-300 border-orange-500/20' :
                'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
              }`}>
                {template.specialty}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-3xl font-bold font-brand text-white tracking-tight mb-3">
              {template.title}
            </h1>
            
            {/* Meta Info: Author & Last Updated */}
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-5 gap-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 flex items-center justify-center text-indigo-200 ring-1 ring-white/20 backdrop-blur-sm">
                  <i className="fa-solid fa-user-doctor text-[9px] sm:text-[10px]"></i>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-indigo-50">{template.contributor}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 flex items-center justify-center text-indigo-200 ring-1 ring-white/20 backdrop-blur-sm">
                  <i className="fa-regular fa-clock text-[9px] sm:text-[10px]"></i>
                </div>
                <span className="text-[10px] sm:text-[10px] text-indigo-200 font-medium">{template.lastModified}</span>
              </div>
            </div>
          </div>

          {/* Bookmark Section - Vertical Pill */}
          <button
            onClick={onToggleBookmark}
            className={`group flex items-center justify-center w-10 sm:w-12 py-3 sm:py-4 rounded-xl border transition-all duration-300 ${
              isBookmarked
                ? 'bg-white border-white text-indigo-950 shadow-lg shadow-black/20'
                : 'bg-white/5 border-white/10 text-indigo-300 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <i className={`${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark text-base sm:text-lg transition-transform group-hover:scale-110`}></i>
          </button>
        </div>
      </div>

      {/* Card Container */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden mb-8">
        {/* Card Header */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6 sm:py-4 bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
          
          {/* Subspecialty */}
          <div className="flex-shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {template.subSpecialty}
            </span>
          </div>

          {/* Center Group: Toggle Switch */}
          <div className="w-full sm:flex-1 flex justify-center order-3 sm:order-2">
            <div className="flex items-center bg-slate-200 dark:bg-slate-700/80 rounded-full p-1 text-[11px] font-semibold">
              <button
                onClick={() => setMode('documentation')}
                className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${ 
                  mode === 'documentation' 
                    ? 'bg-white text-indigo-900 shadow-md' 
                    : 'text-slate-500 dark:text-slate-300'
                }`}
              >
                <i className="fa-solid fa-file-medical"></i>
                <span className="hidden sm:inline">Doc</span>
              </button>
              <button
                onClick={() => setMode('teach')}
                className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                  mode === 'teach' 
                    ? 'bg-white text-indigo-900 shadow-md' 
                    : 'text-slate-500 dark:text-slate-300'
                }`}
              >
                <i className="fa-solid fa-seedling"></i>
                <span className="hidden sm:inline">Learn</span>
              </button>
            </div>
          </div>

          {/* Right Group: Action Buttons */}
          <div className="flex items-center gap-2 order-2 sm:order-3">
          <button
              onClick={handleToggleEdit}
              disabled={mode !== 'documentation'}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                mode !== 'documentation' ? 'invisible' : 
                isEditing
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}
              title={isEditing ? 'View Mode' : 'Edit Mode'}
            >
              <i className={`fa-regular ${isEditing ? 'fa-eye' : 'fa-pen-to-square'}`}></i>
              <span className="hidden sm:inline">{isEditing ? 'View' : 'Edit'}</span>
            </button>
            
            {isEditing && editedContent !== template.content && (
               <button
                onClick={handleReset}
                className="text-xs font-medium text-slate-400 hover:text-rose-500 transition-colors"
                title="Reset to original template"
              >
                Reset
              </button>
            )}

            <button
              onClick={handleGetInsight}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 dark:text-amber-400 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 transition-colors"
              title="Generate Clinical Insight"
            >
              <i className="fa-solid fa-lightbulb text-yellow-500"></i>
              <span className="hidden sm:inline">Insight</span>
            </button>

            <button
              onClick={handleCopy}
              className={`flex items-center justify-center w-10 h-8 rounded-lg transition-colors ${ 
                copied 
                  ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20' 
                  : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:text-indigo-400 dark:hover:bg-slate-800 dark:border-slate-700'
              }`}
              title="Copy content"
            >
              {copied ? <i className="fa-solid fa-check"></i> : <i className="fa-regular fa-copy"></i>}
            </button>
          </div>
        </div>


        {/* Content Body */}
        <div className="p-4 sm:p-8 bg-white dark:bg-slate-900">
          <div className={`rounded-xl transition-all border ${
            mode === 'documentation' ? 'shadow-inner overflow-hidden ' + (isEditing 
              ? 'bg-white dark:bg-slate-950 border-indigo-200 dark:border-indigo-900 ring-2 ring-indigo-500/20' 
              : 'bg-slate-50 dark:bg-slate-950/50 border-slate-100 dark:border-slate-800') 
              : 'border-transparent'
          }`}>
            {mode === 'teach' ? (
              <div
                className="max-w-none text-[11px] sm:text-xs prose prose-slate dark:prose-invert prose-sm prose-headings:border-t prose-headings:border-b prose-headings:py-4 prose-headings:mt-8 prose-headings:mb-2"
                dangerouslySetInnerHTML={{ __html: teachModeContent }}
              />
            ) : isEditing ? (
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full h-[60vh] p-4 sm:p-8 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-800 dark:text-slate-200 bg-transparent outline-none resize-none"
                placeholder="Start typing to edit the template..."
                autoFocus
              />
            ) : (
              <pre className="p-4 sm:p-8 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap overflow-x-auto min-h-[200px]">
                {template.content}
              </pre>
            )}
          </div>
          {isEditing && (
            <p className="mt-2 text-[10px] text-slate-400 italic text-right">
              * You are in edit mode. Changes are temporary and will be lost if you leave this page.
            </p>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {template.symptoms.map((symptom) => (
          <span 
            key={symptom} 
            className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-default"
          >
            {symptom}
          </span>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button 
          onClick={onBack}
          className="text-xs font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
        >
          Back to templates
        </button>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
          {/* Mobile Insight Button */}
          <button
            onClick={handleGetInsight}
            className="sm:hidden w-full px-6 py-3 rounded-xl font-bold text-xs text-amber-700 bg-amber-50 hover:bg-amber-100 dark:text-amber-400 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-lightbulb text-yellow-500"></i>
            <span>Generate Insight</span>
          </button>

          {/* Save Button */}
          <button
            onClick={onToggleBookmark}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-2 border ${
              isBookmarked
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/20 dark:border-indigo-800 dark:text-indigo-300'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <i className={`${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark`}></i>
            <span>{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>

          {/* Copy Button (Primary CTA) */}
          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
              copied
                ? 'bg-emerald-600 text-white shadow-emerald-200 dark:shadow-none'
                : 'bg-indigo-950 text-white shadow-indigo-200 dark:shadow-none hover:bg-indigo-900'
            }`}
          >
            {copied ? <i className="fa-solid fa-check"></i> : <i className="fa-regular fa-copy"></i>}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
