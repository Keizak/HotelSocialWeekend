import React from 'react';
import style from './css.module.css';
import NavBar from "./Navbar/NavBar";
import FriendsBar from "./FriendsBar/FriendsBar";
import {Route} from "react-router-dom";
import Settings from "./Navbar/Settings/Settings";
import {stateType} from "../../Redux/State";
import Logout from "./Navbar/Loggout/Loggout";
import Music from "./Music/Music";
import Video from "./Video/Video";
import Photo from "./Photo/Photo";
import MyPage from "./MyPage/MyPage";
import Dialogs from "./Dialogs/Dialogs";

type BodyType= {
    state:stateType
    AddPost:() => void
    ChangeNewPostText:(newPostText:string) => void
 }


function Body(props:BodyType) {
  // @ts-ignore
    return (
          <div className={style.Body} >
              <NavBar />
              <Route exact path='/' render={() => <MyPage BlogPage={props.state.MyPage.BlogPage}
                                                          AddPost={props.AddPost}
                                                          inputtext={props.state.MyPage.inputtext}
                                                          ChangeNewPostText={props.ChangeNewPostText}/> }/>
              <Route exact path='/Hotel_Number/' render={() => <MyPage BlogPage={props.state.MyPage.BlogPage}
                                                                       AddPost={props.AddPost}
                                                                       inputtext={props.state.MyPage.inputtext}
                                                                       ChangeNewPostText={props.ChangeNewPostText}/>}/>
              <Route path='/Dialogs/' render={() => <Dialogs
                  Friends_messagesData={props.state.DialogsPage.Friends_messagesData}
                  MessageData={props.state.DialogsPage.MessageData}
                  />}/>
              <Route path='/Settings' component={Settings}/>
              <Route path='/Logout' component={Logout}/>
              <Route  exact path='/Photo' component={Photo}/>
              <Route  exact path='/Music' component={Music}/>
              <Route  exact path='/Video' component={Video}/>
              <FriendsBar FriendsBarData={props.state.FriendsBarPage}/>


          </div>


)

}
export default Body;

