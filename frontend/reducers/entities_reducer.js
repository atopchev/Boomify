import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PlaylistsReducer from './playlist_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    playlists: PlaylistsReducer
});

export default entitiesReducer;