import React from 'react';
import { Link } from 'react-router-dom';


const PlaylistIndexItem = ({ playlist }) => {

    return(
        <div className="playlist-index-item-root">

            <div className="playlist-img">
            </div>
            <Link to="playlist-title"> {playlist.name} </Link>

            {/* <div className=""> {playlist.user_id} </div> */}

            {/* <div className="playlist-author"></div> */}
        </div>
    );
};

export default PlaylistIndexItem;
