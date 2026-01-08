import React from 'react'
import styles from './Footer.module.css'
import { Buttons } from '../buttons/Buttons'

type FooterProps = {
  onAboutUsClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutUsClick }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <div className={styles.copyright}>
          <p>&copy; 2025 SNAPIT.COM - South Africa's #1 Link Storage Solution</p>
        </div>
        <div className={styles.branding}>
          <p>Save. Organize. Access Anywhere.</p>
        </div>
        <div className={styles.aboutButton}>
          <Buttons bgColor="bgGreen" onClick={onAboutUsClick}>
            About Us
          </Buttons>
        </div>
      </div>
    </footer>
  )
}