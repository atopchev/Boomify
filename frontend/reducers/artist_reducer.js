import {
    RECEIVE_ARTIST,
    RECEIVE_ARTISTS
} from '../actions/artist_actions';
import { merge } from 'lodash';

const artistReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return merge({}, oldState, { [action.artist.id]: action.artist });
        default:
            return oldState;
    }
};

export default artistReducer;