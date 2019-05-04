import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const msp = ({ session }) => {
  return {
    currentUser: session
  };
};

const mdp = dispatch => ({
  action: () => dispatch(logout())
});

export default connect( msp, mdp)(Splash);
