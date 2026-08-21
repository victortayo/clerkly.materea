
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
    if (frequency > 10) return 'text-2xl';
    if (frequency > 5) return 'text-xl';
    if (frequency > 2) return 'text-lg';
    return 'text-base';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-6">Explore Templates by Symptom</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
            {sortedSymptoms.map(([symptom, frequency]) => (
            <button
                key={symptom}
                onClick={() => onSymptomSelect(symptom)}
                className={`px-3 py-1.5 rounded-lg transition-all hover:scale-110 active:scale-100 ${getTagSize(frequency)} font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-300`}
            >
                {symptom}
            </button>
            ))}
        </div>
    </div>
  );
}
