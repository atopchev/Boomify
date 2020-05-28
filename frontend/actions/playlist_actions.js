import * as PlaylistAPI from '../utils/playlist_api_utils';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

const removePlaylist = id => ({
    type: REMOVE_PLAYLIST,
    id
});

export const fetchPlaylists = () => dispatch => (
    PlaylistAPI.fetchPlaylists().then(
        playlists => dispatch(receivePlaylists(playlists))
    )
);

export const fetchPlaylist = (id) => dispatch => (
    PlaylistAPI.fetchPlaylist(id).then(
        playlist => dispatch(receivePlaylist(playlist))
    )
);

export const deletePlaylist = (id) => dispatch => (
    PlaylistAPI.deletePlaylist(id).then(
        id => dispatch(removePlaylist(id))
    )
);
