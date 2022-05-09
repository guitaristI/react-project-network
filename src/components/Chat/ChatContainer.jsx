import React from "react";
import {addMessageAC, onMessageTextAC} from "../../redux/dialogs-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messageData: state.dialogsPage.messageData,
        selfMessageData: state.dialogsPage.selfMessageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        messageChange: (text) => {
            dispatch(onMessageTextAC(text))
        }
    }
}
const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;