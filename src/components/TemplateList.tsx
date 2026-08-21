import { Template, Specialty } from '../types';
import { TemplateCard } from './TemplateCard';
import { TemplateListView } from './TemplateListView';

interface TemplateListProps {
  templates: Template[];
  totalTemplates: number;
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

export function TemplateList({
  templates,
  totalTemplates,
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
  
  const hasActiveFilters = searchQuery || selectedSpecialty !== 'All' || showBookmarks;

  return (
    <div key="results" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
          {hasActiveFilters ? (
            <span>
              Found <span className="text-indigo-950 dark:text-indigo-300">{totalTemplates}</span> results
            </span>
          ) : (
            <span>Explore all templates</span>
          )}
        </h3>
        
        <div className="flex items-center gap-4">
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
          {templates.map((template) => (
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
          templates={templates}
          onView={onView}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={onToggleBookmark}
        />
      )}
    </div>
  );
}
