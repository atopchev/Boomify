import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import merge from 'lodash';

const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState);
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;