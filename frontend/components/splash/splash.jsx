import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

	render() {
		const loggedOutSplash = () => (
			<div className="whole-spl">
		
				<div className="main-content">
					<img className="splash" src={window.images.splash_bubbles}></img>
					
					<span className="get-free-link">
						<Link className="button-link" to="/signup">GET BOOMIFY FREE</Link>
					</span>
				</div>
		
				<nav className="splash-top-nav sticky">
					<div className="container">
						<span className="nav-logo">
							<img className="spl-logo-white" src={window.images.logo_white}/>
							<h1>Boombox</h1>
						</span>

						<div className="nav-right">

							<span className="link-span">
								<Link className="link" to="/"> Premium </Link>
							</span>
							
							<span className="link-span">
								<Link className="link" to="/"> Help </Link>
							</span>

							<span className="link-span">
								<Link className="link" to="/"> Download </Link>
							</span>

							<span className="divider">|</span>

							<span className="link-span">
								<Link className="link" to="/login"> Login </Link>
							</span>
							
							<span className="link-span">
								<Link className="link" to="/signup"> Sign up </Link>
							</span>
						</div>
					</div>
				</nav>
		
				<div className="middle-spl">
					<div className="inner-mid-spl">
						
						<header className="inner-header-0">Welcome to a Spotify clone. This 
							project is not-for-profit and I do not own copy right to 
							Spotify logos.
						</header>

						<p className="inner-header-1">
							Thanks for taking the time to look around! If you're 
							interested in contacting me or just learning more about
							me feel free to scroll down and select any of the links 
							to my social media as well as the code to this project.
						</p>
		
						<div className="learn-more-wrap">
							<Link className="button-link-blk" to="/signup">Learn More</Link>
						</div>

						<br></br>
		
						<p className="inner-header-2">
							Ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
							aute irure dolor in reprehenderit in voluptate velit esse 
							cillum dolore eu fugiat nulla pariatur. Excepteur sint 
							occaecat cupidatat non proident, sunt in culpa qui officia 
							deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
		
				<div className="footer-spl">
					Footer
				</div>
			</div>
		);
		
		const loggedInSplash = () => (
			<div>
			<h2>Welcome back, {this.props.currentUser.username}.</h2>
			<button onClick={this.props.action}>Log Out</button>
			</div>
		);

		return ( (this.props.currentUser) ? loggedInSplash() : loggedOutSplash() );
	}
}
	  


export default Splash;
