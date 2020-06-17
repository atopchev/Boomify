import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylist, deletePlaylist } from "../../actions/playlist_actions";

class PlaylistShow extends React.Component {

    componentDidMount() {
        if (!this.props.playlist) {
            this.props.fetchPlaylist(this.props.match.params.playlistId);
        }
    }

    render(){
        if (!this.props.playlist) return null;
        return (
            <div className="plylst-show">
                <div className="show-header">
                    <div className="plylst-img">
                        <div className="transition-img"></div>
                        <img className="p-img" src={window.images.mix12} />
                    </div>
                    <div className="plylst-title">
                        <p className="plylst">PLAYLIST</p>
                        <p className="ply-name">{this.props.playlist.name}</p>
                        <p className="sub-txt sub-txt-2">Last updated {this.props.playlist.updatedAt}</p>
                        <p className="sub-txt">{this.props.playlist.username} • 105 songs, 6 hr 50 min  {this.props.playlist.createdAt}</p>
                        <p></p>
                        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:6sFIWsNpZYqfjUpaCgueju&size=detail&theme=dark" 
                            width="300" height="56" scrolling="no" frameborder="0"
                            allowtransparency="true">    
                        </iframe>
                    </div>
                    <iframe className="playlist-iframe" src="https://open.spotify.com/embed/playlist/5pNHmrV4zckNQPnCut2UjO"
                        width="900" height="400" frameborder="0" allowtransparency="true" 
                        allow="encrypted-media">
                    </iframe>

                </div>
                
            </div>
        );
    }
}

// CONTAINER 
const msp = (state, ownProps) => {
    // debugger;
    return{
    playlist: state.entities.playlists[ownProps.match.params.playlistId]
}};

const mdp = dispatch => ({
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id))
});

export default connect(msp, mdp)(PlaylistShow);