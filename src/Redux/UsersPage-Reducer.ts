import {getUsersPropsType, UsersApi} from "../Api/Api";
import {Dispatch} from "redux";

export type UserType ={
    name: string
    id: number
    uniqueUrlName?: string,
    photos:{
        small: string | null
        large: string | null
    }
    followed: boolean
    status?: string
    location?: userLocationType
}
export type userLocationType = {city:string,country:string}
export type stateUsersType= {
    users: Array<UserType>
    pagesCount: number
    currentPage: number
    maxUsersOnPage: number
    totalCountPages: number
    startPaginatorPages: number
    endPaginatorPages: number
    isLoadingStatus: boolean
    isFollowingStatus: Array<number>
}
let InizialitionState =
    {
        users: [],
        pagesCount: 0,
        currentPage: 1,
        maxUsersOnPage: 4,
        totalCountPages: 0,
        startPaginatorPages: 1,
        endPaginatorPages: 5,
        isLoadingStatus: false,
        isFollowingStatus: []
    }
export type UsersActionsType = followACType | unfollowACType
    | setUsersACType | setTotalCountACType | setCurrentPageACType | setLoadingStatusACType | setFollowingStatusACType
export function UsersPageReducer(state:stateUsersType = InizialitionState, action: UsersActionsType) {
    switch (action.type) {
        case "FOLLOW": {
            let stateCopy = {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            return stateCopy
        }
        case "UN-FOLLOW": {
            let stateCopy = {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
            return stateCopy
        }
        case "SET-USERS": {
            let stateCopy = {
                ...state,
                users: action.users
            }
            return stateCopy
        }
        case "SET-TOTAL-COUNT": {
            let stateCopy = {
                ...state,
                totalCountPages: action.totalCount
            }
            return stateCopy
        }
        case "SET-LOADING-STATUS": {
            let stateCopy = {
                ...state,
                isLoadingStatus: action.status
            }
            return stateCopy
        }
        case "SET-FOLLOWING-STATUS": {
            let stateCopy = {
                ...state,
                isFollowingStatus: action.status
                    ? [...state.isFollowingStatus,action.id]
                    : state.isFollowingStatus.filter(id => id != action.id)
            }
            return stateCopy
        }
        case "SET-CURRENT-PAGE": {
            let stateCopy = {...state}
            if(action.currentPage === stateCopy.endPaginatorPages)
            {
                stateCopy.startPaginatorPages = action.currentPage
                stateCopy.endPaginatorPages = action.currentPage + 4
                stateCopy.currentPage = action.currentPage
            }
            else if(action.currentPage === stateCopy.startPaginatorPages){
                if(action.currentPage - 4 > 0) {
                    stateCopy.startPaginatorPages = action.currentPage - 4
                    stateCopy.endPaginatorPages = action.currentPage
                }
            }
            else stateCopy.currentPage = action.currentPage
            return stateCopy
        }
        default:
            return  state

    }
}

// Thunks

export const getUsersTC = (data:getUsersPropsType) => (dispatch:Dispatch<UsersActionsType>) => {
    dispatch(setLoadingStatusAC(true))
    UsersApi.getUsers({page: data.page, count: data.count}).then(
        response => {
            dispatch(setUsersAC(response.data.items))
            dispatch(setTotalCountAC(response.data.totalCount))
            dispatch(setLoadingStatusAC(false))
        })
}
export const followUserTC = (id: number) => (dispatch:Dispatch<UsersActionsType>) => {
    dispatch(setFollowingStatusAC(true,id))
    UsersApi.followUser(id).then(
        response => {
            dispatch(followAC(id))
            dispatch(setFollowingStatusAC(false,id))
        })
}
export const unFollowUserTC = (id: number) => (dispatch:Dispatch<UsersActionsType>) => {
    dispatch(setFollowingStatusAC(true,id))
    UsersApi.unFollowUser(id).then(
        response => {
            dispatch(unfollowAC(id))
            dispatch(setFollowingStatusAC(false,id))
        })
}

// Action creators

export const setUsersAC = (users: Array<UserType>)=> ({type: "SET-USERS", users} as const)
export const followAC = (userid: number)=> ({type: "FOLLOW", userid} as const)
export const unfollowAC = (userid: number) => ({type: "UN-FOLLOW", userid} as const)
export const setTotalCountAC = (totalCount:number)=>({type: "SET-TOTAL-COUNT",totalCount} as const)
export const setCurrentPageAC = (currentPage:number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setLoadingStatusAC = (status:boolean)=> ({ type: "SET-LOADING-STATUS", status} as const)
export const setFollowingStatusAC = (status:boolean,id:number) => ({type:"SET-FOLLOWING-STATUS",status,id} as const)


// Type of AC

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setTotalCountACType = ReturnType<typeof setTotalCountAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setLoadingStatusACType = ReturnType<typeof setLoadingStatusAC>
export type setFollowingStatusACType = ReturnType<typeof setFollowingStatusAC>