import React from 'react'
import styles from './LinksView.module.css'
import type { LinkType } from '../../src/types/LinkTypes'
import { Buttons } from '../buttons/Buttons'
import { StatItem } from '../StatItem/StatItem'

type LinksViewProps = {
  links: LinkType[];
  allLinksCount: number;
  onEdit: (link: LinkType) => void;    
  onDelete: (id: number) => void;
  activeSearchTerm?: string;
}

export const LinksView: React.FC<LinksViewProps> = ({ 
  links, 
  allLinksCount,
  onEdit, 
  onDelete, 
  activeSearchTerm 
}) => {

  const linksWithTags = links.filter(function(link) {
    return link.tags !== '' && link.tags !== null && link.tags !== undefined;
  });

  const isSearching = activeSearchTerm && activeSearchTerm.length > 0;
  const displayTitle = isSearching 
    ? `Search Results` 
    : "Your Saved Links";

  return (
    <div className={styles.linksview}>
      <h2 className={styles.title}>{displayTitle}</h2>
      

      {isSearching && (
        <div className={styles.searchcontext}>
          <p>
            Showing {links.length} of {allLinksCount} links matching "<strong>{activeSearchTerm}</strong>"
          </p>
        </div>
      )}
      
      <div className={styles.stats}>
        <StatItem 
          count={links.length}
          label={isSearching ? "Results Found" : "Total Links"}
        />
        <StatItem 
          count={linksWithTags.length}
          label={isSearching ? "Tagged Results" : "Tagged Links"}
        />
      </div>

      <div className={styles.tableheader}>
        <div className={styles.headeritem}>Title</div>
        <div className={styles.headeritem}>Bookmark</div>
        <div className={styles.headeritem}>Description</div>
        <div className={styles.headeritem}>Tags</div>
        <div className={styles.headeritem}>Actions</div>
      </div>

      {links.map(function(link) {
        return (
          <div key={link.id} className={styles.tablerow}>
            <div className={styles.rowitem}>
              {link.title}
            </div>
            <div className={styles.rowitem}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.url}
              </a>
            </div>
            <div className={styles.rowitem}>
              {link.description}
            </div>
            <div className={styles.rowitem}>
              {link.tags}
            </div>
            <div className={styles.rowitem}>
              <Buttons bgColor="bgYellow" onClick={() => onEdit(link)}>
                Edit
              </Buttons>
              <Buttons bgColor="bgRed" onClick={() => onDelete(link.id)}>
                Delete
              </Buttons>
            </div>
          </div>
        );
      })}

      {links.length === 0 && (
        <div className={styles.emptystate}>
          {isSearching ? (
            <>
              <p>No links found matching "<strong>{activeSearchTerm}</strong>".</p>
              <p>Try a different search term or check your spelling.</p>
            </>
          ) : (
            <p>No links saved yet. Add your first link above!</p>
          )}
        </div>
      )}

      <button 
        className={styles.plusButton} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top to add new link"
        type="button"
      >
        +
      </button>
    </div>
  )
}