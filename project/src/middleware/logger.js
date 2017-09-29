const LoggerMiddleware = store => next => action => {
  console.log('action', action)
  next(action)
  console.log('state', store.getState())
}


export default LoggerMiddleware
