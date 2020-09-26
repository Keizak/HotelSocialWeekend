import React from 'react';
import style from './css.module.css';
import photo from "./5.svg"

export const Preloader = (props:any) => {
    return  <div className={style.loading}><img src={photo}/></div>
}