import React from 'react'
import styles from './LinksView.module.css'
import type { LinkType } from '../../src/types/LinkTypes'
// import { Overlay } from '../overlay/Overlay'

type LinksViewProps = {
  links: LinkType[];
}

export const LinksView: React.FC<LinksViewProps> = ({ links }) => {
  const linksWithTags = links.filter(function(link) {
    return link.tags !== '' && link.tags !== null && link.tags !== undefined;
  });

  return (
    <div className={styles.linksview}>
        {/* <Overlay className = {styles.overlay}/>  */}
      <h2 className={styles.title}>Your Saved Links</h2>
      
      
      <div className={styles.stats}>
        <div className={styles.statitem}>
          <span className={styles.statcount}>{links.length}</span>
          <span className={styles.statlabel}>Total Links</span>
        </div>
        <div className={styles.statitem}>
          <span className={styles.statcount}>{linksWithTags.length}</span>
          <span className={styles.statlabel}>Tagged Links</span>
        </div>
      </div>

      <div className={styles.tableheader}>
        <div className={styles.headeritem}>Title</div>
        <div className={styles.headeritem}>Bookmark</div>
        <div className={styles.headeritem}>Description</div>
        <div className={styles.headeritem}>Tags</div>
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
          </div>
        );
      })}

      {links.length === 0 && (
        <div className={styles.emptystate}>
          <p>No links saved yet. Add your first link above!</p>
        </div>
      )}
    </div>
  )
}