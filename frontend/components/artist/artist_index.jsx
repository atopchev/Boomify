import React from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {

        let artists = 
            this.props.artists.map( (artist, idx) => 
                <ArtistIndexItem
                    artist={artist}
                    key={idx}
                    imgNum={idx+1}
                />
            );
            
        return (
            <div className="artist-idx-root">
                {artists}
            </div>
        );
    }

}


const msp = state => ({
    artists: Object.values(state.entities.artists)
});

const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(msp, mdp)(ArtistIndex);