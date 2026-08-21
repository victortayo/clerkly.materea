import { useState, useMemo } from 'react';
import { Template, Specialty } from '../types';
import { TemplateCard } from './TemplateCard';

interface SpecialtyAccordionProps {
    templates: Template[];
    onView: (template: Template) => void;
    bookmarkedIds: Set<string>;
    onToggleBookmark: (template: Template) => void;
    viewMode: 'grid' | 'list';
}

interface AccordionSectionProps {
    title: string;
    icon?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-slate-100 dark:border-slate-800 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 px-3 sm:px-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
                <div className="flex items-center gap-4">
                    {icon && (
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center border border-slate-200 dark:border-slate-700/80">
                            <i className={`fa-solid ${icon} text-indigo-500 dark:text-indigo-400 text-sm`}></i>
                        </div>
                    )}
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base">{title}</span>
                </div>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-indigo-100 dark:bg-indigo-900/40' : 'bg-slate-100 dark:bg-slate-700/60'
                }`}>
                    <i className={`fa-solid fa-chevron-down transition-transform ${
                        isOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'
                    }`}></i>
                </div>
            </button>
            {isOpen && (
                <div className="pb-6 pt-2 px-3 sm:px-5">
                    {children}
                </div>
            )}
        </div>
    )
}

const specialtyIconMap: Record<Specialty, string> = {
    'Pediatrics': 'fa-circle',
    'Internal Medicine': 'fa-square',
    'Obstetrics and Gynecology': 'fa-circle-notch',
    'Surgery': 'fa-diamond',
    'Behavioral Sciences': 'fa-play',
    'General Outpatient': 'fa-plus',
};

export const SpecialtyAccordion: React.FC<SpecialtyAccordionProps> = ({ templates, onView, bookmarkedIds, onToggleBookmark, viewMode }) => {
    const groupedTemplates = useMemo(() => {
        return templates.reduce((acc, template) => {
            const { specialty, subSpecialty } = template;
            if (!acc[specialty]) {
                acc[specialty] = {};
            }
            if (!acc[specialty][subSpecialty]) {
                acc[specialty][subSpecialty] = [];
            }
            acc[specialty][subSpecialty].push(template);
            return acc;
        }, {} as Record<Specialty, Record<string, Template[]>>);
    }, [templates]);

    return (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {Object.keys(groupedTemplates).map((specialty, index) => (
                <div key={specialty} className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
                    <AccordionSection 
                        key={specialty} 
                        title={specialty} 
                        icon={specialtyIconMap[specialty as Specialty] || 'fa-stethoscope'} 
                        defaultOpen={index === 0}
                    >
                        <div className="flex flex-col gap-2 pl-2 sm:pl-4 border-l-2 border-slate-100 dark:border-slate-700/80 ml-4">
                            {Object.keys(groupedTemplates[specialty]).map(subSpecialty => (
                                 <AccordionSection key={subSpecialty} title={subSpecialty}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                        {groupedTemplates[specialty][subSpecialty].map(template => (
                                            <TemplateCard
                                                key={template.id}
                                                template={template}
                                                onView={onView}
                                                isBookmarked={bookmarkedIds.has(template.id)}
                                                onToggleBookmark={() => onToggleBookmark(template)}
                                                viewMode={viewMode}
                                            />
                                        ))}
                                    </div>
                                </AccordionSection>
                            ))}
                        </div>
                    </AccordionSection>
                </div>
            ))}
        </div>
    );
};