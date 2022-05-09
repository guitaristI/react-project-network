import member_1 from "../img/member-1.png";
import member_2 from "../img/member-2.png";
import member_3 from "../img/member-3.png";
import member_4 from "../img/member-4.png";

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, avatar: member_1, name: 'Alison Mina', message: "I'll do it later"},
        {id: 2, avatar: member_2, name: 'Jackson Aston', message: "I bought a new car"},
        {id: 3, avatar: member_3, name: 'Samona Rose', message: "It's so beautiful"},
        {id: 4, avatar: member_4, name: 'John Doe', message: "Today is sunny"},
    ],
    messageData: [
        {id: 1, message: 'Today is sunny'},
        {id: 1, message: "It's good weather for this day"},
    ],
    selfMessageData: [
        {id: 1, message: 'When are you coming here?'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        return {
            ...state,
            selfMessageData: [...state.selfMessageData, {id: 2, message: state.newMessageText}],
            newMessageText: ''
        }

        case UPDATE_NEW_MESSAGE_TEXT:
        return {
            ...state,
            newMessageText: action.newText
        }

        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})
export const onMessageTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer