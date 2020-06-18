import React from 'react';
import style from './css.module.css';
import Photo from "./Photo/Photo";
import Music from "./Music/Music";
import Blog from "./Blog/Blog";
import Video from "./Video/Video";

type EntertainmentType= {

 }


function Entertainment(props:EntertainmentType) {
  return (
      <div className={style.Entertainment}>
          <Blog/>
          <Photo/>
          <Music/>
          <Video/>
      </div>

)

}
export default Entertainment;

