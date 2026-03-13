import { useState, useEffect } from 'react';
import { Template } from '../types';

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

  // We don't have a global backend anymore, so we just use the static counts from INITIAL_TEMPLATES
  // and increment them locally if bookmarked.
  useEffect(() => {
    // We can just leave bookmarkCounts empty or initialize it based on local bookmarks if we want
    // For now, we'll just rely on the static counts in the data.ts file.
    setBookmarkCounts({});
  }, []);

  const toggleBookmark = async (template: Template) => {
    setBookmarkedTemplateIds(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(template.id)) {
        newBookmarks.delete(template.id);
      } else {
        newBookmarks.add(template.id);
      }
      
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
