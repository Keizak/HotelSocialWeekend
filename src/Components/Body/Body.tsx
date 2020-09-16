import React from 'react';
import style from './css.module.css';
import FriendsBar from "./FriendsBar/FriendsBar";
import {Route} from "react-router-dom";
import Settings from "./Navbar/Settings/Settings";
import Logout from "./Navbar/Loggout/Loggout";
import Music from "./Music/Music";
import Video from "./Video/Video";
import Photo from "./Photo/Photo";
import DialogsContainer from "./Dialogs/DialogsContainer";
import {AppRootStateType} from "../../Redux/Redux-Store";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import NavBarContainer from "./Navbar/NavBarContainer";
import MyPageContainer from "./MyPage/MyPageContainer";



type BodyType= {
    state: AppRootStateType
    dispatch:(action: any)=> void
}


function Body(props:BodyType) {
    return (<div className={style.Body}>
        <NavBarContainer />
            <Route path={'/Profile/:userId'} render={() =>  <MyPageContainer/>}/>
            <Route path='/Dialogs/' render={() => <DialogsContainer/>}/>
            <Route  exact path='/News' render={()=> <UsersContainer />}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/Logout' component={Logout}/>
            <Route  exact path='/Photo' component={Photo}/>
            <Route  exact path='/Music' component={Music}/>
            <Route  exact path='/Video' component={Video}/>
        <Route  exact path='/Login' component={Login}/>
            <FriendsBar FriendsBarData={props.state.FriendsBarPage}/>
        </div>)

}
export default Body;

