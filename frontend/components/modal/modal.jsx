import PlaylistFormComponent from '../playlist/playlist_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import React from 'react';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', user_id: '' };


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
        console.log(this.props.modal);
        if (!this.props.modal) return null;

        return (
            <div className="window-behind-modal">
                <div className="modal-root" >

                    <button className="close-btn" onClick={this.props.closeModal}>x</button>
                    <h1 className="form-title"> Create new playlist</h1>

                    <form className="form-root" onSubmit={this.handleCreate}>
                        <h4 class="inputBox-label">Playlist Name</h4>
                        <input
                            className="form-input"
                            placeholder="Start typing..."
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </form>

                    <div className="btns-root">
                        <button className="cancel-p-btn" onClick={this.props.closeModal}>cancel</button>
                        <button className="create-p-btn" onClick={this.handleSubmit}>create</button>
                    </div>
                </div>

            </div>
        )
    }
}

const msp = state => ({
    modal: state.ui.modal
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
});

export default connect(msp, mdp)(Modal);

