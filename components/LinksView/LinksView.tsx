import React from 'react'
import styles from './LinksView.module.css'

export const LinksView: React.FC = () => {
  return (
    <div className={styles.linksview}>
      <h2 className={styles.title}>Your Saved Links</h2>
      
      
      <div className={styles.stats}>
        <div className={styles.statitem}>
          <span className={styles.statcount}>0</span>
          <span className={styles.statlabel}>Total Links</span>
        </div>
        <div className={styles.statitem}>
          <span className={styles.statcount}>0</span>
          <span className={styles.statlabel}>Tagged Links</span>
        </div>
        {/* <div className={styles.statitem}>
          <span className={styles.statcount}>0</span>
          <span className={styles.statlabel}>Recently Added</span>
        </div> */}
      </div>

     
      <div className={styles.tableheader}>
        <div className={styles.headeritem}>Title</div>
        <div className={styles.headeritem}>Bookmark</div>
        <div className={styles.headeritem}>Description</div>
        <div className={styles.headeritem}>Tags</div>
      </div>

      
    </div>
  )
}