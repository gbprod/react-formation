import { combineReducers } from 'redux'
import messages from './messages'
import settings from './settings'

const reducers = combineReducers({
  messages, settings
})

export default reducers
