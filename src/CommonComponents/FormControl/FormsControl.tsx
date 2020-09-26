import React from 'react';
import style from './css.module.css';

export const FormControl = (props:any) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={style.main}>
        {props.children}
        { hasError && <span>{props.meta.error}</span>}
    </div>
}
export const TextArea = (props:any) =>{
    return<FormControl {...props}><textarea {...props.textarea}/></FormControl>
}

export const Input = (props:any) =>{
    return<FormControl {...props}><input {...props.input}/></FormControl>
}
