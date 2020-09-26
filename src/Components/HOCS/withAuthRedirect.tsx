import {Redirect} from "react-router-dom";
import React from "react";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {connect} from "react-redux";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        isInitializate: state.auth.initializationApp,
        isLogin: state.auth.isLogin
    }
}
export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<any>{
        render(): React.ReactNode {
            if (this.props.isLogin === false && this.props.isInitializate === true){return <Redirect to={"/login"}/>}
                return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}