import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Link, Switch } from 'react-router-dom'

import SplashContainer from './splash/splash_container';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';

const App = () => (
    <div>
        <Switch> 
            <AuthRoute path="/" component={SplashContainer} />
            <AuthRoute exact path="/login" component={LogInContainer} /> 
            <AuthRoute exact path="/signup" component={SignUpContainer} /> 
        </Switch>
    </div>
)

export default App;