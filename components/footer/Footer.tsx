import React from 'react'
import styles from './Footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <div className={styles.copyright}>
          <p>&copy; 2025 SNAPIT.COM - South Africa's #1 Link Storage Solution</p>
        </div>
        <div className={styles.branding}>
          <p>Save. Organize. Access Anywhere.</p>
        </div>
      </div>
    </footer>
  )
}