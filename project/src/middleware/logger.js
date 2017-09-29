const LoggerMiddleware = store => next => action => {
  console.log('action', action)
  let result = next(action)
  console.log('state', store.getState())

  return result
}


export default LoggerMiddleware
