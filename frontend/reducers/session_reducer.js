import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash';


const _nullSession = {
    currentUser: null,
    errors: []
};

const sessionReducer = (oldState = _nullSession, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.merge({}, oldState, action.currentUser); //??
        case LOGOUT_CURRENT_USER:
            return Object.merge({}, oldState, _nullSession); //????bugs??
        default:
            return oldState;
    }
};


export default sessionReducer;