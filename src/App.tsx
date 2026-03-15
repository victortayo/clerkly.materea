import { useState, useMemo, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { TemplateList } from './components/TemplateList';
import { TemplateDetail } from './components/TemplateDetail';
import { GeminiClerking } from './components/GeminiClerking';
import { ClinicalGame } from './components/game/ClinicalGame';
import { ClerklyLearn } from './components/ClerklyLearn';
import { Modal } from './components/Modal';
import { Toast } from './components/Toast';
import { useBookmarks } from './hooks/useBookmarks';
import { INITIAL_TEMPLATES } from './data';
import { Template, Specialty } from './types';
import StartingLoader from './components/StartingLoader';

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
    const [activeModal, setActiveModal] = useState<'none' | 'help' | 'contribute'>('none');

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5 seconds

        return () => clearTimeout(timer);
    }, []);

    // Filter Logic
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

    if (isLoading) {
        return <StartingLoader />;
    }

    return (
        <Layout 
            onReset={handleReset}
            onOpenHelp={() => setActiveModal('help')}
            onOpenContribute={() => setActiveModal('contribute')}
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
            />

            {isGameOpen && (
                <ClinicalGame onClose={() => setIsGameOpen(false)} />
            )}

            {isLearnOpen && (
                <ClerklyLearn onClose={() => setIsLearnOpen(false)} />
            )}

            <Modal
                isOpen={activeModal === 'help'}
                onClose={() => setActiveModal('none')}
                title="Help"
            >
                {/* ... help modal content ... */}
            </Modal>

            <Modal
                isOpen={activeModal === 'contribute'}
                onClose={() => setActiveModal('none')}
                title="Contribute"
            >
                {/* ... contribute modal content ... */}
            </Modal>
        </Layout>
    );
}