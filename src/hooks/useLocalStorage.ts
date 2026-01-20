import { useState, useEffect } from 'react';
import type { LinkType } from '../types/LinkTypes';

const STORAGE_KEY = 'savedLinks';

export const useLocalStorage = () => {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLinks = () => {
      try {
        const savedLinks = localStorage.getItem(STORAGE_KEY);
        if (savedLinks) {
          const parsedLinks = JSON.parse(savedLinks);
          if (Array.isArray(parsedLinks)) {
            setLinks(parsedLinks);
          }
        }
      } catch (error) {
        console.error('Error loading links from localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLinks();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
      } catch (error) {
        console.error('Error saving links to localStorage:', error);
      }
    }
  }, [links, isLoading]);

  return { links, setLinks, isLoading };
};
