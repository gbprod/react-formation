import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({username, body}) => {
    return (
        <li style={{ backgroundColor: "white" }}>
            <dl>
                <dd>@{username}</dd>
                <dt>{body}</dt>
            </dl>
        </li>
    )
}

MessageItem.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

 export default MessageItem;
