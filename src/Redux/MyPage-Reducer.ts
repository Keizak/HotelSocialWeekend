import {PostType} from "../Components/Body/MyPage/Posts/Post/Blog";
import {UserType} from "./UsersPage-Reducer";
import {Dispatch} from "redux";
import {ProfileApi, UsersApi} from "../Api/Api";


export type ProfileType =
    {
        aboutMe: string,
        contacts: {
            facebook: null | string
            website: null | string
            vk: null | string
            twitter: null | string
            instagram: null | string
            youtube: null | string
            github: null | string
            mainLink: null | string
        },
        lookingForAJob: boolean
        lookingForAJobDescription: null | string
        fullName: null | string
        userId: number
        photos: {
            small: null | string,
            large: null | string
        }
    }

export type ActionType =
    AddPostActionType | ChangeNewPostTextActionType | SetProfileActionType | SetLoadingActionType |
    SetProfileStatusActionType

let InizialitionState: any =
    {
        posts: [
            {id: "1", content: "1 пост"},
            {id: "2", content: "2 пост"},
            {id: "3", content: "3 пост"},
            {id: "4", content: "4 пост"}
        ],
        EditPostText: "",
        profile:null,
        Loading: false,
        ProfileStatus:""
    }

export type stateMyPageType =
    {
        posts: Array<PostType>
        EditPostText: string
        profile: ProfileType | null
        Loading:boolean
        ProfileStatus:string
    }

function MyPageReduser(state: stateMyPageType = InizialitionState, action: ActionType) {
    switch (action.type) {
        case "ADD-POST": {
            let copyState = {
                ...state,
                posts: [...state.posts]
            }
            if (action.content === copyState.EditPostText) {
                let newpost = {id: "5", content: copyState.EditPostText}
                copyState.posts.push(newpost)
                copyState.EditPostText = ""
            }
            return copyState
        }
        case "NEW-POST-TEXT": {
            let copyState = {...state}
            copyState.EditPostText = action.newPostText
            return copyState
        }
        case "SET-PROFILE": {
            let copyState = {
                ...state,
                profile: action.profile
            }
            return copyState
        }
        case "SET-LOADING": {
            let copyState = {
                ...state,
                Loading: action.Loading
            }
            return copyState
        }
        case "SET-PROFILE-STATUS": {
            let copyState = {...state,ProfileStatus:action.value}
            return copyState
        }

        default:
            return state
    }
}
// Thunks

export const getProfileTC = (id: number) => (dispatch:Dispatch<ActionType>) => {
    dispatch(SetLoadingAC(true))
    ProfileApi.getProfile(id).then(
        response => {
            dispatch(SetProfileAC(response.data))
            dispatch(SetLoadingAC(false))
        })
}
export const getProfileStatusTC = (id: number) => (dispatch:Dispatch<ActionType>) => {
    dispatch(SetLoadingAC(true))
    ProfileApi.getProfileStatus(id).then(
        response => {
            dispatch(SetProfileStatusAC(response.data))
            dispatch(SetLoadingAC(false))
        })
}
export const updateProfileStatusTC = (value: string) => (dispatch:Dispatch<ActionType>) => {
    dispatch(SetLoadingAC(true))
    ProfileApi.updateProfileStatus(value).then(
        response => {
            dispatch(SetProfileStatusAC(value))
            dispatch(SetLoadingAC(false))
        })
}


// Action creators

export const AddPostAC = (content: string) => ({type: "ADD-POST", content} as const )
export const SetProfileAC = (profile:UserType) => ({type: "SET-PROFILE", profile}  as const )
export const UpdatePostAC = (newPostText: string) => ({type: "NEW-POST-TEXT", newPostText}  as const )
export const SetLoadingAC = (Loading: boolean) => ({type: "SET-LOADING", Loading}  as const )
export const SetProfileStatusAC = (value:string) => ({type: "SET-PROFILE-STATUS", value}  as const )

// Type of AC

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type ChangeNewPostTextActionType = ReturnType<typeof UpdatePostAC>
export type SetProfileActionType = ReturnType<typeof SetProfileAC>
export type SetLoadingActionType = ReturnType<typeof SetLoadingAC>
export type SetProfileStatusActionType = ReturnType<typeof SetProfileStatusAC>

export default MyPageReduser;
