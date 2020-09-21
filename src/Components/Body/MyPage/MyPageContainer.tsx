import React from 'react';
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {
    AddPostAC,
    AddPostActionType,
    ChangeNewPostTextActionType,
    getProfileStatusTC,
    getProfileTC,
    SetLoadingAC,
    SetLoadingActionType,
    SetProfileAC,
    SetProfileActionType,
    SetProfileStatusAC,
    SetProfileStatusActionType,
    stateMyPageType,
    UpdatePostAC,
    updateProfileStatusTC,
} from "../../../Redux/MyPage-Reducer";
import {AppRootStateType} from "../../../Redux/Redux-Store";
import {UserType} from "../../../Redux/UsersPage-Reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOCS/withAuthRedirect";
import {compose} from "redux";


export type MapStatePropsTypeMyPage = {
    MyPage: stateMyPageType
}

export type MapDispatchPropsTypeMyPage = {
    AddPostAC: (text: string) => AddPostActionType
    UpdatePostAC: (text: string) => ChangeNewPostTextActionType
    SetProfileAC: (profile: UserType) => SetProfileActionType
    SetLoadingAC: (Loading: boolean) => SetLoadingActionType
    SetProfileStatusAC: (value: string) => SetProfileStatusActionType
    getProfileTC?: (id: number) => void
    updateProfileStatusTC?: (value: string) => void
    getProfileStatusTC?: (id: number) => void
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypeMyPage => {
    return {
        MyPage: state.MyPage,
    }
}

class ProfileContainer extends React.Component<any> {
    state = {
        editModeStatus: false,
        status: this.props.MyPage.ProfileStatus
    }

    componentDidMount(): void {
        let id
        if (!this.props.match.params.userId) {
            id = 9251
        } else {
            id = this.props.match.params.userId
        }
        this.props.getProfileStatusTC(id)
        this.props.getProfileTC(id)
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.MyPage.ProfileStatus !== this.props.MyPage.ProfileStatus){
            this.setState({status:this.props.MyPage.ProfileStatus})
        }
    }

    activateEditMode = () => {
        this.setState({
            editModeStatus: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editModeStatus: false
        })
        this.props.updateProfileStatusTC(this.state.status)
    }
    onStatusChange = (value:string) => {
        this.setState({
            status: value
        })
    }

    render() {
        let page
        if (this.props.MyPage.Loading) page = <div>Загрузка</div>
        else page = <MyPage AddPostAC={this.props.AddPostAC}
                            UpdatePostAC={this.props.UpdatePostAC}
                            SetLoadingAC={this.props.SetLoadingAC}
                            SetProfileAC={this.props.SetProfileAC}
                            MyPage={this.props.MyPage}
                            activateEditMode={this.activateEditMode}
                            deactivateEditMode={this.deactivateEditMode}
                            EditMode={this.state.editModeStatus}
                            SetProfileStatusAC={this.props.SetProfileStatusAC}
                            status={this.state.status}
                            onStatusChange={this.onStatusChange}/>
        return (page)
    }
}

export default compose(connect<MapStatePropsTypeMyPage, MapDispatchPropsTypeMyPage, {}, AppRootStateType>(
    mapStateToProps, {
        AddPostAC,
        UpdatePostAC,
        SetProfileAC,
        SetLoadingAC,
        SetProfileStatusAC,
        getProfileTC,
        getProfileStatusTC,
        updateProfileStatusTC
    }), withRouter, withAuthRedirect)(ProfileContainer) as React.FC


