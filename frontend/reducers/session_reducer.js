import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const sessionReducer = (oldState = null, action) => {

    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.id;
        case LOGOUT_CURRENT_USER:
            return null; 
        default:
            return oldState;
    }
};


export default sessionReducer;