import * as AlbumAPI from '../utils/album_api_utils';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album
});

export const fetchAlbums = () => dispatch => {
    return (AlbumAPI.fetchAlbums().then(
        albums => dispatch(receiveAlbums(albums))
    ));
};

export const fetchAlbum = (album) => dispatch => (
    AlbumAPI.fetchAlbum(album).then(
        album => dispatch(receiveAlbum(album))
    )
);