import React from 'react'
import styles from './AboutUsOverlay.module.css'
import closeIcon from '../../src/assets/close.png'

type AboutUsOverlayProps = {
    closeOverlay: () => void;
    isVisible: boolean;
}

export const AboutUsOverlay: React.FC<AboutUsOverlayProps> = ({ closeOverlay, isVisible }) => {
    if (!isVisible) return null;

    const close = () => {
        closeOverlay();
    }

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={styles['overlay-container']} onClick={close}>
            <div className={styles.overlay} onClick={stopPropagation}>
                <img 
                    className={styles['close-icon']} 
                    src={closeIcon} 
                    alt="Close button" 
                    onClick={close} 
                />
                <div className={styles.overlayContent}>
                    <h2 className={styles.title}>About Us</h2>
                    <div className={styles.content}>
                        <p className={styles.paragraph}>
                            Welcome to <strong>SNAPIT.COM</strong>, South Africa's #1 Link Storage Solution!
                        </p>
                        <p className={styles.paragraph}>
                            We provide a simple, efficient way to save, organize, and access your favorite links from anywhere - no browser limitations. Whether you're collecting research articles, bookmarking important resources, or keeping track of your favorite websites, SNAPIT.COM makes it easy.
                        </p>
                        <p className={styles.paragraph}>
                            Our platform allows you to:
                        </p>
                        <ul className={styles.list}>
                            <li>Save links with custom titles and descriptions</li>
                            <li>Organize your bookmarks with tags</li>
                            <li>Search through your saved links quickly</li>
                            <li>Access your links from any device</li>
                            <li>Edit and manage your bookmarks effortlessly</li>
                        </ul>
                        <p className={styles.paragraph}>
                            <strong>Save. Organize. Access Anywhere.</strong>
                        </p>
                        <p className={styles.paragraph}>
                            &copy; 2025 SNAPIT.COM - All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

