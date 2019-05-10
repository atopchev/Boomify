import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';

const msp = state => ({
    playlists: Object.values(state.entities.playlists).slice(8, state.entities.playlists.length),
    location: "collection"
});

const mdp = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
});

export default connect(msp, mdp)(PlaylistIndex);