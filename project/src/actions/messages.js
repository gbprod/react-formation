export const addMessage = (message, username) => {
    return {
        type: 'ADD_MESSAGE',
        body: message,
        username: username
    }
}
