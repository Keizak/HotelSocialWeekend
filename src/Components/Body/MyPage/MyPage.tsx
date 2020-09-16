import React from 'react';
import style from './css.module.css';
import Posts from "./Posts/Blog";
import {MapDispatchPropsTypeMyPage, MapStatePropsTypeMyPage} from "./MyPageContainer";
import {SetProfileStatusAC} from "../../../Redux/MyPage-Reducer";


type functionsOfClassType = {
    activateEditMode: () => void
    deactivateEditMode: () => void
    EditMode:boolean
    status:string
    onStatusChange:(e:any) => void
}
export type MyPagePropsType = MapStatePropsTypeMyPage & MapDispatchPropsTypeMyPage & functionsOfClassType

function MyPage(props: MyPagePropsType) {
    let newpostElement: any = React.createRef();

    function SentPost() {
        props.AddPostAC(newpostElement.current.value)
    }

    function ChangePost() {
        props.UpdatePostAC(newpostElement.current.value)
    }
    let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOBRsjz99XaRHYR0HqqRtWBJM9y-k6wMJEfQ&usqp=CAU"
    let photo
    if (props.MyPage.profile?.photos.small === null && props.MyPage.profile?.photos.large === null) {
        photo = ava
    } else {
        if (props.MyPage.profile?.photos.large !== null) {
            photo = props.MyPage.profile?.photos.large
        } else if (props.MyPage.profile?.photos.small !== null) {
            photo = props.MyPage.profile?.photos.small
        }
    }
    function ChangeStatus(e:any) {
        props.onStatusChange(e.currentTarget.value)
    }
    return (
        // {props.MyPage.profile?.aboutMe}
        <div className={style.main_container}>
            <div className={style.workspace}>
                <div className={style.profile}>
                    <div className={style.photo}><img src={photo}/></div>
                    <div className={style.status}><h4>{props.MyPage.profile?.fullName}</h4></div>
                    {props.EditMode
                        ? <input onBlur={props.deactivateEditMode} className={style.status} autoFocus={true} value={props.status} onChange={ChangeStatus}></input>
                        : <span onDoubleClick={props.activateEditMode} className={style.status}>{props.MyPage.ProfileStatus}</span> }
                </div>
                <div className={style.edit_window}>
                    <input ref={newpostElement}
                           value={props.MyPage.EditPostText}
                           onChange={ChangePost}
                    />
                    <button onClick={SentPost}>Add Post</button>
                </div>
            </div>


            <div className={style.wall}>
                <Posts posts={props.MyPage.posts}/>
            </div>
        </div>


    )

}

export default MyPage;

