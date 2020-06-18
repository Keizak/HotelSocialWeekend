import React from 'react';
import style from './css.module.css';
import NavBar from "./Navbar/NavBar";
import Hotel_Number from "./Hotel_number/Hotel_Number";
import FriendsBar from "./FriendsBar/FriendsBar";
import {Route} from "react-router-dom";
import Restaurant from "./Navbar/Restaurant/Restaurant";
import Beach from "./Navbar/Beach/Beach";
import Clubs from "./Navbar/Clubs/Clubs";
import Settings from "./Navbar/Settings/Settings";
import Loggout from "./Navbar/Loggout/Loggout";
import Theater from "./Navbar/Theater/Theater";

type BodyType= {

 }


function Body(props:BodyType) {
  return (
          <div className={style.Body} >
              <NavBar />
              <Route path='/Restaurant' component={Restaurant}/>
              <Route path='/Hotel_Number' component={Hotel_Number}/>
              <Route path='/Beach' component={Beach}/>
              <Route path='/Clubs' component={Clubs}/>
              <Route path='/Settings' component={Settings}/>
              <Route path='/Loggout' component={Loggout}/>
              <Route path='/Theater' component={Theater}/>
              <FriendsBar />


          </div>


)

}
export default Body;

