
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TopNavLinks = () => (
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
        <Link className="top-nav-link" to="/collection/artists">
            Artists
                        <div className="green-active-thing-top"></div>
        </Link>
    </div>
);

export default TopNavLinks;