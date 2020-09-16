import {Redirect} from "react-router-dom";
import React from "react";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {MapStatePropsTypeMyPage} from "../Body/MyPage/MyPageContainer";
import {connect} from "react-redux";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        isLogin: state.auth.isLogin
    }
}
export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<any>{
        render(): React.ReactNode {
            if (this.props.isLogin === false){return <Redirect to={"/login"}/>}
                return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}