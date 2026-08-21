
import React, { useState, useMemo } from 'react';
import { Template, Specialty } from '../types';
import { TemplateCard } from './TemplateCard';

interface SpecialtyAccordionProps {
  templates: Template[];
  onView: (template: Template) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (template: Template) => void;
  viewMode: 'grid' | 'list';
}

interface GroupedTemplates {
  [key: string]: {
    [key:string]: Template[];
  }
}

const AccordionSection = ({ title, children, icon }: { title: string, children: React.ReactNode, icon: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 dark:border-slate-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 px-6 text-left"
            >
                <div className="flex items-center gap-4">
                    <i className={`fa-solid ${icon} text-indigo-500 dark:text-indigo-400 w-4 text-center`}></i>
                    <span className="text-base font-bold text-slate-800 dark:text-slate-200">{title}</span>
                </div>
                <i className={`fa-solid fa-chevron-down text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {isOpen && (
                <div className="pb-4 px-6">
                    {children}
                </div>
            )}
        </div>
    )
}

export function SpecialtyAccordion({ templates, onView, bookmarkedIds, onToggleBookmark, viewMode }: SpecialtyAccordionProps) {
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
    }, {} as GroupedTemplates);
  }, [templates]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors">
        {Object.keys(groupedTemplates).map(specialty => (
            <AccordionSection key={specialty} title={specialty} icon="fa-user-doctor">
                <div className="flex flex-col gap-2">
                    {Object.keys(groupedTemplates[specialty]).map(subSpecialty => (
                         <AccordionSection key={subSpecialty} title={subSpecialty} icon="fa-notes-medical">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                {groupedTemplates[specialty][subSpecialty].map(template => (
                                    <TemplateCard
                                        key={template.id}
                                        template={template}
                                        onView={onView}
                                        isBookmarked={bookmarkedIds.has(template.id)}
                                        onToggleBookmark={onToggleBookmark}
                                        viewMode={viewMode}
                                    />
                                ))}
                            </div>
                        </AccordionSection>
                    ))}
                </div>
            </AccordionSection>
        ))}
    </div>
  );
}
