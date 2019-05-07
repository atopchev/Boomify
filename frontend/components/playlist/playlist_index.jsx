import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PlaylistIndex extends React.Component {

    constructor(props){
        super(props);
    }

    // componentDidMount(){
    // }

    render() {

        return (
            <h1>test this is my playlist index</h1>
        )
    }

}


const msp = state => ({});

const mdp = dispatch => ({});

export default connect(msp, mdp)(PlaylistIndex);