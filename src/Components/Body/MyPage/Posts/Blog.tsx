import React from 'react';
import Post, {PostType} from "./Post/Blog";

export type PostsType = {
    posts:Array<PostType>

}


function Posts(props: PostsType) {
    let postsDraw = props.posts.map((p) => {
        return <Post content={p.content} id={p.id}/>
    })
    return (
        <div>
            {postsDraw}
        </div>

    )

}

export default Posts;


