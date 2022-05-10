
import icons8 from "../../img/icons8-многоточие-30 (1).png";
import member_4 from "../../img/member-4.png";
import send_message from '../../img/send-message.png'
import left_chevron from '../../img/left-chevron.png'
import React from "react";
import Message from "./Message";
import SelfMessage from "./selfMessage";
import { NavLink } from "react-router-dom"



const Chat = (props) => {

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.messageChange(text);
    }



    return (
        <div className='chat'>
            <div className="chat-container">
                <div className="chat-top">
                    <NavLink to='/dialogs'>
                        <img className='chat-back-btn' src={left_chevron} alt=""/>
                        Back
                    </NavLink>
                    <div className="chat-user">
                        John Doe
                    </div>
                    <div className="chat-info">
                        <img className='chat-ellipsis' src={icons8} alt=""/>
                        <img className='chat-image' src={member_4} alt=""/>
                    </div>
                </div>
                <div className="chat-content">
                    <div className="chat-content__item">
                        <div className='item-chat'>
                            {props.messageData.map(a => <Message key={a.id} id={a.id} message={a.message} />)}
                        </div>
                        <div className='item-self'>
                            {props.selfMessageData.map(a => <SelfMessage key={a.id} id={a.id} message={a.message} />)}
                        </div>

                    </div>
                </div>
                <div className="chat-bottom">
                    <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} rows="2" placeholder="Write a message..."></textarea>
                    <a onClick={onAddMessage} href="#"><img src={send_message} alt=""/></a>
                </div>
            </div>

        </div>
    )
}

export default Chat;