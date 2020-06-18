import React from 'react';
import style from './css.module.css';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

type AppType = {

 }


function App(props:AppType) {
  return (
      <BrowserRouter>
      <div className={style.main}>
          <Header />
          <Body/>
          <Footer/>


      </div>
      </BrowserRouter>

)

}

export default App;
