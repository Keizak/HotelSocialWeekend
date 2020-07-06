import React from 'react';
import style from './css.module.css';
import NavBar from "./Navbar/NavBar";
import FriendsBar from "./FriendsBar/FriendsBar";
import {Route} from "react-router-dom";
import Settings from "./Navbar/Settings/Settings";
import {ActionType, StoreType} from "../../Redux/Store";
import Logout from "./Navbar/Loggout/Loggout";
import Music from "./Music/Music";
import Video from "./Video/Video";
import Photo from "./Photo/Photo";
import MyPage from "./MyPage/MyPage";
import Dialogs from "./Dialogs/Dialogs";

type BodyType= {
    store: StoreType
    dispatch:(action: ActionType)=> void
}


function Body(props:BodyType) {
    return (
          <div className={style.Body} >
              <NavBar />
              <Route exact path='/' render={() => <MyPage store={props.store} dispatch={props.dispatch}/>}/>
              <Route exact path='/Hotel_Number/' render={() =>  <MyPage store={props.store} dispatch={props.dispatch}/>}/>
              <Route path='/Dialogs/' render={() => <Dialogs store={props.store} dispatch={props.dispatch}/> }/>
              <Route path='/Settings' component={Settings}/>
              <Route path='/Logout' component={Logout}/>
              <Route  exact path='/Photo' component={Photo}/>
              <Route  exact path='/Music' component={Music}/>
              <Route  exact path='/Video' component={Video}/>
              <FriendsBar FriendsBarData={props.store._state.FriendsBarPage}/>


          </div>


)

}
export default Body;

