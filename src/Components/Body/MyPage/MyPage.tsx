import React from 'react';
import style from './css.module.css';
import Posts, {PostsType} from "./Posts/Blog";

export type  MyPageType = {
    BlogPage: PostsType
    inputtext:string
    AddPost:() => void
    ChangeNewPostText:(newPostText:string) => void
}


function  MyPage(props:  MyPageType) {

    let newpostElement:any = React.createRef();

    function SentPost() {
        props.AddPost()
    }

    function ChangePost() {
        let newposttext = newpostElement.current.value
        props.ChangeNewPostText(newposttext)
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
                           value={props.inputtext}
                           onChange={ChangePost}
                    />
                    <button onClick={props.AddPost}>Add Post</button>
                </div>
            </div>


            <div className={style.wall}>
                <Posts posts={props.BlogPage.posts}/>
            </div>
        </div>




    )

}

export default  MyPage;

