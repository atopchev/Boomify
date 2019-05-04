import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';


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
    action: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);