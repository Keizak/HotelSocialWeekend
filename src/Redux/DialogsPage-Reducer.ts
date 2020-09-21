import {FriendsItemType} from "../Components/Body/Dialogs/Friends_messages/FriendsItem/FriendsItem";
import {FullMessageType} from "../Components/Body/Dialogs/Mesagges_full/Mesagges_full";

export type DialogsPageType =
    {
        Friends_messagesData: Array<FriendsItemType>
        MessageData: Array<FullMessageType>
        EditNewMessageText: string
    }
export type AddMessageDialogPageActionType =
    {
        type: "ADD-MESSAGE"
        content: string
    }
export type  ChangeMessageTextDialogPageActionType =
    {
        type: "NEW-MESSAGE-TEXT"
        newMessageText: string
    }

type ActionsType = AddMessageDialogPageActionType | ChangeMessageTextDialogPageActionType

let InizialitionState =
    {
        Friends_messagesData: [
            {id: "1", name: "Дмитрий"},
            {id: "2", name: "Александр"},
            {id: "3", name: "Евгений"},
            {id: "4", name: "Марина"},
            {id: "5", name: "Ксюша"},
            {id: "6", name: "Михаил"},
        ],
        MessageData: [
            {id: "1", content: "Привет"},
            {id: "2", content: "Привет"},
            {id: "3", content: "Как дела"},
            {id: "4", content: "Нормально а у тебя ?"},
            {id: "5", content: "У меня все супер!"},
            {id: "6", content: "Ты лох"},
            {id: "7", content: "Сам ты лох"},],
        EditNewMessageText: ""
    }

export function DialogsPageReducer(state: DialogsPageType = InizialitionState, action: ActionsType) {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let stateCopy = {...state,
                MessageData:[...state.MessageData]}
            if (action.content === stateCopy.EditNewMessageText) {
                let newmessage = {id: "5", content: action.content}
                stateCopy.MessageData.push(newmessage)
                stateCopy.EditNewMessageText = ""
            }
            return stateCopy
        }
        case "NEW-MESSAGE-TEXT": {
            let stateCopy = {...state}
            stateCopy.EditNewMessageText = action.newMessageText
            return stateCopy
        }
        default:
            return state
    }
}

export function AddMessageActionCreator(content: string): AddMessageDialogPageActionType {
    return {type: "ADD-MESSAGE", content}
}

export function UpdateMessageActionCreator(newMessageText: string): ChangeMessageTextDialogPageActionType {

    return {type: "NEW-MESSAGE-TEXT", newMessageText}
}