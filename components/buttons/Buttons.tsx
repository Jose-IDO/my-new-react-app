import React from 'react'
import styles from './buttons.module.css'

type ButtonProps = {
  children: React.ReactNode;
  bgColor: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

export const Buttons: React.FC<ButtonProps> = ({ children, bgColor, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button 
      type="button"
      className={`${styles.button} ${styles[bgColor]}`} 
      onClick={handleClick}
    >
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