import React, {Component} from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "messages": [
                {"username": "gbprod", "body": "Lorem Ipsum"},
                {"username": "gbprod 2", "body": "Lorem Ipsum 2"},
                {"username": "gbprod 3", "body": "Lorem Ipsum 3"},
                {"username": "gbprod 4", "body": "Lorem Ipsum 4"}
            ]
        }
    }

    render() {
        return (
            <ul>
                {
                    this.state.messages.map((message, i) => {
                        return <MessageItem key={i} username={message.username} body={message.body} />;
                    })
                }
            </ul>
        )
    }
}

export default MessageList;
