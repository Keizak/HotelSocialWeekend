import React from 'react';
import style from './css.module.css';
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import {AppRootStateType} from "./Redux/Redux-Store";
import HeaderContainers from "./Components/Header/HeaderContainer";
import Login from "./Components/Body/Login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./Redux/Auth-reduser";

type MapPropsType = {
    initialize:boolean
}
type DispatchPropsType = {
    initializeAppTC: () => void
}
class App extends React.Component<MapPropsType & DispatchPropsType> {
    componentDidMount(): void {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialize) {
            return <div>Loading</div>
        }
        return (

                <div className={style.main}>
                    <HeaderContainers/>
                    <Switch>
                        <Route exact path='/Login' component={Login}/>
                        <Route path='/' render={() => <Body/>}/>
                    </Switch>
                    <Footer/>
                </div>

        )

    }
}
const mapStateToProps = (state:AppRootStateType) => ({
    initialize: state.auth.initializationApp
})

export default connect(mapStateToProps, {initializeAppTC})(App);
