import * as ArtistAPI from '../utils/artist_api_utils';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists
});

const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});



export const fetchArtists = () => dispatch => {
    return (ArtistAPI.fetchArtists().then(
        Artists => dispatch(receiveArtists(Artists))
    ));
};

export const fetchArtist = (artist) => dispatch => (
    ArtistAPI.fetchArtist(artist).then(
        Artist => dispatch(receiveArtist(Artist))
    )
);

