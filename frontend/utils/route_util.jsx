import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import MusicPlayer from '../components/music_player/music_player';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  	<Route 
		path={path} 
		exact={exact} 
		render={(props) => (
			!loggedIn 
			? ( <Component {...props} />) 
			: ( <Redirect to="/" /> )
		)} 
	/>
);

/**
 * 
 * don't allow a user to see the logged out splash. 
 * If they are logged in, redirect them to "/browse/featured"
 * 		instead of the "/" root (only viewable to logged out user). 
 */
const Splash = ({ component: Component, path, loggedIn, exact }) => (
	<Route
		path={path}
		exact={exact}
		render={(props) => (
			!loggedIn
				? (<Component {...props} />)
				: (<Redirect to="/browse/featured" />)
		)}
	/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  	<Route 
		path={path} 
		exact={exact} 
		render={(props) => (
			loggedIn 
			? ( 
				<div className="browse-featured-root">
					<Sidebar {...props} />
					<MusicPlayer {...props}/>
					<Component {...props} />
				</div>	) 
			: ( <Redirect to="/login" /> )
    	)} 
	/>
);

const msp = state => (
  {loggedIn: Boolean(state.session)}
);


export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
export const SplashProtected = withRouter(connect(msp)(Splash));
