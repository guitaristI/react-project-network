

const Message = (props) => {
    return (
        <div>
            <div className="chat-content__message">
                {props.message}
            </div>
        </div>

    )
}

export default Message;