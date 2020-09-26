import React from 'react';
import style from './css.module.css';
import Posts from "./Posts/Blog";
import {MapDispatchPropsTypeMyPage, MapStatePropsTypeMyPage} from "./MyPageContainer";
import {Field,InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../../Utils/Validators/Validators";

export type LoginFormValuesType = {
  text:string
}
type functionsOfClassType = {
    activateEditMode: () => void
    deactivateEditMode: () => void
    EditMode:boolean
    status:string
    onStatusChange:(e:any) => void
}
export type MyPagePropsType = MapStatePropsTypeMyPage & MapDispatchPropsTypeMyPage & functionsOfClassType

const MyPage =(props:MyPagePropsType) => {
    let newpostElement: any = React.createRef();

    function SentPost(value:any) {
        props.AddPostAC(value.content)
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
                    <MessageReduxForm onSubmit={SentPost}/>

                </div>
            </div>


            <div className={style.wall}>
                <Posts posts={props.MyPage.posts}/>
            </div>
        </div>


    )

}
const MessageForm = (props:any) => {
return <form onSubmit={props.handleSubmit}>
    <div>
        <Field  placeholder="Input your messages"
                name="content"
                component="textarea"
                type="text"
                validate={[requiredField]}/>
        <button >Add Post</button>
    </div>
</form>

}
const MessageReduxForm = reduxForm({form: 'PostArea'})(MessageForm)
export default MyPage;

