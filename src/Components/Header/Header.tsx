import React from 'react';
import style from './css.module.css';
import {NavLink} from "react-router-dom";
import {AuthUserType} from "../../Redux/Auth-reduser";

type HeaderType = {
    isLogin: boolean
    data: AuthUserType
}


function Header(props: HeaderType) {
    return (
        <div className={style.Header}>
            <div>Hotel Social Weekend</div>
            {props.isLogin ?
                <div>
                    Ваш логин:{props.data.login}<br/>
                    Ваш id:{props.data.id}<br/>
                    Ваш email:{props.data.email}<br/>
                </div> :
                <div className={style.loginButton}>
                    <NavLink to="/login">Login</NavLink>
                </div>}

        </div>


    )

}

export default Header;

