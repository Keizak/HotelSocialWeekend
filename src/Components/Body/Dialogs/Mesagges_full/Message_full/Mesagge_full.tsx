import React from 'react';
import style from './css.module.css';

type Message_fullType = {
    id:string
    content: string
    ava?: string
}


function Message(props: Message_fullType) {
    return (
        <div className={style.mesagge}>
            <div className={style.ava}>{props.ava}</div>
            <div className={style.content}>{props.content}</div>
        </div>

    )

}

export default Message;

