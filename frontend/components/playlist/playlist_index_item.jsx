import React from 'react';
import { Link } from 'react-router-dom';


const PlaylistIndexItem = ({ playlist, imgNum }) => {

    let authorSubtext;
    let showURL = `/playlists/${playlist.id}`;
    if (imgNum >= 9) {
        authorSubtext = <Link to={showURL} className="p-author"> {playlist.username} </Link>;
    } 

    let imageUrl = `mix${imgNum}`;

    return(
        <div className="playlist-index-item-root">
            <Link to={showURL} className="playlist-tile"> 
                <div className="transition-img"></div>
                <img className="p-img" src={window.images[imageUrl]} />
                {authorSubtext}
            </Link>
        </div>
    );
};

export default PlaylistIndexItem;
