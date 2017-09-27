import React, {Component} from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.messages.map((message, i) => {
                        return <MessageItem key={i} username={message.username} body={message.body} />;
                    })
                }
            </ul>
        )
    }
}

export default MessageList;
