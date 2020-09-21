import React from 'react';
import style from './css.module.css';
import DialogItem_full, {FriendsItemType} from "./FriendsItem/FriendsItem"

export type Friends_messagesType = {
    FullFriends_messagesData: Array<FriendsItemType>
}

function Friends_messages(props: Friends_messagesType) {
    let Friends_messages_draw = props.FullFriends_messagesData.map(
        (fr) => {
            return  <DialogItem_full name={fr.name} id={fr.id}/>
        }
    )
    return (
        <div className={style.Container}>
            {Friends_messages_draw}
        </div>

    )

}

export default Friends_messages;