import React from 'react'
import styles from './overlay.module.css'
import { Landingpagemodule } from '../landingpagemodules/Landingpagemodule'
import closeIcon from '../../src/assets/close.png'

type overlayprops ={
    children: React.ReactNode;

}

export const Overlay: React.FC<React.ReactNode>= () => {
  return (
    <div>
        <image className = {styles['close-icon']} src={closeIcon} onClick={} /> 
        <text className={styles.overlaytext}> this is the overlay component</text> 

    </div>
  )
}
