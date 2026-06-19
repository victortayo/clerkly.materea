import { useState, useMemo, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { TemplateList } from './components/TemplateList';
import { TemplateDetail } from './components/TemplateDetail';
import { GeminiClerking } from './components/GeminiClerking';
import { ClinicalGame } from './components/game/ClinicalGame';
import { ClerklyLearn } from './components/ClerklyLearn';
import ClerklyCalculator from './components/ClerklyCalculator';
import { Modal } from './components/Modal';
import { Toast } from './components/Toast';
import { useBookmarks } from './hooks/useBookmarks';
import { INITIAL_TEMPLATES } from './data';
import { Template, Specialty } from './types';
import StartingLoader from './components/StartingLoader';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { bookmarkedTemplateIds, bookmarkCounts, toggleBookmark } = useBookmarks();
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | 'All'>('All');
    const [showBookmarks, setShowBookmarks] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [isAIModalOpen, setIsAIModalOpen] = useState(false);
    const [isGameOpen, setIsGameOpen] = useState(false);
    const [isLearnOpen, setIsLearnOpen] = useState(false);
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<'none' | 'help' | 'contribute' | 'about' | 'disclaimer'>('none');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const filteredTemplates = useMemo(() => {
        const query = searchQuery.toLowerCase();
        
        const baseTemplates = INITIAL_TEMPLATES.map(template => ({
            ...template,
            bookmarkCount: bookmarkCounts[template.id] !== undefined ? bookmarkCounts[template.id] : template.bookmarkCount
        })).sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());

        const matches = baseTemplates.filter((template) => {
            const matchesSearch = 
                template.title.toLowerCase().includes(query) ||
                template.condition.toLowerCase().includes(query) ||
                template.symptoms.some(s => s.toLowerCase().includes(query)) ||
                template.subSpecialty.toLowerCase().includes(query);

            if (!matchesSearch) return false;

            if (selectedSpecialty !== 'All' && template.specialty !== selectedSpecialty) {
                return false;
            }

            if (showBookmarks && !bookmarkedTemplateIds.has(template.id)) {
                return false;
            }

            return true;
        });

        if (query) {
            return matches.sort((a, b) => {
                const aTitle = a.title.toLowerCase();
                const bTitle = b.title.toLowerCase();
                const aCondition = a.condition.toLowerCase();
                const bCondition = b.condition.toLowerCase();
                
                if (aTitle === query && bTitle !== query) return -1;
                if (bTitle === query && aTitle !== query) return 1;
                
                if (aTitle.startsWith(query) && !bTitle.startsWith(query)) return -1;
                if (bTitle.startsWith(query) && !aTitle.startsWith(query)) return 1;
                
                const aTitleHas = aTitle.includes(query);
                const bTitleHas = bTitle.includes(query);
                if (aTitleHas && !bTitleHas) return -1;
                if (bTitleHas && !aTitleHas) return 1;

                const aCondHas = aCondition.includes(query);
                const bCondHas = bCondition.includes(query);
                if (aCondHas && !bCondHas) return -1;
                if (bCondHas && !aCondHas) return 1;

                return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
            });
        }

        return matches;
    }, [searchQuery, selectedSpecialty, showBookmarks, bookmarkedTemplateIds, bookmarkCounts]);

    const handleReset = () => {
        setSearchQuery('');
        setSelectedSpecialty('All');
        setShowBookmarks(false);
        setSelectedTemplate(null);
    };

    const handleToggleBookmark = (template: Template) => {
        toggleBookmark(template);
    };

    const searchTips = [
      { icon: 'fa-stethoscope', label: 'Conditions', ex: 'e.g. appendicitis' },
      { icon: 'fa-notes-medical', label: 'Symptoms', ex: 'e.g. chest pain' },
      { icon: 'fa-user-doctor', label: 'Specialty Clinics', ex: 'e.g. cardiology' },
    ];

    if (isLoading) {
        return <StartingLoader />;
    }

    return (
        <ErrorBoundary>
            <Layout 
                onReset={handleReset}
                onOpenHelp={() => setActiveModal('help')}
                onOpenContribute={() => setActiveModal('contribute')}
                onOpenAbout={() => setActiveModal('about')}
                onOpenDisclaimer={() => setActiveModal('disclaimer')}
                onShowBookmarks={() => setShowBookmarks(true)}
                hero={!selectedTemplate ? (
                    <Hero
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedSpecialty={selectedSpecialty}
                        setSelectedSpecialty={setSelectedSpecialty}
                        showBookmarks={showBookmarks}
                        setShowBookmarks={setShowBookmarks}
                    />
                ) : undefined}
            >
                {selectedTemplate ? (
                    <TemplateDetail
                        key={selectedTemplate.id}
                        template={{
                            ...selectedTemplate,
                            bookmarkCount: bookmarkCounts[selectedTemplate.id] !== undefined ? bookmarkCounts[selectedTemplate.id] : selectedTemplate.bookmarkCount
                        }}
                        onBack={() => setSelectedTemplate(null)}
                        isBookmarked={bookmarkedTemplateIds.has(selectedTemplate.id)}
                        onToggleBookmark={() => handleToggleBookmark(selectedTemplate)}
                    />
                ) : (
                    <TemplateList
                        templates={filteredTemplates}
                        onView={setSelectedTemplate}
                        bookmarkedIds={bookmarkedTemplateIds}
                        onToggleBookmark={handleToggleBookmark}
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        searchQuery={searchQuery}
                        selectedSpecialty={selectedSpecialty}
                        onClearFilters={handleReset}
                        showBookmarks={showBookmarks}
                    />
                )}

                <GeminiClerking
                    isOpen={isAIModalOpen}
                    onOpen={() => setIsAIModalOpen(true)}
                    onClose={() => setIsAIModalOpen(false)}
                    onOpenGame={() => setIsGameOpen(true)}
                    onOpenLearn={() => setIsLearnOpen(true)}
                    onOpenCalculator={() => setIsCalculatorOpen(true)}
                />

                {isGameOpen && (
                    <ClinicalGame onClose={() => setIsGameOpen(false)} />
                )}

                {isLearnOpen && (
                    <ClerklyLearn onClose={() => setIsLearnOpen(false)} />
                )}

                {isCalculatorOpen && (
                    <ClerklyCalculator onClose={() => setIsCalculatorOpen(false)} />
                )}

                {/* Help Modal */}
                <Modal
                    isOpen={activeModal === 'help'}
                    onClose={() => setActiveModal('none')}
                    title="Help"
                >
                    <div className="space-y-6">
                        {/* Section 1: Search Guide */}
                        <section>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Find what you're looking for</h4>
                            <div className="grid gap-2">
                                {searchTips.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-indigo-500 dark:text-indigo-400">
                                            <i className={`fa-solid ${item.icon} text-xs`}></i>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{item.label}</p>
                                            <p className="text-[10px] text-slate-400 dark:text-slate-400">{item.ex}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2: Medical Disclaimer */}
                        <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-100/50 dark:border-amber-900/50">
                            <div className="flex gap-2">
                                <i className="fa-solid fa-circle-info text-amber-500 text-xs mt-0.5"></i>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-amber-900 dark:text-amber-200">Not Medical Advice</p>
                                    <p className="text-[10px] sm:text-xs text-amber-800/80 dark:text-amber-200/70 leading-relaxed">
                                        These templates are adapted from real clinical cases for educational purposes.
                                        <span className="font-semibold"> Always apply your own clinical judgement.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Contact & Support */}
                        <section className="pt-2 border-t border-slate-100 dark:border-slate-800">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contact & Support</h4>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-3 leading-relaxed">
                                Join our community on WhatsApp and Telegram to share comments, complaints, feedback, discuss clinical cases, and stay updated on new guidelines.
                            </p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://chat.whatsapp.com/ESwg00h0z76Fotkn9EnEdO?mode=gi_t"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20 px-4 py-2.5 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors border border-emerald-100 dark:border-emerald-800"
                                >
                                    <i className="fa-brands fa-whatsapp text-sm"></i>
                                    Join our WhatsApp Group
                                </a>
                                <a
                                    href="https://t.me/+CTzB_o08AewwODdk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-sky-700 bg-sky-50 dark:text-sky-400 dark:bg-sky-900/20 px-4 py-2.5 rounded-xl hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors border border-sky-100 dark:border-sky-800"
                                >
                                    <i className="fa-brands fa-telegram text-sm"></i>
                                    Join our Telegram Channel
                                </a>
                            </div>
                        </section>
                    </div>
                </Modal>

                {/* Contribute Modal */}
                <Modal
                    isOpen={activeModal === 'contribute'}
                    onClose={() => setActiveModal('none')}
                    title="Contribute"
                >
                    <div className="space-y-6">
                        {/* Header & Lead Text */}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Help us build a robust repository of relevant clinical templates.
                        </p>

                        {/* Submission Guidelines Box */}
                        <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 rounded-2xl border border-indigo-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                                    <i className="fa-solid fa-lightbulb text-[10px] text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <h4 className="text-xs font-bold text-indigo-950 dark:text-indigo-200 uppercase tracking-wider">
                                    Submission Guidelines
                                </h4>
                            </div>
                            
                            <ul className="space-y-2.5">
                                {[
                                    "All submissions will be reviewed and, if not already done, any patient-identifying or personal data will be removed.",
                                    "Cases may also be reformatted to improve clarity, consistency, and educational value across the platform.",
                                    "Contributors may be acknowledged where appropriate and if they chose to."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-[10px] sm:text-xs text-indigo-900 dark:text-slate-300">
                                        <i className="fa-solid fa-check text-indigo-500 dark:text-indigo-400 mt-0.5 text-[10px]"></i>
                                        <span className="leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Humor Disclaimer */}
                        <p className="text-[10px] sm:text-xs italic text-slate-400 text-center mb-3 font-medium">
                            You already have those templates on your phone, chief 🤲
                        </p>

                        {/* Primary Call-to-Action (Google Form Button) */}
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfZyY4QMv4KSiIBz9T3RXbIn3Cxt-qelDOf_TpdBL3N3aMhsg/viewform?usp=dialog"
                            target="_blank"
                            rel="noreferrer"
                            className="group w-full flex items-center justify-center gap-2 bg-indigo-950 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-900 transition-all shadow-lg active:scale-[0.98]"
                        >
                            <span className="text-xs sm:text-sm">Submit via Google Form</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                        </a>

                        {/* Section 3: Contact & Support (Copied from Help Modal) */}
                        <section className="pt-6 border-t border-slate-100 dark:border-slate-800">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contact & Support</h4>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-3 leading-relaxed">
                            Join our community on WhatsApp and Telegram to share comments, complaints, feedback, discuss clinical cases, and stay updated on new guidelines.
                            </p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://chat.whatsapp.com/ESwg00h0z76Fotkn9EnEdO?mode=gi_t"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20 px-4 py-2.5 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors border border-emerald-100 dark:border-emerald-800"
                                >
                                    <i className="fa-brands fa-whatsapp text-sm"></i>
                                    Join our WhatsApp Group
                                </a>
                                <a
                                    href="https://t.me/+CTzB_o08AewwODdk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-sky-700 bg-sky-50 dark:text-sky-400 dark:bg-sky-900/20 px-4 py-2.5 rounded-xl hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors border border-sky-100 dark:border-sky-800"
                                >
                                    <i className="fa-brands fa-telegram text-sm"></i>
                                    Join our Telegram Channel
                                </a>
                            </div>
                        </section>
                    </div>
                </Modal>

                {/* About Modal */}
                <Modal
                    isOpen={activeModal === 'about'}
                    onClose={() => setActiveModal('none')}
                    title="About This Platform"
                >
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 rounded-2xl border border-indigo-100 dark:border-slate-700">
                            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                <p>
                                    Medicine has always been an apprenticeship. The best way to learn is by seeing — by observing real patients, patterns, and decision-making in context. But in reality, many doctors in training do not get enough exposure to the full range of clinical cases they are expected to understand.
                                </p>
                                <p>
                                    The next best way to learn is through well-structured examples — to learn from what others have seen, documented, and reasoned through.
                                </p>
                                <p>
                                    This platform was built on that idea.
                                </p>
                                <p>
                                    Here, you will find curated clinical clerkings of common conditions encountered in Nigerian practice. While these cases are not real patients, they are carefully constructed from patterns seen across real-life cases and adapted specifically for learning. Each clerking reflects how these conditions typically present in our environment, with attention to the nuances that matter in day-to-day practice.
                                </p>
                                <p>
                                    Beyond documentation, this resource is designed to bridge the gap between theory and reality. It provides practical, step-by-step approaches to patient management, taking into account the socioeconomic and infrastructural realities of healthcare in Nigeria.
                                </p>
                                <p>
                                    This platform is intended for medical students in their clinical years, house officers, and early-career doctors — anyone looking to think more clearly, clerk more effectively, and manage patients with greater confidence.
                                </p>
                                <p>
                                    Medical education is constantly evolving, and this project is built with that in mind. Your feedback, suggestions, and support are not only welcome — they are essential. Every contribution will be taken seriously and used to improve the experience for everyone.
                                </p>
                                <p>
                                    If you would like to share your thoughts, suggestions, or even contribute cases and insights, we invite you to join our community and be part of building a better learning experience for doctors across Nigeria.
                                </p>
                                <p>
                                    At its core, this is driven by a deep commitment to improving medical education and healthcare delivery in Nigeria.
                                </p>
                            </div>
                        </div>

                        <section className="pt-6 border-t border-slate-100 dark:border-slate-800">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contact & Support</h4>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-3 leading-relaxed">
                            Join our community on WhatsApp and Telegram to share comments, complaints, feedback, discuss clinical cases, and stay updated on new guidelines.
                            </p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://chat.whatsapp.com/ESwg00h0z76Fotkn9EnEdO?mode=gi_t"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20 px-4 py-2.5 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors border border-emerald-100 dark:border-emerald-800"
                                >
                                    <i className="fa-brands fa-whatsapp text-sm"></i>
                                    Join our WhatsApp Group
                                </a>
                                <a
                                    href="https://t.me/+CTzB_o08AewwODdk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-sky-700 bg-sky-50 dark:text-sky-400 dark:bg-sky-900/20 px-4 py-2.5 rounded-xl hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors border border-sky-100 dark:border-sky-800"
                                >
                                    <i className="fa-brands fa-telegram text-sm"></i>
                                    Join our Telegram Channel
                                </a>
                            </div>
                        </section>
                    </div>
                </Modal>

                {/* Disclaimer Modal */}
                <Modal
                    isOpen={activeModal === 'disclaimer'}
                    onClose={() => setActiveModal('none')}
                    title="Disclaimer"
                >
                    <div className="space-y-6 max-h-[80vh] overflow-y-auto p-1 no-scrollbar">
                        <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-xl border border-amber-100/50 dark:border-amber-900/50">
                            <div className="flex gap-3">
                                <i className="fa-solid fa-circle-info text-amber-500 text-sm mt-1"></i>
                                <div className="space-y-3">
                                    <p className="text-xs font-bold text-amber-900 dark:text-amber-200">For Educational & Informational Purposes Only</p>
                                    <div className="text-[11px] text-amber-800/80 dark:text-amber-200/70 leading-relaxed space-y-3">
                                        <p>
                                            This application is provided for educational and informational purposes only. It is designed to help users become familiar with common clinical presentations and support learning in medical documentation and note-writing.
                                        </p>
                                        <p>
                                            The content within this app is experimental and is continuously being developed and reviewed to improve accuracy and clinical relevance. However, it may not always reflect the most current medical evidence or local clinical guidelines.
                                        </p>
                                        <p>
                                            This tool is not intended to replace clinical judgment, professional training, institutional protocols, or formal medical advice. Users are advised to independently verify all medical information with appropriate, up-to-date, and authoritative sources before applying it in any clinical setting.
                                        </p>
                                        <p>
                                            The developers and contributors assume no responsibility or liability for any errors, omissions, or outcomes arising from the use or misuse of the information provided in this application.
                                        </p>
                                        <p>
                                            Use of this platform signifies acknowledgment that clinical decisions remain the sole responsibility of the healthcare professional.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="pt-6 border-t border-slate-100 dark:border-slate-800">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contact & Support</h4>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-3 leading-relaxed">
                            Join our community on WhatsApp and Telegram to share comments, complaints, feedback, discuss clinical cases, and stay updated on new guidelines.
                            </p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://chat.whatsapp.com/ESwg00h0z76Fotkn9EnEdO?mode=gi_t"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/20 px-4 py-2.5 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors border border-emerald-100 dark:border-emerald-800"
                                >
                                    <i className="fa-brands fa-whatsapp text-sm"></i>
                                    Join our WhatsApp Group
                                </a>
                                <a
                                    href="https://t.me/+CTzB_o08AewwODdk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center items-center gap-2 text-xs font-bold text-sky-700 bg-sky-50 dark:text-sky-400 dark:bg-sky-900/20 px-4 py-2.5 rounded-xl hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors border border-sky-100 dark:border-sky-800"
                                >
                                    <i className="fa-brands fa-telegram text-sm"></i>
                                    Join our Telegram Channel
                                </a>
                            </div>
                        </section>
                    </div>
                </Modal>
            </Layout>
        </ErrorBoundary>
    );
}
