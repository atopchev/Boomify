import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer
});

export default entitiesReducer;