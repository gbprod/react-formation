const messages = (state = { messages: [] }, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: [ ...state.messages, { username: action.username, text: action.body } ]
      }
    default:
      return state
  }
}

export default messages
