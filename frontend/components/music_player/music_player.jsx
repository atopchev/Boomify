import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        //bind callbacks here
    }

    render() {

        return(
            <div className="music-player-root">

                <div className="curr-song-info">

                    <Link to="" className="alb-art">
                        <img className="curr-song-album" src={window.images.fill_murray}></img>
                    </Link>

                    <div className="curr-song-t-a">
                        <Link to ="" className="curr-song-title">Banana Pancakes</Link>
                        <Link to=""  className="curr-song-artist">Jack Johnson</Link>
                    </div>

                    <Link><button className="save-btn">+</button></Link>
                </div>

                <div className="music-control-panel">
                    <img className="control-panel" src={window.images.shuffle}></img>
                    <img className="control-panel" src={window.images.rewind}></img>
                    <img className="control-panel-p" src={window.images.play}></img>
                    <img className="control-panel" src={window.images.ffwd}></img>
                    <img className="control-panel" src={window.images.replay}></img>                  
                    <div className="time">
                        <div className="left">1:23</div>
                        <div className="time-bar">
                            <input type="range" min="1" max="10" class="v-r" />
                        </div>
                        <div className="right">4:44</div>
                    </div>
                </div>

                <div className="volume-n-extras">
                    <img class="vol" src={window.images.vol}></img>
                    <div class="volume-range">
                        <input type="range" min="1" max="10" value="6" class="v-r" />
                    </div>
                </div>

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