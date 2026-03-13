import { Template, Specialty } from '../types';
import { TemplateCard } from './TemplateCard';
import { TemplateListView } from './TemplateListView';
import { Pagination } from './Pagination';
import { useState, useEffect } from 'react';

interface TemplateListProps {
  templates: Template[];
  onView: (template: Template) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (template: Template) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  searchQuery: string;
  selectedSpecialty: Specialty | 'All';
  onClearFilters: () => void;
  showBookmarks?: boolean;
}

const ITEMS_PER_PAGE = 9;

export function TemplateList({
  templates,
  onView,
  bookmarkedIds,
  onToggleBookmark,
  viewMode,
  setViewMode,
  searchQuery,
  selectedSpecialty,
  onClearFilters,
  showBookmarks
}: TemplateListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when templates change (e.g. search/filter)
  useEffect(() => {
    setCurrentPage(1);
  }, [templates]);

  const totalPages = Math.ceil(templates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTemplates = templates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasActiveFilters = searchQuery || selectedSpecialty !== 'All';

  if (templates.length === 0) {
    if (showBookmarks && bookmarkedIds.size === 0) {
      return (
        <div key="empty-bookmarks" className="text-center py-24 px-6 sm:px-8 bg-white dark:bg-slate-800 rounded-3xl border-2 border-dashed border-slate-100 dark:border-slate-700 transition-colors">
          <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-regular fa-bookmark text-indigo-400 dark:text-indigo-500 text-3xl"></i>
          </div>
          <h4 className="text-xl font-bold font-brand text-slate-700 dark:text-slate-200 mb-2">No saved templates</h4>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            You have not bookmarked any templates yet. Browse the collection and save your favorites for quick access.
          </p>
        </div>
      );
    }

    return (
      <div key="empty-search" className="text-center py-24 px-6 sm:px-8 bg-white dark:bg-slate-800 rounded-3xl border-2 border-dashed border-slate-100 dark:border-slate-700 transition-colors">
        <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fa-solid fa-clipboard-question text-slate-300 dark:text-slate-600 text-3xl"></i>
        </div>
        <h4 className="text-xl font-bold font-brand text-slate-700 dark:text-slate-200 mb-2">No templates found</h4>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          We couldn't find any templates matching your search criteria. Try a broader keyword or change the specialty.
        </p>
      </div>
    );
  }

  return (
    <div key="results" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Left Side: Title */}
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
          {hasActiveFilters ? (
            <span>
              Found <span className="text-indigo-950 dark:text-indigo-300">{templates.length}</span> results
            </span>
          ) : (
            <span>Explore all templates</span>
          )}
        </h3>
        
        {/* Right Side: Controls Wrapper */}
        <div className="flex items-center gap-4">
          {/* View Toggles Container */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl transition-colors">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-700 text-indigo-950 dark:text-indigo-100 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-indigo-900 dark:hover:text-indigo-200'
              }`}
              aria-label="Grid view"
            >
              <i className="fa-solid fa-grip"></i>
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-slate-700 text-indigo-950 dark:text-indigo-100 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-indigo-900 dark:hover:text-indigo-200'
              }`}
              aria-label="List view"
            >
              <i className="fa-solid fa-list"></i>
              <span className="hidden sm:inline">List</span>
            </button>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-sm font-medium text-indigo-950 dark:text-indigo-200 hover:text-black dark:hover:text-white px-4 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTemplates.map((template) => (
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
      ) : (
        <TemplateListView
          templates={currentTemplates}
          onView={onView}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={onToggleBookmark}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
