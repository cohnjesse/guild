import React from 'react'
import './Messages.css'

const Messages = (props) => {
    return(
        <div className="messages">

          <ul className="message-list">
            {props.messageList.map((message) => {
                return (
                    <li key={message.id} className="message"><span className="message-sender">{message.sender}</span>{message.text}</li>
                )
            })}
          </ul>

          <form className="message-form">
            <input onInput={props.inputAlert} className="message-input" type="text" placeholder="enter your message"/>
            <button onClick={props.sendMessage} className="message-submit">Send</button>
          </form>
        </div>
    )
}

export default Messages;