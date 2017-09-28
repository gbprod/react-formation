import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({message}) => {
  return (
    <li style={{ marginBottom: 10, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
      <small>@{message.username}</small>
      <div>{message.body}</div>
    </li>
  );
}

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageItem;
