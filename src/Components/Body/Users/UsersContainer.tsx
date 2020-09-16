import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../../Redux/Redux-Store";
import Users from "./Users";
import {
    followAC,
    followACType,
    followUserTC,
    getUsersTC,
    setCurrentPageAC,
    setCurrentPageACType,
    setFollowingStatusAC,
    setFollowingStatusACType,
    setLoadingStatusAC,
    setLoadingStatusACType,
    setTotalCountAC,
    setTotalCountACType,
    setUsersAC,
    setUsersACType,
    stateUsersType,
    unfollowAC,
    unfollowACType,
    unFollowUserTC,
    UserType
} from "../../../Redux/UsersPage-Reducer";
import {getUsersPropsType} from "../../../Api/Api";
import {withAuthRedirect} from "../../HOCS/withAuthRedirect";
import {compose} from "redux";


export type MapStatePropsTypeUsers = {
    UserPage: stateUsersType
    pagesCount: number,
    currentPage: number,
    maxUsersOnPage: number,
    totalCountPages: number,
    isLoadingStatus: boolean,
    startPaginatorPages: number,
    endPaginatorPages: number,
    isFollowingStatus: Array<number>

}
export type MapDispatchPropsTypeUsers = {
    followAC: (userid: number) => followACType
    unfollowAC: (userid: number) => unfollowACType
    setUsersAC: (users: Array<UserType>) => setUsersACType
    setTotalCountAC: (totalCount: number) => setTotalCountACType
    setCurrentPageAC: (pageNumber: number) => setCurrentPageACType
    setLoadingStatusAC: (status: boolean) => setLoadingStatusACType
    setFollowingStatusAC: (status: boolean, id: number) => setFollowingStatusACType
    getUsersTC: (data: getUsersPropsType) => void
    followUserTC: (id: number) => void
    unFollowUserTC: (id: number) => void
}


class UserAPI extends React.Component<MapStatePropsTypeUsers & MapDispatchPropsTypeUsers> {

    componentDidMount(): void {
        this.props.getUsersTC({page: this.props.currentPage, count: this.props.maxUsersOnPage})
    }

    setPage = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber)
        this.props.getUsersTC({page: pageNumber, count: this.props.maxUsersOnPage})
    }

    followUser = (userId: number) => {
        this.props.followUserTC(userId)
    }
    unFollowUser = (userId: number) => {
        this.props.unFollowUserTC(userId)
    }

    render() {
        return (<Users UserPage={this.props.UserPage}
                       follow={this.followUser}
                       unfollow={this.unFollowUser}
                       setUsers={this.props.setUsersAC}
                       currentPage={this.props.currentPage}
                       maxUsersOnPage={this.props.maxUsersOnPage}
                       pagesCount={this.props.pagesCount}
                       totalCountPages={this.props.totalCountPages}
                       setPage={this.setPage}
                       isLoadingStatus={this.props.isLoadingStatus}
                       endPaginatorPages={this.props.endPaginatorPages}
                       startPaginatorPages={this.props.startPaginatorPages}
                       isFollowingStatus={this.props.isFollowingStatus}
        />)
    };
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypeUsers => {
    return {
        UserPage: state.UserPage,
        pagesCount: state.UserPage.pagesCount,
        currentPage: state.UserPage.currentPage,
        maxUsersOnPage: state.UserPage.maxUsersOnPage,
        totalCountPages: state.UserPage.totalCountPages,
        isLoadingStatus: state.UserPage.isLoadingStatus,
        startPaginatorPages: state.UserPage.startPaginatorPages,
        endPaginatorPages: state.UserPage.endPaginatorPages,
        isFollowingStatus: state.UserPage.isFollowingStatus,
    }
}

export default compose(connect<MapStatePropsTypeUsers, MapDispatchPropsTypeUsers, {}, AppRootStateType>(mapStateToProps,
    {
        followAC, unfollowAC, setUsersAC,
        setTotalCountAC, setLoadingStatusAC, setCurrentPageAC,
        setFollowingStatusAC, getUsersTC, followUserTC,
        unFollowUserTC
    }),withAuthRedirect)(UserAPI) as React.FC


