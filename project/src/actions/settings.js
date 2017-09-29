export const SET_USERNAME_ACTION = 'SET_USERNAME';

export const setUsername = (username) => {
    return {
        type: SET_USERNAME_ACTION,
        username: username
    }
}

