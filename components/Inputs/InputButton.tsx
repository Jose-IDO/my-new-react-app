import React, { InputHTMLAttributes } from 'react'
import styles from '../Inputs/input.module.css'
import { Buttons } from '../buttons/Buttons'

export const InputButton: React.FC<InputHTMLAttributes<HTMLInputElement>> = (...rest) => {
  return (
   <Buttons > <input className={styles.button} {...rest}></input> </Buttons>  
    )
}
