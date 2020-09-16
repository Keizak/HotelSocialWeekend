import React from 'react';
import style from './css.module.css';
import FriendsBarItem, {FriendsBarItemType} from "./FriendsbBarItem/FriendsBarItem";

type FriendsBarType = {
    FriendsBarData: Array<FriendsBarItemType>

}


function FriendsBar(props: FriendsBarType) {
    let data = props.FriendsBarData.map ( (f) => {return <FriendsBarItem id={f.id} photo={f.photo} name={f.name}/>})
    return (
        <div className={style.NavBar}>
            <div className={style.Title}>Друзья онллайн</div>
            {data}
        </div>
    )}
    export default FriendsBar;