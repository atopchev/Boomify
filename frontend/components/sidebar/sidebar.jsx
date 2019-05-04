import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
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
                <h1>testtttt</h1>
                <div className="nav-bar">
                    <div className="logo"></div>
                    <div className="ul-items"></div>
                    <div className="recently-played"></div>
                </div>
                <div className="user-name">
                    <h2>Curr User username</h2>
                </div>
                <div className="logout-button">
                    <button onClick={this.handleSubmit}>Log Out</button>
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


