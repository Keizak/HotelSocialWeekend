import React from 'react';
import style from './css.module.css';
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRootStateType} from "./Redux/Redux-Store";
import HeaderContainers from "./Components/Header/HeaderContainer";
import Login from "./Components/Body/Login/Login";


type AppType = {
    state: AppRootStateType
    dispatch: (action: any) => void
}


function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={style.main}>
                <HeaderContainers/>
                <Route  exact path='/Login' component={Login}/>
                <Route  exact path='/' render={() => <Body state={props.state} dispatch={props.dispatch}/>}/>
                <Footer/>
            </div>
        </BrowserRouter>

    )

}

export default App;
