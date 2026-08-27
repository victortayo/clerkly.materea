
import React, { useMemo } from 'react';
import { Template } from '../types';

interface SymptomTagCloudProps {
  templates: Template[];
  onSymptomSelect: (symptom: string) => void;
}

interface SymptomFrequency {
    [key: string]: number;
}

export function SymptomTagCloud({ templates, onSymptomSelect }: SymptomTagCloudProps) {
  const symptomFrequency = useMemo(() => {
    const frequency: SymptomFrequency = {};
    templates.forEach(template => {
      template.symptoms.forEach(symptom => {
        const normalizedSymptom = symptom.toLowerCase();
        frequency[normalizedSymptom] = (frequency[normalizedSymptom] || 0) + 1;
      });
    });
    return frequency;
  }, [templates]);

  const sortedSymptoms = useMemo(() => {
      return Object.entries(symptomFrequency).sort(([, a], [, b]) => b - a);
  }, [symptomFrequency])

  const getTagSize = (frequency: number) => {
    if (frequency > 10) return 'text-base';
    if (frequency > 5) return 'text-sm';
    if (frequency > 2) return 'text-xs';
    return 'text-[10px]';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="font-sans text-lg font-bold text-slate-800 dark:text-slate-200 mb-6">Explore Templates by Symptom</h3>
        <div className="flex flex-wrap justify-center items-center gap-3">
            {sortedSymptoms.map(([symptom, frequency]) => (
            <button
                key={symptom}
                onClick={() => onSymptomSelect(symptom)}
                className={`font-grotesk px-4 py-2 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-md active:scale-100 ${getTagSize(frequency)} font-medium bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 dark:hover:border-indigo-700`}
            >
                {symptom}
            </button>
            ))}
        </div>
    </div>
  );
}
