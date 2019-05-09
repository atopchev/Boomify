import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';


class PlaylistIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPlaylists();
    }

    render() {
        let playlists = this.props.playlists.map( (playlist, idx) =>
                <PlaylistIndexItem key={idx} playlist={playlist} /> 
            );
            
        return (
            <div className="playlist-idx-div"> 
                {playlists}
            </div>
        )
    }
};


const msp = state => ({
    playlists: Object.values(state.entities.playlists)
});

const mdp = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
});

export default connect(msp, mdp)(PlaylistIndex);