export const SET_USERNAME_ACTION = 'SET_USERNAME';
export const SET_COLOR_ACTION = 'SET_COLOR';

export const setUsername = (username) => {
    return {
        type: SET_USERNAME_ACTION,
        username: username
    }
}

export const setColor = (color) => {
    return {
        type: SET_COLOR_ACTION,
        color: color
    }
}
