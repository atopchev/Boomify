import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

import PlaylistIndexCollectionContainer from '../playlist/playlist_index_collection_container';


class CollectionHome extends React.Component {
// CHANGE THIS COMPONENT. RIGHT NOW YOU ARE RENDING THIS , DRY UP CODE BY PUTTING THE TOP NAV LINKS FOR COLLECTION IN THEIR OWN FUNCITONAL COMPONENT
// AND THEN RENDER THAT FUNCTIONAL COMPONENT AT THE TOP OF THE PlaylistIndexCollectionContainer & ALL OTHER COMPONENTS THAT ARE LINKS IN THAT NAV. 

// THAT WAY YOU CAN RM THIS COLLECTIONHOME CONTAINER

    render() {
        return (
        <div className="coll-home-root">
            <div className="anotha-wan">

                <div className="top-nav-links-root">
                    <Link className="top-nav-link" to="/collection/playlists">
                        Playlists
                        <div className="green-active-thing-top"></div>
                    </Link>
                    <Link className="top-nav-link" to="/collection/songs">
                        Songs
                        <div className="green-active-thing-top"></div>
                    </Link>
                    <Link className="top-nav-link" to="/collection/albums">
                        Albums
                        <div className="green-active-thing-top"></div>
                    </Link>
                    <Link className="top-nav-link" to="">
                        Artists
                        <div className="green-active-thing-top"></div>
                    </Link>
                </div>

                <div className="new-playlist-div">
                    <button className="new-playlist-btn" onClick={this.props.openModal}>NEW PLAYLIST</button>
                </div>

                <br></br>
                <PlaylistIndexCollectionContainer />

            </div>
        </div>)
    }
}

const msp = state => ({
});

const mdp = dispatch => ({
    openModal: () => dispatch(openModal()),
});

export default connect(msp, mdp)(CollectionHome);