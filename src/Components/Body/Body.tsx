import React from 'react';
import style from './css.module.css';
import FriendsBar from "./FriendsBar/FriendsBar";
import {Route, Switch} from "react-router-dom";
import Settings from "./Navbar/Settings/Settings";
import Logout from "./Navbar/Loggout/Loggout";
import Music from "./Music/Music";
import Video from "./Video/Video";
import Photo from "./Photo/Photo";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import NavBarContainer from "./Navbar/NavBarContainer";
import MyPageContainer from "./MyPage/MyPageContainer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {FriendsBarItemType} from "./FriendsBar/FriendsbBarItem/FriendsBarItem";



type mapStateToPropsType= {
    FriendsBarPage:Array<FriendsBarItemType>
}


function Body(props:mapStateToPropsType) {
    return (<div className={style.Body}>
        <NavBarContainer />
        <Switch>
            <Route exact path={'/Profile/:userId'} render={() =>  <MyPageContainer/>}/>
            <Route exact path='/Dialogs/' render={() => <DialogsContainer/>}/>
            <Route  exact path='/News' render={()=> <UsersContainer />}/>
            <Route exact path='/Settings' component={Settings}/>
            <Route exact path='/Logout' component={Logout}/>
            <Route  exact path='/Photo' component={Photo}/>
            <Route  exact path='/Music' component={Music}/>
            <Route  exact path='/Video' component={Video}/>
        </Switch>
            <FriendsBar FriendsBarData={props.FriendsBarPage}/>
        </div>)

}
const mapStateToProps = (state:AppRootStateType) => ({
    FriendsBarPage:state.FriendsBarPage
})
export default connect(mapStateToProps, {})(Body);

