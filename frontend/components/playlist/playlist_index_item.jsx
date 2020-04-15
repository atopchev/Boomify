import React from 'react';
import { Link } from 'react-router-dom';


const PlaylistIndexItem = ({ playlist, imgNum }) => {

    let authorSubtext;
    if (imgNum >= 9) {
        authorSubtext = <Link to="" className="p-author"> {playlist.username} </Link>;
    } 

    let imageUrl = `mix${imgNum}`;

    return(
        <div className="playlist-index-item-root">
            <Link to="" className="playlist-tile"> 
                    <div className="transition-img"></div>
                    <img className="p-img" src={window.images[imageUrl]} />
                {/* <Link to="" className="p-title"> {playlist.name} </Link> */}
                {authorSubtext}
            </Link>
        </div>
    );
};

export default PlaylistIndexItem;
