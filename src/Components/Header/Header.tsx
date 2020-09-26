import React from 'react';
import style from './css.module.css';
import {NavLink} from "react-router-dom";
import {AuthUserType, goLogoutTC} from "../../Redux/Auth-reduser";
import {useDispatch} from "react-redux";

type HeaderType = {
    isLogin: boolean
    data: AuthUserType
}


function Header(props: HeaderType) {
    const dispatch = useDispatch()
    const logoutbutton = () => { dispatch(goLogoutTC())}
    return (
        <div className={style.Header}>
            <div>Hotel Social Weekend</div>
            {props.isLogin ?
                <div className={style.HeaderData}>
                <div>
                    Ваш логин:{props.data.login}<br/>
                    Ваш id:{props.data.id}<br/>
                    Ваш email:{props.data.email}<br/>
                </div>
                    <button className={style.exit} onClick={logoutbutton}>Выход</button>
                </div>: null}

        </div>


    )

}

export default Header;

