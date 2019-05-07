import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.action(this.state).then(() => this.props.history.push("/browse/featured"));
    }

    handleDemoSubmit(e){
        e.preventDefault();
        return this.props.login( { username: "ott", password: "password" })
            .then(() => this.props.history.push("/browse/featured"));
    }

    update(field) {
        return (
            (e) => this.setState( { [field]: e.target.value } )
        );
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map(
                    (er, idx) => (<li key={`${idx}`}>{er}</li>) 
                )}
            </ul>
        )
    }

    render() {
        let email;
        if (this.props.formType === "Sign Up") {
            email = 
                <>
                    <label className="sessform-label">
                        <input className="i" placeholder="Email" type="text" value={this.state.email} onChange={this.update("email")} />
                    </label>
                    <label className="sessform-label"> 
                        <input className="i" placeholder="Confirm email" type="text"/>
                    </label> 
                </>
        };

        let loginExtra;
        if (this.props.formType === "Log In") {
            loginExtra = 
                <>
                    {/* <input type="checkbox" /> Remember me */}
                    <div className="subtext-switch-url">Don't have an account?&nbsp;
                        <Link to="/signup" className="login-instead"> Sign up</Link> instead
                    </div>
                <br></br>
                </>
        }

        let signupExtras;
        if (this.props.formType === "Sign Up") {
            signupExtras = 
                <>
                    <div className="subtext-switch-url">Already have an account?&nbsp;
                        <Link to="/login" className="login-instead"> Log in</Link> instead
                    </div>
                    <br></br>
                </>
        }


        return(
            <div className="body">
                <div className="">
                    <Link to="/" className="session-to-splash" >
                        <header className="header">
                            <img className="header-logo" src={window.images.logo}/>
                            <p id="title-0">Boombox</p>
                        </header>
                    </Link>
                </div>
                <div className="main-section">
                    <div className="form-content">
                        <div className="demo-login-button">
                            <button 
                                className="demo-login"
                                onClick={this.handleDemoSubmit}>DEMO LOG IN</button>
                        </div>
                        <div className="-or-">
                            <p className="or">or</p>
                        </div>

                        <div className="subtext">
                            sign up with your email address
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            {email}
                            <label className="sessform-label">
                                <input className="i" placeholder="Username" type="text" value={this.state.username} onChange={this.update("username")} />
                            </label>
                            <label className="sessform-label"> 
                                <input className="i" placeholder="Password" type="password" value={this.state.password} onChange={this.update("password")} />
                            </label>
                            <div className="row-submit">
                                <br></br>
                                {signupExtras}
                                {loginExtra}  
                                <input className="sub-btn" type="submit" value={this.props.formType}/>
                                <br></br>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default SessionForm;