import React from 'react'
import { useState } from 'react';
import styles from './login-reg.module.css'
import { TextInput } from '../Inputs/TextInput'
import { Buttons } from '../buttons/Buttons'

type LoginProps = {
    CloseOverlay: () => void;
    
    onClick?: () => void;
    

    

}

export const Login: React.FC<LoginProps> = ({CloseOverlay}) => { 
    
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

         const handleLogin = () => {
        console.log('Login attempt:', { email, password });
        CloseOverlay();
         }


    return (
        <div className={styles['auth-container']}>
            <h2 className = {styles.h2}>Login</h2>
            <TextInput 
                label='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput 
                label='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
                <div className = {styles.buttonscont}>
                        <Buttons bgColor="contbuttonone" onClick={handleLogin}>Login</Buttons>
                        <Buttons bgColor="contbuttonone"onClick={CloseOverlay} >Cancel</Buttons>
                </div>


        </div>
    )
}