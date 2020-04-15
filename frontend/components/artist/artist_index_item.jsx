import React from 'react';
import { Link } from 'react-router-dom';


const ArtistIndexItem = ({ artist, imgNum }) => {
    let imageName = `a${imgNum}`;
    return (
        <div className="artist-index-item-root">
            <Link to="" className="artist-tile">
                <div className="transition-img-circle"></div>
                <img className="a-img" src={window.images[imageName]} />
                {/* <Link to="" className="at-title"> {artist.name} </Link> */}
            </Link>
            <p className="artist-name-txt">{artist.name}</p>
        </div>
    );
};

export default ArtistIndexItem;
