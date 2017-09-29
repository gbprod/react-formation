import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageBar from "./MessageBar";
import {connect} from 'react-redux'
import {addMessage, getMessages} from '../actions/messages'
import {setUsername} from '../actions/settings'
import {Link} from 'react-router-dom'

const chatStyle = {borderRadius: 10, fontFamily: 'Montserrat', width: 400, backgroundColor: '#A2DED0', padding: 10, display: 'flex', flexDirection: 'column'};

class Chat extends Component {
  componentDidMount() {
    this.props.getMessages()
  }

  render() {
    return (
      <div style={chatStyle}>
        <div style={{paddingLeft: 10, paddingTop: 10, fontSize: 30}}>👅 Joli</div>
        <MessageList messages={this.props.messages} />
        <MessageBar onAddMessage={this.props.onAddMessage} username={this.props.settings.username} />
        <Link to="/settings">Settings</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (message, username) => {
      dispatch(addMessage(message, username))
    },
    getMessages: () => {
      dispatch(getMessages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
