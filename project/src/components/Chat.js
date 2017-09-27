import React, {Component} from 'react';
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

class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }

    addMessage = (message) => {
        this.setState({
            messages: this.state.messages.concat({
                'username': 'gbprod',
                'message': message
            })
        });
    }

    render() {
        return (
            <div style={chatStyle}>
                <h1>Joli Chat</h1>
                <MessageList />
                <MessageBar addMessage={this.addMessage}/>
            </div>
        );
    }
}

export default Chat;
