import React from 'react'
import { Buttons } from '../buttons/Buttons'
import styles from './buttoncont.module.css'
// import styles from '../buttons/buttons.module.css'


type ButtonContProps = {
  LoginButtonClicked: () => void;
 
  
    

}

export const ButtonCont: React.FC<ButtonContProps>= ({ LoginButtonClicked}) => {
  return (
    <div className ={styles.buttoncont} > 
    <Buttons bgColor = "bgGreen">About Us </Buttons>
    <Buttons bgColor = "bgYellow" onClick={ LoginButtonClicked}> Login </Buttons>
    {/* <Buttons bgColor = "bgRed"> Register</Buttons> */}
    
      </div>
  )
}

{/* <Buttons/> */}
