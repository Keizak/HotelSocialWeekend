import React from 'react';
import style from './css.module.css';
import Favorite_friends from "./Favorite_friends/Favorite_friends";
import Mesagges from "./Mesagges/Mesagges";
import {Route} from "react-router-dom";

type DialogsType = {}


function Dialogs(props: DialogsType) {
    return (
        <div className={style.Container}>
            <div className={style.Favorites}>
                <Favorite_friends />
            </div>
            <Route exact path='/Hotel_Number/Dialogs' component={Mesagges}/>
            <Route exact path='/' component={Mesagges}/>
            <Route path='/Hotel_Number/Dialogs/1' component={Mesagges}/>
            <Route path='/Hotel_Number/Dialogs/2' component={Mesagges}/>
            <Route path='/Hotel_Number/Dialogs/3' component={Mesagges}/>
        </div>

    )

}

export default Dialogs;