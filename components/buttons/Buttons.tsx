import React from 'react'
import styles from './Buttons.module.css' 

type ButtonProps = {
  children: React.ReactNode;
  bgColor: string;
  onClick?: () => void
  CloseOverlay?: () => void; 

}

export const Buttons: React.FC<ButtonProps> = ({ children, bgColor, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[bgColor]}`} onClick = {onClick}>
      {children}
    </button>
  )
}

// export const Buttons: React.FC<ButtonProps> = ({ children, bgColor }) => {
//   return (
//     <button className={`${styles.button} ${styles[bgColor]}`}>
//       {children}
//     </button>
//   )
// }