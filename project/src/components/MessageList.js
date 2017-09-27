import React from 'react';
import MessageItem from './MessageItem';

const MessageList = () => {
    return (
        <ul>
            <MessageItem username="gbprod" message="Lorem Ipsum" />
            <MessageItem username="gbprod 2" message="Lorem Ipsum 2" />
            <MessageItem username="gbprod 3" message="Lorem Ipsum 3" />
            <MessageItem username="gbprod 4" message="Lorem Ipsum 4" />
        </ul>
    )
}

export default MessageList;
