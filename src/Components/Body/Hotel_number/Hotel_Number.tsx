import React from 'react';
import style from './css.module.css';
import Entertainment from "./Entertainment/Entertainment";
import Dialogs from "./Dialogs/Dialogs";
import Hotel_status from "../../Hotel_Status/Hotel_status";

type Hotel_NumberType= {

 }


function Hotel_Number(props:Hotel_NumberType) {
  return (
      <div className={style.Hotel_Number}>
          <Hotel_status/>
          <Entertainment />
          <Dialogs />

      </div>

)

}
export default Hotel_Number;

