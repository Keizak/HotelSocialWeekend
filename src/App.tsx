import React from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {ActionType, StoreType} from "./Redux/Store";

type AppType = {
    store: StoreType
    dispatch:(action: ActionType)=> void
 }


function App(props:AppType) {
  return (
      <BrowserRouter>
      <div className={style.main}>
          <Header />
          <Body store={props.store} dispatch={props.dispatch}/>
          <Footer/>


      </div>
      </BrowserRouter>

)

}

export default App;
