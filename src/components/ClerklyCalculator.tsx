import React, { useState, useMemo, useEffect } from 'react';
import { Modal } from './Modal';
import { calculators, Calculator } from '../data/calculators';

interface ClerklyCalculatorProps {
    onClose: () => void;
}

const ClerklyCalculator: React.FC<ClerklyCalculatorProps> = ({ onClose }) => {
    const [selectedCalculator, setSelectedCalculator] = useState<Calculator | null>(null);
    const [inputs, setInputs] = useState<{ [key: string]: any }>({});
    const [result, setResult] = useState<{ result: string | number; interpretation: string; recommendation?: string, color?: string, redFlag?: string } | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showExplanation, setShowExplanation] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const groupedCalculators = useMemo(() => {
        return calculators.reduce((acc, calculator) => {
            (acc[calculator.category] = acc[calculator.category] || []).push(calculator);
            return acc;
        }, {} as { [key: string]: Calculator[] });
    }, []);

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
        <Modal isOpen={true} onClose={onClose} title={modalTitle}>
            <div className="flex flex-col md:flex-row md:gap-5 min-h-[60vh] md:min-h-0">
                {/* ===== Calculator List ===== */}
                <div className={`md:w-1/3 md:border-r md:border-slate-200 dark:md:border-slate-700 md:pr-5 ${selectedCalculator ? 'hidden md:block' : 'block w-full'}`}>
                    <div className="p-1 md:p-0 space-y-4">
                        {Object.entries(groupedCalculators).map(([category, calcs]) => (
                            <div key={category}>
                                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-2">{category}</h3>
                                <div className="space-y-1">
                                    {calcs.map(calc => (
                                        <button 
                                            key={calc.name}
                                            onClick={() => handleCalculatorChange(calc)}
                                            className={`w-full text-left p-2 rounded-lg transition-colors text-xs font-medium ${selectedCalculator?.name === calc.name ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                            {calc.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== Calculator Details ===== */}
                <div className="md:w-2/3 p-1 md:p-0">
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
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg mb-4 hidden md:flex items-center justify-between">
                                <div>
                                    <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">{selectedCalculator.name}</h2>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{selectedCalculator.description}</p>
                                </div>
                                <button onClick={() => setShowExplanation(!showExplanation)} className={`ml-4 flex-shrink-0 transition-colors ${showExplanation ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-100'}`}>
                                    <i className="fa-solid fa-circle-question fa-lg"></i>
                                </button>
                            </div>

                            {showExplanation ? (
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p className="whitespace-pre-wrap">{selectedCalculator.explanation}</p>
                                </div>
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
                                                        {input.unit && <span className="px-2 text-sm text-slate-500 dark:text-slate-400">{input.unit}</span>}
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
                        <div className="hidden md:flex text-center text-slate-500 dark:text-slate-400 h-full items-center justify-center">
                            <p className="text-xs">Select a calculator from the list to begin.</p>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ClerklyCalculator;
