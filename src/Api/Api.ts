import axios from "axios"


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {"API-KEY": "3edc3ea3-235f-4e1e-ab08-90811999571a"},
    withCredentials: true,
})

export const AuthApi = {
    getAuthMe() {
        const promise = instance.get(`/auth/me` );
        return promise;
    },
    goLoginUser(props:LoginDataType){
        const promise = instance.post(`/auth/login`,{email:props.email,password:props.password,rememberMe:props.rememberMe,captcha:props.captcha});
        return promise;
    }
}

export const UsersApi = {
    getUsers(props:getUsersPropsType) {
        const promise = instance.get(`/users?page=${props.page}&count=${props.count}&term=${props.term ? props.term : ""}&friend=${props.friend ? props.friend : null}` );
        return promise;
    },
    followUser(userId:number){
        const promise = instance.post(`/follow/${userId}` );
        return promise;
    },
    unFollowUser(userId:number){
        const promise = instance.delete(`/follow/${userId}` );
        return promise;
    },

}
export const ProfileApi = {
    getProfile(id:number) {
        const promise = instance.get(`/profile/${id}`);
        return promise;
    },
    getProfileStatus(id:number){
        const promise = instance.get(`/profile/status/${id}`);
        return promise;
    },
    updateProfileStatus(value:string){
        const promise = instance.put(`/profile/status`, {status:value});
        return promise;
    }
}

export type getUsersPropsType = {
    count: number
    page?: number
    term?:string
    friend?: boolean
}
export type LoginDataType= {
    email: string
    password: string
    rememberMe?:boolean
    captcha?: boolean

}