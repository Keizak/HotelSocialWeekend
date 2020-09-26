import {Dispatch} from "redux";
import {AuthApi, LoginDataType} from "../Api/Api";
import {stopSubmit} from "redux-form";

export type AuthUserType = {
    id: number
    email: string
    login: string
}
type AuthStateType = {
    initializationApp: boolean
    userData: AuthUserType
    isLogin: boolean
}
let InitializationState = {
    initializationApp: false,
    isLogin: false,
    userData: {
        id: 0,
        email: '',
        login: ''
    }

}


export function AuthReduser(state: AuthStateType = InitializationState, action: ActionType) {
    switch (action.type) {
        case "SET-USER-DATA": {
            let stateCopy = {...state, ...state.userData}
            stateCopy.userData.email = action.data.email
            stateCopy.userData.id = action.data.id
            stateCopy.userData.login = action.data.login
            return stateCopy
        }
        case "SET-LOGIN": {
            let stateCopy = {
                ...state, isLogin: action.value
            }
            return stateCopy
        }
        case "SET-INITIALIZATION": {
            let stateCopy = {
                ...state, initializationApp: true
            }
            return stateCopy
        }

    }
    return state
}

type ActionType = setUserDataActionType | setLoginActionType | setInitializationActionType


// Thunks
export const authMeTC = () => (dispatch: Dispatch<ActionType>) => {
    AuthApi.getAuthMe().then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(response.data.data))
                dispatch(setLoginAC(true))
            } else {
                dispatch(setLoginAC(false))
            }
        })
}
export const goLoginTC = (data: LoginDataType) => (dispatch: Dispatch<any>) => {
    AuthApi.goLoginUser(data).then(
        response => {
            if (response.data.resultCode === 0) {
                AuthApi.getAuthMe().then(
                    response => {
                        if (response.data.resultCode === 0) {
                            dispatch(setUserDataAC(response.data.data))
                            dispatch(setLoginAC(true))
                        } else {
                            dispatch(setLoginAC(false))
                        }
                    })
            } else {
                let action = stopSubmit("login", {_error: "Email or password is wrong"})
                dispatch(action)
                dispatch(setLoginAC(false))
            }
        })
}
export const goLogoutTC = () => (dispatch: Dispatch<ActionType>) => {
    AuthApi.goLogoutUser().then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(setLoginAC(false))
            }
        })
}
export const initializeAppTC = () => (dispatch: any) => {
    let promise = dispatch(authMeTC());
    Promise.all([promise])
        .then(() => {
            dispatch(setLoginAC(true))
            dispatch(setInitializationAC());
        }).catch(() => {
        dispatch(setInitializationAC())
    })
}

// Action creators

export const setUserDataAC = (data: AuthUserType) => ({type: "SET-USER-DATA", data} as const)
export const setLoginAC = (value: boolean) => ({type: "SET-LOGIN", value} as const)
export const setInitializationAC = () => ({type: "SET-INITIALIZATION"} as const)


// Type of AC

type setUserDataActionType = ReturnType<typeof setUserDataAC>
type setLoginActionType = ReturnType<typeof setLoginAC>
type setInitializationActionType = ReturnType<typeof setInitializationAC>
