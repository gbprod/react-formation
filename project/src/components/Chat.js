import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageBar from "./MessageBar";
import {connect} from 'react-redux'
import {addMessage, getMessages} from '../actions/messages'

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
        <MessageBar onAddMessage={this.props.onAddMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages
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
