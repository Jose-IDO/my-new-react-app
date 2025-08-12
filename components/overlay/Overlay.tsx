import React from 'react'
import styles from './overlay.module.css'
import closeIcon from '../../src/assets/close.png'
import { Login } from '../Authentication/Login'

type LoginProps = {
    closeoverlay: () => void;
    isVisible: boolean;
}

export const Overlay: React.FC <LoginProps>=({closeoverlay, isVisible}) => {
 if (!isVisible) return null
const close = () => {
    closeoverlay();
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
                    alt="Close-buttom" 
                    onClick={close} 
                />
                <div className={styles.overlaychild}>
                    <Login CloseOverlay={closeoverlay} />
                </div>
            </div>
        </div>
    )
}