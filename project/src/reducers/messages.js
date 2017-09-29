import {ADD_MESSAGE_ACTION, LOAD_MESSAGES_PENDING_ACTION, LOAD_MESSAGES_SUCCESS_ACTION, LOAD_MESSAGES_ERROR_ACTION} from '../actions/messages'

const messages = (state = { messages: [] }, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return {
        messages: [ ...state.messages, { username: action.username, text: action.body } ]
      }

    case LOAD_MESSAGES_SUCCESS_ACTION:
        return {
            messages: action.json.messages
        }
    default:
      return state
  }
}

export default messages
