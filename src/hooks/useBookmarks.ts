import { useState, useEffect } from 'react';
import { Template } from '../types';
import { INITIAL_TEMPLATES } from '../data';

export function useBookmarks() {
  const [bookmarkedTemplateIds, setBookmarkedTemplateIds] = useState<Set<string>>(new Set());
  const [bookmarkCounts, setBookmarkCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  // Load bookmarks from local storage
  useEffect(() => {
    try {
      const storedBookmarks = localStorage.getItem('clerkly_bookmarks');
      if (storedBookmarks) {
        const parsed = JSON.parse(storedBookmarks);
        if (Array.isArray(parsed)) {
          setBookmarkedTemplateIds(new Set(parsed));
        }
      }
    } catch (error) {
      console.error("Error loading bookmarks from local storage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initialize bookmark counts based on static data + local bookmarks
  useEffect(() => {
    const counts: Record<string, number> = {};
    INITIAL_TEMPLATES.forEach(template => {
      // Add 1 to the static count if the user has this template bookmarked locally
      counts[template.id] = template.bookmarkCount + (bookmarkedTemplateIds.has(template.id) ? 1 : 0);
    });
    setBookmarkCounts(counts);
  }, [bookmarkedTemplateIds]);

  const toggleBookmark = async (template: Template) => {
    setBookmarkedTemplateIds(prev => {
      const isCurrentlyBookmarked = prev.has(template.id);
      const newBookmarks = new Set(prev);
      
      if (isCurrentlyBookmarked) {
        newBookmarks.delete(template.id);
      } else {
        newBookmarks.add(template.id);
      }
      
      // Update local bookmarkCounts state
      setBookmarkCounts(prevCounts => ({
        ...prevCounts,
        [template.id]: (prevCounts[template.id] || template.bookmarkCount) + (isCurrentlyBookmarked ? -1 : 1)
      }));
      
      // Save to local storage
      try {
        localStorage.setItem('clerkly_bookmarks', JSON.stringify(Array.from(newBookmarks)));
      } catch (error) {
        console.error("Error saving bookmarks to local storage:", error);
      }
      
      return newBookmarks;
    });
  };

  return { bookmarkedTemplateIds, bookmarkCounts, toggleBookmark, loading };
}