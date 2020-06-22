import React from 'react';
import style from './css.module.css';
import Photo from "./Photo/Photo";
import Music from "./Music/Music";
import Blog from "./Blog/Blog";
import Video from "./Video/Video";
import {NavLink} from "react-router-dom";

type EntertainmentType= {

 }


function Entertainment(props:EntertainmentType) {
  return (
      <div className={style.Entertainment}>
          <div className={style.Entertainment}> <NavLink to={"/HotelNumber/Blog"}>Blog</NavLink></div>
          <div className={style.Entertainment}> <NavLink to={"/HotelNumber/Photo"}>Photo</NavLink></div>
          <div className={style.Entertainment}> <NavLink to={"/HotelNumber/Music"}>Music</NavLink></div>
          <div className={style.Entertainment}> <NavLink to={"/HotelNumber/Video"}>Video</NavLink></div>
      </div>

)

}
export default Entertainment;

