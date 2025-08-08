import React from 'react'
import styles from './overlay.module.css'
// import { Landingpagemodule } from '../landingpagemodules/Landingpagemodule'
import closeIcon from '../../src/assets/close.png'
import { Buttons } from '../buttons/Buttons'


// type overlayprops ={
//     children: React.ReactNode;

// }

export const Overlay: React.FC<any>= () => {

  const close = () => { 
  }

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
  <div className = {styles['overlay-container']} >




      <div className = {styles.overlay} onClick={stopPropagation}>
      <img className={styles['close-icon']} src={closeIcon} alt="Close" onClick={close} /> 
      <div className = {styles.overlaychild}  >
        
        <text className={styles.overlaytext}> this is the overlay component</text>
        {/* <Buttons bgColor="contbuttonone" >  </Buttons> */}
        {/* <Buttons bgColor="contbuttonone" >  </Buttons> */}
      </div>
    </div>


    
  </div>

  )
}
