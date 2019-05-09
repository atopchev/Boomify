import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ArtistIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    // }

    render() {
        return (
            <div className="artist-idx-root">
                
            </div>
        );
    }

}


const msp = state => ({

});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(ArtistIndex);