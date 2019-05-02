import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';


const msp = (state) => ({ 
    errors: state.errors.session, 
    formType: "Log In",
    navLink: <Link to= "/signup"> sign up instead </Link>,
    user: {
        username: '',
        password: ''
        //email ??
    }
});

const mdp = dispatch => ({
    action: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);