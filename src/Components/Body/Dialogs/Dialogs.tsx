import React from 'react';
import style from './css.module.css';
import {Route,Redirect} from "react-router-dom";
import Friends_messages from "./Friends_messages/Friends_messages"
import Messages from "./Mesagges_full/Mesagges_full";
import {MapDispatchPropsTypeDialogs, MapStatePropsTypeDilogs} from "./DialogsContainer";


type DiallogsPropsType = MapStatePropsTypeDilogs & MapDispatchPropsTypeDialogs


function Dialogs(props: DiallogsPropsType) {
    let newpostElement: any = React.createRef();

    function SentMessage() {
        props.SentMessage(newpostElement.current.value)

    }

    function UpdateMessageValue() {
        props.UpdateMessageValue(newpostElement.current.value)
    }

    return (
        <div className={style.Container}>

            <div className={style.Friend}>
                <Friends_messages FullFriends_messagesData={props.DialogsPage.Friends_messagesData}/>
            </div>
            <div className={style.MessagesPage}>
                <div className={style.Messages}>
                    <Route exact path='/Dialogs/'
                           render={() => <Messages fullMessageData={props.DialogsPage.MessageData}/>}/>
                    <Route exact path='/Dialogs/1'
                           render={() => <Messages fullMessageData={props.DialogsPage.MessageData}/>}/>
                    <Route exact path='/Dialogs/2'
                           render={() => <Messages fullMessageData={props.DialogsPage.MessageData}/>}/>
                    <Route exact path='/Dialogs/3'
                           render={() => <Messages fullMessageData={props.DialogsPage.MessageData}/>}/>
                    <Route exact path='/Dialogs/4'
                           render={() => <Messages fullMessageData={props.DialogsPage.MessageData}/>}/>
                </div>
                <div className={style.MessagesEdit}>
                    <input ref={newpostElement} onChange={UpdateMessageValue}
                           value={props.DialogsPage.EditNewMessageText}></input>
                    <button onClick={SentMessage}>Отправить</button>
                </div>
            </div>

        </div>

    )

}

export default Dialogs;

