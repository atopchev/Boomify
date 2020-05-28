import { 
    RECEIVE_PLAYLIST,
    RECEIVE_PLAYLISTS,
    REMOVE_PLAYLIST
} from '../actions/playlist_actions';
import { merge } from 'lodash';

const playlistReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            return merge({}, oldState, action.playlist);
        case REMOVE_PLAYLIST:
            let newState = merge({}, oldState);
            delete newState[action.id];
            return newState;
        default:
            return oldState;
    }
}

export default playlistReducer;