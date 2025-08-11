import React from 'react'
import styles from './overlay.module.css'
import closeIcon from '../../src/assets/close.png'
import { Login } from '../Authentication/Login'

export const Overlay: React.FC = () => {
    const close = () => {
        // Add close functionality here later
        console.log('Close overlay');
    }

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={styles['overlay-container']}>
            <div className={styles.overlay} onClick={stopPropagation}>
                <img 
                    className={styles['close-icon']} 
                    src={closeIcon} 
                    alt="Close" 
                    onClick={close} 
                />
                <div className={styles.overlaychild}>
                    <Login />
                </div>
            </div>
        </div>
    )
}