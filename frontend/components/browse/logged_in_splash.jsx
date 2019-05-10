import React from 'react';
import { Link } from 'react-router-dom';

import TopNavLinks from './top_nav_links';
import PlaylistIndexBrowseContainer from '../playlist/playlist_index_browse_container';
import AlbumIndex from '../album/album_index';
import ArtistIndex from '../artist/artist_index';

class LoggedInSplash extends React.Component {

    render(){
        return(
            <div className="main-root"> 

                <div className="anotha-wan">

                    <TopNavLinks />

                    <section className="made-4-u">
                        <div className="playlists-4-u">
                            <h1 className="for-u-header-txt">Made for You</h1>
                            <Link className="top-nav-link-vm" to="">View More</Link>
                        </div>

                    </section>
                    <br></br>
                    <PlaylistIndexBrowseContainer />

                    <section className="made-4-u">
                        <div className="playlists-4-u">
                            <h1 className="for-u-header-txt">New Releases</h1>
                            <Link className="top-nav-link-vm" to="">View More</Link>
                        </div>
                    </section>
                    <br></br>
                    <AlbumIndex />

                    <section className="made-4-u">
                        <div className="playlists-4-u">
                            <h1 className="for-u-header-txt">Recently Played</h1>
                            <Link className="top-nav-link-vm" to="">View More</Link>
                        </div>
                    </section>  
                    <br></br>                 
                    <ArtistIndex />
                    
                </div>

            </div>
        )
    }
}

export default LoggedInSplash;