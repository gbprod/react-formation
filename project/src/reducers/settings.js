import {SET_USERNAME_ACTION, SET_COLOR_ACTION} from '../actions/settings'

const settings = (state = { username: 'me', color: '#A2DED0' }, action) => {
  switch (action.type) {
    case SET_USERNAME_ACTION:
      return {...state, username: action.username}
    case SET_COLOR_ACTION:
      return {...state, color: action.color}

    default:
      return state
  }
}

export default settings
