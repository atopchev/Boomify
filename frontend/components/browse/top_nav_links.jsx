import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TopNavLinks extends React.Component {


    render() {
        return (
            <div className="top-nav-links-root"> 
                <Link className="top-nav-link" to="/browse/featured">Featured</Link>
                <Link className="top-nav-link" >New Releases</Link>
                <Link className="top-nav-link" >Genres</Link>
                <Link className="top-nav-link" >Discover</Link>
            </div>
        );
    }
}

const msp = state => ({
});

const mdp = dispatch => ({
});

export default connect(msp, mdp)(TopNavLinks);