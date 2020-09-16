import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/Redux-Store";
import {authMeTC, AuthReduser, setLoginAC, setUserDataAC} from "../../Redux/Auth-reduser";
import {AuthApi} from "../../Api/Api";

class HeaderContainer extends React.Component<any> {

    componentDidMount(): void {
        this.props.authMeTC()
    }

    render(): React.ReactNode {
        return (<Header data={this.props.AuthData.userData} isLogin={this.props.AuthData.isLogin}/>);
    }
}

const mapStatetoProps = (state: AppRootStateType) => (
    {
        AuthData: state.auth
    })
export default connect(mapStatetoProps, {setUserDataAC, setLoginAC,authMeTC})(HeaderContainer)