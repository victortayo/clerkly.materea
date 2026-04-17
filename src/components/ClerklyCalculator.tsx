import React, { useState, useMemo, useEffect } from 'react';
import { calculators, Calculator } from '../data/calculators';

interface ClerklyCalculatorProps {
    onClose: () => void;
}

const Explanation: React.FC<{ text: string }> = ({ text }) => {
    const sections = text.split('\n\n');

    return (
        <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <i className="fa-solid fa-circle-info text-indigo-500"></i>
                What is it for?
            </h3>
            <div className="space-y-4">
                {sections.map((section, index) => {
                    const lines = section.trim().split('\n');
                    
                    // Check for markdown table
                    if (lines.length > 1 && lines[0].includes('|') && lines[1].includes('---')) {
                        const headers = lines[0].split('|').slice(1, -1).map(h => h.trim());
                        const rowsData = lines.slice(2).map(l => l.split('|').slice(1, -1).map(c => c.trim()));

                        return (
                            <div key={index} className="my-3 overflow-x-auto custom-scrollbar border border-slate-200 dark:border-slate-700 rounded-lg">
                                <table className="w-full" style={{ fontSize: '0.7rem', lineHeight: '1.3' }}>
                                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                                        <tr>
                                            {headers.map((header, hIndex) => (
                                                <th key={hIndex} className="p-2 font-semibold text-left text-slate-600 dark:text-slate-300 uppercase tracking-wider">{header}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {rowsData.map((row, rIndex) => (
                                            <tr key={rIndex}>
                                                {row.map((cell, cIndex) => (
                                                    <td key={cIndex} className="p-2 text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        );
                    }

                    const potentialTitleLine = lines[0];
                    const isTitleBlock = !section.startsWith('    ') && potentialTitleLine.includes(':');

                    if (isTitleBlock) {
                        const title = potentialTitleLine.substring(0, potentialTitleLine.indexOf(':'));
                        const firstLineContent = potentialTitleLine.substring(potentialTitleLine.indexOf(':') + 1);
                        const otherLines = lines.slice(1).join('\n');
                        const content = (firstLineContent + '\n' + otherLines).trim();

                        return (
                            <div key={index}>
                                <h4 className="font-semibold text-xs text-slate-700 dark:text-slate-200 mb-1">{title}</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">{content}</p>
                            </div>
                        );
                    }

                    const isList = lines.filter(l => l.trim() !== '').every(l => l.startsWith('    '));

                    if (isList) {
                        return (
                             <div key={index} className="space-y-1">
                                {lines.filter(line => line.trim() !== '').map((line, lineIndex) => (
                                    <div key={lineIndex} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex items-start">
                                        <span className="mr-2 mt-1">•</span>
                                        <span>{line.trim()}</span>
                                    </div>
                                ))}
                            </div>
                        );
                    }

                    return <p key={index} className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{section}</p>;
                })}
            </div>
        </div>
    );
};

const ClerklyCalculator: React.FC<ClerklyCalculatorProps> = ({ onClose }) => {
    const [selectedCalculator, setSelectedCalculator] = useState<Calculator | null>(null);
    const [inputs, setInputs] = useState<{ [key: string]: any }>({});
    const [result, setResult] = useState<{ result: string | number; interpretation: string; recommendation?: string, color?: string, redFlag?: string } | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showExplanation, setShowExplanation] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredCalculators = useMemo(() => {
        if (!searchTerm) {
            return calculators;
        }
        return calculators.filter(calculator =>
            calculator.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const groupedCalculators = useMemo(() => {
        return filteredCalculators.reduce((acc, calculator) => {
            (acc[calculator.category] = acc[calculator.category] || []).push(calculator);
            return acc;
        }, {} as { [key: string]: Calculator[] });
    }, [filteredCalculators]);

    const handleCalculatorChange = (calculator: Calculator) => {
        setSelectedCalculator(calculator);
        setShowExplanation(false);
        const defaultInputs: { [key: string]: any } = {};
        calculator.inputs.forEach(input => {
            if (input.type === 'select' && input.options) {
                defaultInputs[input.name] = input.options[0];
            }
        });
        setInputs(defaultInputs);
        setResult(null);
    };

    const handleBack = () => {
        setSelectedCalculator(null);
        setResult(null);
        setShowExplanation(false);
    }

    const handleInputChange = (name: string, value: any) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const handleCalculate = () => {
        if (selectedCalculator) {
            setResult(selectedCalculator.calculation(inputs));
        }
    };

    const modalTitle = isMobile && selectedCalculator ? selectedCalculator.name : "Clerkly Calculator";

    return (
        <div 
          className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/80 z-[100] flex items-center justify-center sm:p-4 font-sans backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={onClose}
        >
          <div 
            className="bg-slate-50 dark:bg-slate-900 w-full max-w-6xl h-[100dvh] sm:h-[90vh] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <h1 className="font-brand text-lg sm:text-xl font-bold text-indigo-950 dark:text-indigo-100 flex items-center gap-2">
                      <i className="fa-solid fa-calculator text-indigo-500"></i>
                      {modalTitle}
                    </h1>
                    <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                      Essential clinical calculators at your fingertips.
                    </p>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-slate-600 dark:text-indigo-200 dark:hover:text-white">
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto md:overflow-hidden custom-scrollbar flex flex-col md:flex-row p-4 gap-4">
                {/* ===== Calculator List ===== */}
                <div className={`md:w-1/3 shrink-0 md:overflow-y-auto custom-scrollbar p-2 ${selectedCalculator ? 'hidden md:flex flex-col' : 'flex flex-col w-full'}`}>
                    <div className="p-2 mb-4">
                        <div className="relative">
                            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                            <input
                                type="text"
                                placeholder="Search calculators..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 border-2 focus:border-indigo-500 focus:ring-0 rounded-lg pl-10 pr-4 py-2 text-sm transition-colors"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        {Object.entries(groupedCalculators).map(([category, calcs]) => (
                            <div key={category}>
                                <div className="px-2 mb-2 border-b border-slate-200 dark:border-slate-800">
                                    <h3 className="text-xs font-bold text-indigo-950 dark:text-indigo-200 uppercase tracking-wider pb-2">{category}</h3>
                                </div>
                                <div className="space-y-1">
                                    {calcs.map(calc => (
                                        <button 
                                            key={calc.name}
                                            onClick={() => handleCalculatorChange(calc)}
                                            className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors text-xs font-medium ${
                                                selectedCalculator?.name === calc.name 
                                                ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' 
                                                : 'bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 active:bg-slate-300 dark:active:bg-slate-700'
                                            }`}>
                                            {calc.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== Calculator Details ===== */}
                <div className="flex-1 md:overflow-y-auto custom-scrollbar">
                    {selectedCalculator ? (
                        <div>
                             {/* --- Headers for Mobile and Desktop --- */}
                            <div className="flex justify-between items-center md:hidden mb-4">
                                <button onClick={handleBack} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                                    <i className="fa-solid fa-arrow-left"></i>
                                    Back
                                </button>
                                <button onClick={() => setShowExplanation(!showExplanation)} className={`transition-colors ${showExplanation ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-100'}`}>
                                    <i className="fa-solid fa-circle-question fa-lg"></i>
                                </button>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800/50 p-3 rounded-lg mb-4 hidden md:flex items-center justify-between">
                                <div>
                                    <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">{selectedCalculator.name}</h2>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{selectedCalculator.description}</p>
                                </div>
                                <button onClick={() => setShowExplanation(!showExplanation)} className={`ml-4 flex-shrink-0 transition-colors ${showExplanation ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400 hover:text-black dark:text-slate-500 dark:hover:text-white'}`}>
                                    <i className="fa-solid fa-circle-question fa-lg"></i>
                                </button>
                            </div>

                            {showExplanation ? (
                               <Explanation text={selectedCalculator.explanation} />
                            ) : (
                            <>
                                <div className="space-y-3.5">
                                    {selectedCalculator.inputs.map(input => (
                                        <div key={input.name}>
                                            <label className="font-medium text-slate-600 dark:text-slate-300 mb-1.5 block text-xs">{input.name}</label>
                                            {input.type === 'number' && (
                                                <div className="flex items-center justify-center">
                                                    <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex items-center space-x-1">
                                                        <button
                                                            onClick={() => handleInputChange(input.name, (parseFloat(inputs[input.name]) || input.min || 0) - (input.step || 1))}
                                                            className="px-3 py-1 rounded-md bg-white dark:bg-slate-700/50 shadow-sm text-slate-700 dark:text-slate-200 font-bold text-lg"
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="number"
                                                            min={input.min}
                                                            max={input.max}
                                                            step={input.step}
                                                            value={inputs[input.name] || ''}
                                                            onChange={(e) => handleInputChange(input.name, e.target.value === '' ? '' : parseFloat(e.target.value))}
                                                            className="w-20 text-center p-2 text-sm bg-transparent border-none focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                        />
                                                        <button
                                                            onClick={() => handleInputChange(input.name, (parseFloat(inputs[input.name]) || input.min || 0) + (input.step || 1))}
                                                            className="px-3 py-1 rounded-md bg-white dark:bg-slate-700/50 shadow-sm text-slate-700 dark:text-slate-200 font-bold text-lg"
                                                        >
                                                            +
                                                        </button>
                                                        {input.unit && <span className="px-2 text-sm text-slate-500 dark:text-slate-400"></span>}
                                                    </div>
                                                </div>
                                            )}
                                             {input.type === 'date' && (
                                                <input
                                                    type="date"
                                                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                                                    className="w-full p-2 text-xs bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-0 focus:outline-none transition-colors"
                                                />
                                            )}
                                            {input.type === 'select' && (
                                                <div className="grid grid-cols-1 gap-2">
                                                {input.options?.map(option => (
                                                        <label key={option} className={`flex items-center justify-center text-center cursor-pointer p-2.5 rounded-md border-2 transition-colors ${inputs[input.name] === option ? 'bg-indigo-50 dark:bg-indigo-900/50 border-indigo-500' : 'bg-slate-50 dark:bg-slate-800 border-slate-50 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}>
                                                            <input
                                                                type="radio"
                                                                name={input.name}
                                                                value={option}
                                                                checked={inputs[input.name] === option}
                                                                onChange={() => handleInputChange(input.name, option)}
                                                                className="hidden"
                                                            />
                                                            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            )}
                                            {input.type === 'boolean' && (
                                                <label className="flex items-center space-x-2.5 p-2.5 rounded-md bg-slate-50 dark:bg-slate-800 border-2 border-transparent cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        onChange={(e) => handleInputChange(input.name, e.target.checked)}
                                                        className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-indigo-600 focus:ring-indigo-500 cursor-pointer bg-white dark:bg-slate-900"
                                                    />
                                                    <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{input.name}</span>
                                                </label>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <button onClick={handleCalculate} className="mt-5 w-full py-2.5 bg-indigo-950 hover:bg-black text-white rounded-lg font-bold shadow-md transition-all active:scale-95 text-xs">Calculate</button>

                                {result && (
                                    <div className="mt-4 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Result</h3>
                                        <div className="flex items-baseline justify-between">
                                            <p className={`text-xl font-bold ${result.color || 'text-slate-800 dark:text-slate-100'}`}>{result.result}</p>
                                        </div>
                                        <p className={`text-xs font-semibold mt-1 ${result.color || 'text-slate-800 dark:text-slate-100'}`}>{result.interpretation}</p>
                                        {result.recommendation && <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{result.recommendation}</p>}
                                        {result.redFlag && 
                                        <div className="mt-2.5 bg-red-50 dark:bg-red-950/30 p-2 rounded-md">
                                            <p className="text-xs text-red-600 dark:text-red-400 font-medium"><i className="fa-solid fa-triangle-exclamation mr-1.5"></i> {result.redFlag}</p>
                                        </div>}
                                    </div>
                                )}
                            </>
                            )}

                        </div>
                    ) : (
                        <div className="hidden md:flex flex-col gap-4 text-center text-slate-500 dark:text-slate-400 h-full items-center justify-center">
                            <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-calculator text-3xl text-slate-400"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">Clerkly Calculator</h3>
                            <p className="text-sm">Select a calculator from the list to begin.</p>
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>
    );
};

export default ClerklyCalculator;
