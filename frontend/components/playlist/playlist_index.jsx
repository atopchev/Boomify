import React from 'react';
import PlaylistIndexItem from './playlist_index_item';


class PlaylistIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPlaylists();
    }

    render() {

        let images;
        if (this.props.location === "browse") {
            images = 1; 
        } else {
            images = 9;
        }
        let playlists = this.props.playlists.map( (playlist, idx) =>
                <PlaylistIndexItem 
                    key={idx} 
                    playlist={playlist} 
                    imgNum={images++} 
                    location={this.props.location} 
                /> 
            );

        return (
            <div className="playlist-idx-div"> 
                {playlists}
            </div>
        )
    }
};

export default PlaylistIndex;
