import React from 'react';
import { Link } from 'react-router-dom';


const PlaylistIndexItem = ({ playlist, imgNum }) => {


    let authorSubtext;
    if (imgNum >= 9) {
        authorSubtext = <Link className="p-author"> {playlist.username} </Link>;
    } 

    let imageUrl = `mix${imgNum}`;

    return(
        <div className="playlist-index-item-root">

                <Link className="playlist-tile"> 
                    <div className="transition-img"></div>
                    <img className="p-img" src={window.images[imageUrl]} />
                    <Link className="p-title"> {playlist.name} </Link>
                {authorSubtext}
                </Link>
        </div>
    );
};

export default PlaylistIndexItem;
