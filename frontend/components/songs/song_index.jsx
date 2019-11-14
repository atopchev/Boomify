import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SongIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchSongs();
    }

    render() {
        return (
            <div className="song-idx-root">
                This is my song index component
            </div>

        );
    }

}


const msp = state => ({

});

const mdp = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(msp, mdp)(SongIndex);