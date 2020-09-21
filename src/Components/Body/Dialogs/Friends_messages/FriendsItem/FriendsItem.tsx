import React from 'react';
import style from './css.module.css';
import {NavLink} from "react-router-dom";

export type FriendsItemType = {
  name: string;
  id: string;
}

function FriendsItem(props: FriendsItemType) {
  return (
      <div className={style.item}><NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink></div>
  )
}

export default FriendsItem;

