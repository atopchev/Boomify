import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PlaylistsReducer from './playlist_reducer';
import AlbumsReducer from './album_reducer';
import ArtistReducer from './artist_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    playlists: PlaylistsReducer,
    albums: AlbumsReducer,
    artists: ArtistReducer
});

export default entitiesReducer;