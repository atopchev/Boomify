import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logout } from '../../actions/session_actions';


const msp = (state) => ({
    errors: state.errors.session,
    formType: "Sign Up",
    navLink: <Link to="/login"> log in instead </Link> ,
    user: {
        username: '',
        password: ''
    }
});

const mdp = dispatch => ({
    action: () => dispatch(logout())
});

export default connect(msp, mdp)(SessionForm);