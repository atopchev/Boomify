import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchAlbums();
    }

    render() {
        return (
            <div className="album-idx-root">

            </div>

        );
    }

}


const msp = state => ({

});

const mdp = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(msp, mdp)(AlbumIndex);