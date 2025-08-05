import React from 'react'
import styles from './Buttons.module.css' // 

type ButtonProps = {
  children: React.ReactNode;
  bgColor: string;
}

export const Buttons: React.FC<ButtonProps> = ({ children, bgColor }) => {
  return (
    <button className={`${styles.button} ${styles[bgColor]}`}>
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