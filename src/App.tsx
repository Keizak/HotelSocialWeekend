import React from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {ChangeNewPostText, stateType} from "./Redux/State";

type AppType = {
    state:stateType,
    AddPost: () => void,
    ChangeNewPostText:(newPostText:string) => void
 }


function App(props:AppType) {
  return (
      <BrowserRouter>
      <div className={style.main}>
          <Header />
          <Body state={props.state}
                AddPost={props.AddPost}
                ChangeNewPostText={props.ChangeNewPostText}/>
          <Footer/>


      </div>
      </BrowserRouter>

)

}

export default App;
