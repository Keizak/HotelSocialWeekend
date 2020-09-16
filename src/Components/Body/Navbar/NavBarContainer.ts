import {AppRootStateType} from "../../../Redux/Redux-Store";
import {connect} from "react-redux";
import NavBar from "./NavBar";

export type MapStatePropsType = {
    UserId:number
}

export type MapDispatchPropsType = {
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        UserId: state.auth.userData.id
    }
}



export default connect(mapStateToProps, {})(NavBar);