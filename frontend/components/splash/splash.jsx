import React from 'react';
import { Link } from 'react-router-dom';


const Splash = (props) => {
  const loggedOutSplash = () => (
	<>
		<nav className="splash-top-nav">
			<div className="container">
				<span className="nav-logo"><h1>Boomify</h1></span>
				<div className="nav-right">
					<span className="login-text">
						<Link className="link" to="/login"> Login </Link>
					</span>
					
					<span className="divider">|</span>
					
					<span className="signup-text">
						<Link className="link" to="/signup"> Sign up </Link>
					</span>
				</div>
			</div>
			<div className="main-content">
				<img className="splash" src={window.images.splash_bubbles}></img>
				<span className="get-free-link">
					<Link className="button-link" to="/signup">GET BOOMIFY FREE</Link>
				</span>
			</div>
		</nav>


	</>
  );

  const loggedInSplash = () => (
	<div>
	  <h2>Welcome back, {props.currentUser.username}.</h2>
	  <button onClick={props.action}>Log Out</button>
	</div>
	);

  return (props.currentUser) 
			? loggedInSplash() 
			: loggedOutSplash();
};


export default Splash;
