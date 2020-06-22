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
import Dialogs_Full from "./Hotel_number/Dialogs_full/Dialogs_full"
import Blog from "./Hotel_number/Entertainment/Blog/Blog"
import Music from "./Hotel_number/Entertainment/Music/Music";
import Video from "./Hotel_number/Entertainment/Video/Video";
import Photo from "./Hotel_number/Entertainment/Photo/Photo";

type BodyType= {

 }


function Body(props:BodyType) {
  return (
          <div className={style.Body} >
              <NavBar />
              <Route exact path='/' component={Hotel_Number}/>
              <Route path='/Restaurant' component={Restaurant}/>
              <Route path='/Hotel_Number/Dialogs' component={Hotel_Number}/>
              <Route path='/Beach' component={Beach}/>
              <Route path='/Clubs' component={Clubs}/>
              <Route path='/Settings' component={Settings}/>
              <Route path='/Loggout' component={Loggout}/>
              <Route path='/Theater' component={Theater}/>
              <Route path='/Dialogs_full/' component={Dialogs_Full}/>
              <Route  exact path='/HotelNumber/Blog' component={Blog}/>
              <Route  exact path='/HotelNumber/Photo' component={Photo}/>
              <Route  exact path='/HotelNumber/Music' component={Music}/>
              <Route  exact path='/HotelNumber/Video' component={Video}/>
              <FriendsBar />


          </div>


)

}
export default Body;

