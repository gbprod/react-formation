import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';

const chatStyle = {
    borberRadius: 10,
    fontFamily: "Monerrat",
    width: 400,
    backgroundColor: "#A2DED0",
    padding: 10,
    display: "flex",
    flexDirection: 'column'
};

const Chat = () => {
    return (
        <div style={chatStyle}>
            <h1>Joli Chat</h1>
            <MessageList />
            <MessageBar />
        </div>
    )
}

export default Chat;
