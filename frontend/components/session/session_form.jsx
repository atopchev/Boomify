import React from 'react';

class SessionForm extends React.Component {
    
    constructor(props){
        super(props);
        //this.state
    }

    componentDidMount(){
        return this.props.action(this.state);
    }

    render() {
        return(
            <h1>session_form_test</h1>
        )
    }

}

export default SessionForm;