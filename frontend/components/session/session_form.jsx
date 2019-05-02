import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.action(this.state);
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
        return(
            <div className="body">
                <div className="header-logo"></div>
                <div className="main-section">
                    <div className="form-content">
                        <div className="subtext"></div>
                        <div className="demo-login-button"></div>
                        <div className="-or-"></div>
                        <div className="-or-"></div>
                        <form onSubmit={this.handleSubmit}>
                            {/* two input fields, one check-box, one button  */}
                            <div className="row-submit"></div>
                        </form>
                        <div className="forgot-pw-row"></div>
                        <div className="signup-section"></div>
                        <div className="terms-conds"></div>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default SessionForm;