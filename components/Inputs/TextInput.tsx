import React from 'react'
import styles from './input.module.css';

type TextInputProps = {
    id?: string;
    value?: string | number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
    label: string;
   
    name?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
    id,
    value,
    onChange,
    style,
    label,
        name
}) => {
    return (
        <div className={styles.inputcontainer}>
            <label className={styles['input-label']}>{label}</label>
            <input 
                name={name} 
                type="text" 
                id={id} 
                value={value} 
                onChange={onChange} 
                className={styles.input}
                style={style}
            />

        </div>
    )
}