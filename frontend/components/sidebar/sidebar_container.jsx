import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';


const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session]
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(Sidebar));