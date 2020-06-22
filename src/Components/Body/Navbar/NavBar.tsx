import React from 'react';
import style from './css.module.css';
import {NavLink} from "react-router-dom";

type NavBarType = {}


function NavBar(props: NavBarType) {
    return (
        <div className={style.NavBar}>
            <div className={style.NavBar_item}><NavLink to={"/Hotel_Number/Dialogs"} activeClassName={style.Active}>Моя комната</NavLink></div>
            <div className={style.NavBar_item}><NavLink to={"/Restaurant"} activeClassName={style.Active}>Ресторан</NavLink></div>
            <div className={style.NavBar_item}><NavLink to={"/Beach"} activeClassName={style.Active}>Пляж</NavLink></div>
            <div className={style.NavBar_item}><NavLink to={"/Theater"} activeClassName={style.Active}>Театр</NavLink></div>
            <div className={style.NavBar_item}><NavLink to={"/Clubs"} activeClassName={style.Active}>Клубы</NavLink></div>
            <div className={style.NavBar_item}><NavLink to={"/Settings"} activeClassName={style.Active}>Настройки</NavLink></div>
            <div className={style.NavBar_item}><NavLink to={"/Loggout"} activeClassName={style.Active}>Выход</NavLink></div>


        </div>

    )

}

export default NavBar;
