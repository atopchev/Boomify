import * as SessionAPIUtils from '../utils/session_api';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER, 
});

//to use
const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS, 
    errors
});

export const login = user => dispatch => {
    SessionAPIUtils.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
};

export const logout = () => dispatch => {
    SessionAPIUtils.logout
        .then(() => dispatch(logoutCurrentUser()))
};

export const signup = (user) => dispatch => {
    SessionAPIUtils.signup(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
};