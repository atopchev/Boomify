import React from 'react';
import { connect } from 'react-redux';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        //bind callbacks here
    }

    render() {

        return(
            <div className="music-player-root">
                MUSIIIIIICCCC PLLLAAAYYYERRR LITTT
            </div>
        )
    }
}

const msp = state => {
    return {
        //
    }
}

const mdp = dispatch => {
    return {
        //
    }
}

export default connect(msp, mdp)(MusicPlayer);