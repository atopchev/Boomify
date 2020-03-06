import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

import TopNavLinks from '../coll_top_nav';
import PlaylistIndexCollectionContainer from '../playlist/playlist_index_collection_container';


class CollectionHome extends React.Component {

    render() {

        return (
            <div className="coll-home-root">
                <div className="anotha-wan">

                    <TopNavLinks />

                    <div className="new-playlist-div">
                        <button className="new-playlist-btn" onClick={this.props.openModal}>NEW PLAYLIST</button>
                    </div>

                    <br></br>
                    <PlaylistIndexCollectionContainer /> 

                </div>
            </div>
        )
    }
}


const mdp = dispatch => ({
    openModal: () => dispatch(openModal()),
});

export default connect(null, mdp)(CollectionHome);