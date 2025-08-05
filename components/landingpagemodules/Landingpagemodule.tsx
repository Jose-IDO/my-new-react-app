import React from 'react'
import styles from './landingpagemod.module.css'


type LandingpagemoduleProps = {
  children: React.ReactNode;
  modcolor: string;
  className?: string;
}

export const Landingpagemodule: React.FC<LandingpagemoduleProps> = ({children, modcolor}) => {
  return (
    <div className={`${styles.landingpagemod} ${styles[modcolor]}`}>
      {children}
    </div>
  )
}
