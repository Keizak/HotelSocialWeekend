import React from 'react';
import {connect} from "react-redux";
import {
    AddMessageActionCreator, AddMessageDialogPageActionType,
    ChangeMessageTextDialogPageActionType, DialogsPageType,
    UpdateMessageActionCreator
} from "../../../Redux/DialogsPage-Reducer";
import {AppRootStateType} from "../../../Redux/Redux-Store";
import {compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../HOCS/withAuthRedirect";

export type MapStatePropsTypeDilogs = {
    DialogsPage: DialogsPageType
}

export type MapDispatchPropsTypeDialogs = {
    UpdateMessageValue: (text: string) => void
    SentMessage: (text: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsTypeDilogs => {
    return {
        DialogsPage: state.DialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<AddMessageDialogPageActionType | ChangeMessageTextDialogPageActionType>) => {
    return {
        UpdateMessageValue: (text: string) => dispatch(UpdateMessageActionCreator(text)),
        SentMessage: (text: string) => dispatch(AddMessageActionCreator(text))
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs) as React.FC

