import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';


const ChatScreen = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
        
        }
    ])
    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, {message: input}]);
        setInput('')
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You Matched with Ellen</p>
            {messages.map((message )=> 
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatSceen__text">{message.message} </p>
                </div>  
                ) : (
                <div className="chatScreen__message">
                    <p className="chatSceen__textUser">{message.message}</p>
                </div>  
            )
            )
        }   
       
            <form className="chatScreen__input">
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatScreen_inputField"
                 placeholder="Type a message" type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
            </form>
           
        
        </div>
 );
}

export default ChatScreen;