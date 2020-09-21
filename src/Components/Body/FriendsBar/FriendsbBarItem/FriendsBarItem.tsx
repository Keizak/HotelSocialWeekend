import React from 'react';
import styles from './css.module.css';
import {NavLink} from "react-router-dom";

export type FriendsBarItemType = {
    id:string;
    name:string;
    photo: string;
 }


function FriendsBarItem(props:FriendsBarItemType) {
  return (
      <div className={styles.item}>

          <img src={props.photo}/>
          <NavLink to={"/Friends/id"+ props.id}>
          {props.name}
          </NavLink>
      </div>

)

}
export default FriendsBarItem;
