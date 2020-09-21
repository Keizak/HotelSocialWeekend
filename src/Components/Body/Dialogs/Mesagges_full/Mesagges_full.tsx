import React from 'react';
import style from './css.module.css';
import Message from "./Message_full/Mesagge_full";

export type FullMessage_DataType = {
    fullMessageData: Array<FullMessageType>
}

export type FullMessageType = {
    id: string
    content: string
}

function Messages(props: FullMessage_DataType) {
    let MessagesDraw = props.fullMessageData.map((m) => {
        return <Message id={m.id} content={m.content}/>
    })
    return (
        <div className={style.Container}>
            <div>
                {MessagesDraw}
            </div>
        </div>

    )

}

export default Messages;