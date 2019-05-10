import React from 'react';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', user_id: ''};


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPlaylist(this.state, this.props.user)
            .then((playlist) => {
                this.props.closeModal();
                this.props.history.push(`/collection/playlists/${playlist.data.playlist.id}`);
        });
        this.state.title = '';
    }

    render() {
        return (
            <div className="create-playlist-modal-root">

                <button className="close-btn" onClick={() => this.props.closeModal()}>x</button>
                <h1 className="form-title"> Create new playlist</h1>
                
                <form className="form-root" onSubmit={this.handleCreate}>
                    <input
                        className="form-input"
                        placeholder="Start typing..."
                        value={this.state.title}
                        onChange={this.update('title')}  
                    />
                </form>

                <div className="btns-root">
                    <button className="cancel-p-btn" onClick={this.props.closeModal}>cancel</button>
                    <button className="create-p-btn" onClick={this.handleCreate}>create</button>
                </div>

            </div>
        )
    }
}

export default PlaylistForm;