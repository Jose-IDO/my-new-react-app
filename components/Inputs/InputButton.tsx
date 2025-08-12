import React, { InputHTMLAttributes } from 'react'
import styles from './input.module.css'
import { Buttons } from '../buttons/Buttons'

export const InputButton: React.FC<InputHTMLAttributes<HTMLInputElement>> = (...rest) => {
  return (
   <Buttons bgColor="contbuttonone" > <input className={styles.button} {...rest}></input> </Buttons>  
    )
}
