import { Modal } from './Modal';

interface ClinicalInsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  insight: { 
    managementPrinciples: string[], 
    criticalActions?: string[], 
    contraindications?: string[], 
    contextualNotes: string 
  } | null;
  templateTitle: string;
}

export function ClinicalInsightModal({ isOpen, onClose, isLoading, insight, templateTitle }: ClinicalInsightModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Clinical Insight">
      <div className="space-y-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <i className="fa-solid fa-circle-notch animate-spin text-xl text-slate-400 mb-3"></i>
            <span className="font-mono text-xs text-slate-400 animate-pulse">
              Analyzing management principles...
            </span>
          </div>
        ) : insight ? (
          <>
            {/* Critical Actions (Dos) */}
            {insight.criticalActions && insight.criticalActions.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-300 shrink-0">
                    <i className="fa-solid fa-check-double text-[10px]"></i>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-emerald-200">
                    Critical Actions (Must Do)
                  </h4>
                </div>
                <ul className="space-y-2">
                  {insight.criticalActions.map((action, idx) => (
                    <li key={idx} className="flex gap-3 items-start p-2 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20">
                      <i className="fa-solid fa-check text-emerald-500 mt-0.5 text-[10px]"></i>
                      <p className="text-xs leading-tight text-emerald-900 dark:text-emerald-100">
                        {action}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contraindications (Don'ts) */}
            {insight.contraindications && insight.contraindications.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-600 dark:text-rose-300 shrink-0">
                    <i className="fa-solid fa-ban text-[10px]"></i>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-950 dark:text-rose-200">
                    Contraindications (Do Not Do)
                  </h4>
                </div>
                <ul className="space-y-2">
                  {insight.contraindications.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start p-2 rounded-lg bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20">
                      <i className="fa-solid fa-xmark text-rose-500 mt-0.5 text-[10px]"></i>
                      <p className="text-xs leading-tight text-rose-900 dark:text-rose-100">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Management Principles */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-300 shrink-0">
                  <i className="fa-solid fa-notes-medical text-[10px]"></i>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-950 dark:text-indigo-200">
                  Management Principles
                </h4>
              </div>
              
              <ul className="space-y-3">
                {(insight.managementPrinciples || []).map((principle, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-[18px] h-[18px] rounded flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs leading-tight text-indigo-900 dark:text-slate-300">
                      {principle.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={i} className="font-bold text-slate-900 dark:text-slate-100">
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contextual Note Card */}
            <div className="p-4 rounded-2xl border border-amber-100 dark:border-amber-900/30 bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-600 dark:text-amber-500 shrink-0">
                  <i className="fa-solid fa-earth-africa text-[10px]"></i>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                  Sub-Saharan Africa Context
                </h4>
              </div>
              <p className="text-xs italic leading-relaxed text-amber-900/80 dark:text-amber-200/70 pl-7">
                {insight.contextualNotes}
              </p>
            </div>

            {/* Disclaimer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-[10px] font-medium italic text-slate-400 dark:text-slate-500">
                AI-generated content. Verify with clinical guidelines.
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8 font-mono text-xs text-slate-400">
            Insight unavailable.
          </div>
        )}
      </div>
    </Modal>
  );
}
