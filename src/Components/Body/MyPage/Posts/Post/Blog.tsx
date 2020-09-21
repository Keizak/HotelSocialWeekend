import React from 'react';

export type PostType = {
    id:string
    content:string
}


function Post(props: PostType) {
    return (
        <div>{props.content}</div>

    )

}

export default Post;