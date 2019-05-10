import React from 'react';
import { Link } from 'react-router-dom';


const ArtistIndexItem = ({ playlist, imgNum }) => {


    let imageUrl = `art${imgNum}`;

    return (
        <div className="artist-index-item-root">

            <Link className="artist-tile">
                <div className="transition-img"></div>
                <img className="a-img" src={window.images[imageUrl]} />
                <Link className="a-name"> {artist.name} </Link>;
            </Link>
        </div>
    );
};

export default ArtistIndexItem;
