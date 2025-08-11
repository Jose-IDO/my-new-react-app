import React from 'react'
import styles from './login-reg.module.css'
import { TextInput } from '../Inputs/TextInput'

export const Login = () => {
    return (
        <div className={styles['auth-container']}>
            <h2>Login</h2>
            <TextInput label='First Name' onChange={() => {}}/>
            <TextInput label='Surname' onChange={() => {}}/>
        </div>
    )
}