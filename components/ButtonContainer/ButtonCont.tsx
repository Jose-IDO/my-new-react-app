import React from 'react'
import { Buttons } from '../buttons/Buttons'
import styles from './buttoncont.module.css'
// import styles from '../buttons/buttons.module.css'

export const ButtonCont: React.FC<any>= () => {
  return (
    <div className ={styles.buttoncont} > 
    <Buttons bgColor = "bgGreen">About Us </Buttons>
    <Buttons bgColor = "bgYellow"> Login </Buttons>
    {/* <Buttons bgColor = "bgRed"> Register</Buttons> */}
    
      </div>
  )
}

{/* <Buttons/> */}
