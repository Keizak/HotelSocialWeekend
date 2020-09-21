import React from 'react';
import style from './css.module.css';
import {followACType, unfollowACType, UserType} from "../../../../Redux/UsersPage-Reducer";
import {NavLink} from "react-router-dom";

type FunctionsType = {
    follow: (userid: number) => void
    unfollow: (userid: number) => void
    isFollowingStatus: Array<number>
}
type UserPropsType=UserType & FunctionsType



function User(props:UserPropsType) {

    let photo
    let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOBRsjz99XaRHYR0HqqRtWBJM9y-k6wMJEfQ&usqp=CAU"
    if (props.photos.small === null && props.photos.large === null){
        photo = ava
    }
    else{
        if(props.photos.large !== null){photo=props.photos.large}
        else if(props.photos.small !== null){photo=props.photos.small}
    }
    return (
        <div className={style.Container}>
            <div className={style.ava_button}>
                <NavLink to={`/Profile/${props.id}`}><img src={photo}/></NavLink><br/>
                {props.followed ?
                    <button disabled={props.isFollowingStatus.some(id => id === props.id)} onClick={() => (props.unfollow(props.id))}>UnFollow</button> :
                    <button disabled={props.isFollowingStatus.some(id => id === props.id)} onClick={() => (props.follow(props.id))}>Follow</button>                }
            </div>
            <div className={style.content}>
                <div className={style.info}>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
            </div>
        </div>)


}
export default User;

