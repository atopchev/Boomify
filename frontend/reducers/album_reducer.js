import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';
import { merge } from 'lodash';

const albumReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    
    switch (action.type) {
        
        case RECEIVE_ALBUMS:
            return action.albums;
        case RECEIVE_ALBUM:
            return merge({}, oldState, { [action.album.id]: action.album });
        default:
            return oldState;
    }
}

export default albumReducer;