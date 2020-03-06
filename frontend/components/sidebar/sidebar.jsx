import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions';


class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.logout().then(() => this.props.history.push("/"));
    }

    // componentDidMount() {
    //     this.fetchCurrentUser ??
    // }

    render() {
        return (
            <div className="sidebar-root">
                <div className="nav-bar">
                    <div className="nav-white-top-logo">
                        <img className="logo-white" src={window.images.logo_white}></img>
                        <Link to="/browse/featured" className="top-splsh-lnk" >
                            <p className="boombox-text-nav">Boomify</p>
                            <p className="boombox-text-nav-r">Ⓡ</p>
                        </Link>
                    </div>
                </div>

                <ul>
                    <li className="nav-link">
                        <Link to="/browse/featured" className="nav-link-tab">
                        <Link to="" className="green-active-thing"></Link>
                            <svg className="svg-margin" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M 256.274 60.84 L 84.324 166.237 L 84.324 
                                        443.063 L 193.27 443.063 L 193.27 293.73 
                                        L 320.228 293.73 L 320.228 443.063 L 
                                        428.222 443.063 L 428.222 165.476 L 
                                        256.274 60.84 Z M 256.274 35.95 L 
                                        448.452 149.145 L 448.452 464.395 L 300 
                                        464.395 L 300 315.062 L 213.499 315.062 
                                        L 213.499 464.395 L 64.095 464.395 L 
                                        64.095 150.161 L 256.274 35.95 Z" 
                                    fill="currentColor">
                                </path>
                            </svg>
                            <p className="nav-link-tab-txt">Home</p>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/browse/search" className="nav-link-tab">
                        <Link className="green-active-thing"></Link>
                            <svg className="svg-margin"  viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" 
                                    fill="currentColor" 
                                    fill-rule="evenodd">
                                </path>
                            </svg>
                            <p className="nav-link-tab-txt">Search</p>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link to="/collection/playlists" className="nav-link-tab">
                        <Link className="green-active-thing"></Link>
                            <svg className="svg-margin"  viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" 
                                     fill="currentColor">
                                </path>
                            </svg>
                            <p className="nav-link-tab-txt">Your Library</p>
                        </Link>
                    </li>
                </ul>

                <div className="rec-playd-nav-bar">
                    <p className="rec-plyd-txt">RECENTLY PLAYED</p>
                    <img className="rec-plyd-pic" src={window.images.rec_played}></img>
                </div>

                <div className="bottom-sidebar">
                    <div className="logout-button">
                        <button className="lo-btn"onClick={this.handleSubmit}>Log Out</button>
                    </div>
                    <div className="user-name">
                        <img className="prof-pic" src={window.images.prof_pic}></img>
                        <p className="username-txt">Angela</p>
                    </div>
                </div>

            </div>
        )
    }
}


const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session]
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(Sidebar));


