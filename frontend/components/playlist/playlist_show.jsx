import React from 'react';
import { connect } from 'react-redux';


class PlaylistShow extends React.Component {


    render(){

        return (
            <h2>PlaylistShow</h2>
        );
    }
}

const msp = state => ({

});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(PlaylistShow);