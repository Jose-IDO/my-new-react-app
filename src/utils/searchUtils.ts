import type { LinkType } from '../types/LinkTypes';

export const searchLinks = (links: LinkType[], searchTerm: string): LinkType[] => {
  if (!searchTerm.trim()) {
    return [];
  }

  const term = searchTerm.toLowerCase();
  return links.filter(link => 
    link.title.toLowerCase().includes(term) ||
    link.url.toLowerCase().includes(term) ||
    link.description.toLowerCase().includes(term) ||
    (link.tags && link.tags.toLowerCase().includes(term))
  );
};
