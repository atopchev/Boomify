import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions'
import PlaylistIndexItem from '../playlist/playlist_index_item';

class AlbumIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        let images = 1;
        const myAlbums = this.props.albums.map( (album, idx) => 
            <PlaylistIndexItem
                key={idx}
                playlist={album}
                imgNum={images++}
                location="collection"
            /> 
        )

        return (
            <div className="playlist-idx-div">
                {myAlbums}
            </div>

        );
    }

}


const msp = ({ entities }) => ({
    albums: Object.values(entities.albums)
});

const mdp = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(msp, mdp)(AlbumIndex);