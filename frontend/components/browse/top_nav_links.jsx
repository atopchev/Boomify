import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TopNavLinks extends React.Component {


    render() {
        return (
            <div className="top-nav-links-root"> 

                <Link className="top-nav-link" to="/browse/featured">
                    Featured
                    <div className="green-active-thing-top"></div>
                </Link>

                <Link className="top-nav-link" >
                    New Releases
                    <div className="green-active-thing-top"></div>
                </Link>

                <Link className="top-nav-link" >
                    Genres
                    <div className="green-active-thing-top"></div>
                </Link>

                <Link className="top-nav-link" >
                    Discover
                    <div className="green-active-thing-top"></div>
                </Link>

            </div>
        );
    }
}

const msp = state => ({
});

const mdp = dispatch => ({
});

export default connect(msp, mdp)(TopNavLinks);