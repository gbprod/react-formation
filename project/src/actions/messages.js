export const ADD_MESSAGE_ACTION = 'ADD_MESSAGE';

export const LOAD_MESSAGES_PENDING_ACTION = 'LOAD_MESSAGES_PENDING';
export const LOAD_MESSAGES_SUCCESS_ACTION = 'LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_ERROR_ACTION = 'LOAD_MESSAGES_ERROR';

export const addMessage = (message, username) => {
    return {
        type: ADD_MESSAGE_ACTION,
        body: message,
        username: username
    }
}

export const getMessages = () => {
    return (dispatch) => {
        dispatch({type: LOAD_MESSAGES_PENDING_ACTION});

        return fetch('http://www.mocky.io/v2/59cdf6c6110000e502cccc6f')
            .then(response => response.json())
            .then(json => dispatch({ type: LOAD_MESSAGES_SUCCESS_ACTION, 'json': json }))
            .catch(dispatch({ type: LOAD_MESSAGES_ERROR_ACTION }))
    }
}
