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
            return merge({}, oldState, action.currentUser); //??
        case LOGOUT_CURRENT_USER:
            return merge({}, oldState, _nullSession); //?????
        default:
            return oldState;
    }
};


export default sessionReducer;