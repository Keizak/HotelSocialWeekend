import {Dispatch} from "redux";
import {AuthApi, LoginDataType, UsersApi} from "../Api/Api";
import {setFollowingStatusAC, unfollowAC, UsersActionsType} from "./UsersPage-Reducer";

export type AuthUserType = {
        id: number
        email: string
        login: string
}
type AuthStateType = {
    userData:AuthUserType
    isLogin: boolean
}
let InizialitionState = {
    isLogin:false,
    userData:{
        id: 0,
        email: '',
        login: ''
    }

}


export function AuthReduser(state:AuthStateType = InizialitionState, action: ActionType) {
    switch (action.type) {
        case "SET-USER-DATA": {
            let stateCopy = {...state,...state.userData}
            stateCopy.userData.email = action.data.email
            stateCopy.userData.id = action.data.id
            stateCopy.userData.login = action.data.login
            return stateCopy
        }
        case "SET-LOGIN": {
            let stateCopy = {
                ...state,isLogin: action.value}
            return stateCopy
        }

    }
    return state
}
type ActionType = setUserDataActionType | setLoginActionType


// Thunks
export const authMeTC = () => (dispatch:Dispatch<ActionType>) => {
    AuthApi.getAuthMe().then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(response.data.data))
                dispatch(setLoginAC(true))
            }
            else {
                dispatch(setLoginAC(false))
            }
        })
}
export const goLoginTC = (data:LoginDataType) => (dispatch:Dispatch<ActionType>) => {
    AuthApi.goLoginUser(data).then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(response.data.data))
                dispatch(setLoginAC(true))
            }
            else {
                dispatch(setLoginAC(false))
            }
        })
}


// Action creators

export const setUserDataAC = (data:AuthUserType) => ({type: "SET-USER-DATA", data} as const)
export const setLoginAC = (value:boolean) => ({type: "SET-LOGIN", value} as const)


// Type of AC

type setUserDataActionType = ReturnType<typeof setUserDataAC>
type setLoginActionType = ReturnType<typeof setLoginAC>
