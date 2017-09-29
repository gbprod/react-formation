import {SET_USERNAME_ACTION} from '../actions/settings'

const settings = (state = { username: 'me' }, action) => {
  switch (action.type) {
    case SET_USERNAME_ACTION:
      return {
        username: action.username
      }

    default:
      return state
  }
}

export default settings
