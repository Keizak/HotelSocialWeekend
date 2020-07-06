import React from 'react';
import style from './css.module.css';
import Posts from "./Posts/Blog";
import {
    ActionType,
    StoreType,
} from "../../../Redux/Store";
import {AddPostActionCreator, UpdatePostActionCreator} from "../../../Redux/MyPage-Reducer";

export type  MyPageType = {
    store: StoreType
    dispatch:(action: ActionType)=> void
}


function  MyPage(props:  MyPageType) {

    let newpostElement:any = React.createRef();

    function SentPost() {
        let newPostText = newpostElement.current.value
        let action = AddPostActionCreator(newPostText)
        props.dispatch(action)
    }

    function ChangePost() {
        let newPostText = newpostElement.current.value
        let action = UpdatePostActionCreator(newPostText)
        props.dispatch(action)
    }
    return (

        <div className={style.main_container}>
            <div className={style.workspace}>
                <div className={style.profile}>
                    <div className={style.photo}>Ava</div>
                    <div className={style.status}>Nastroenie</div>
                </div>
                <div className={style.edit_window}>
                    <input ref={newpostElement}
                           value={props.store._state.MyPage.EditPostText}
                           onChange={ChangePost}
                    />
                    <button onClick={SentPost}>Add Post</button>
                </div>
            </div>


            <div className={style.wall}>
                <Posts posts={props.store._state.MyPage.BlogPage.posts}/>
            </div>
        </div>




    )

}

export default  MyPage;

