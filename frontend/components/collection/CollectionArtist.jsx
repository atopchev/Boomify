import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import TopNavLinks from '../coll_top_nav';
import ArtistIndex from '../artist/artist_index';


class CollectionArtist extends React.Component {

    render() {
        return (
            <div className="coll-home-root">
                <div className="anotha-wan">

                    <TopNavLinks />

                    <div className="new-playlist-div">
                        <button className="new-playlist-btn" onClick={this.props.openModal}>NEW PLAYLIST</button>
                    </div>

                    <br></br>
                    <ArtistIndex />

                </div>
            </div>
        )
    }
}


const mdp = dispatch => ({
    openModal: () => dispatch(openModal()),
});

export default connect(null, mdp)(CollectionArtist);