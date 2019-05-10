import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Route, Link, Switch } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import LoggedInSplashContainer from './browse/logged_in_splash';
import SearchContainer from './search/search_container';
import CollectionHome from './collection/CollectionHome';
import CreatePlaylistModal from './modal/modal';

const App = () => (
    <div>
        <CreatePlaylistModal />

        <Switch> 
            <AuthRoute exact path="/login" component={LogInContainer} /> 
            <AuthRoute exact path="/signup" component={SignUpContainer} /> 

            <ProtectedRoute exact path="/browse/featured" component={LoggedInSplashContainer} />
            <ProtectedRoute exact path="/browse/search" component={SearchContainer} />

            <ProtectedRoute exact path="/collection/playlists" component={CollectionHome} />
            <Route path="/" component={SplashContainer} /> 
        </Switch>


    
    </div>
)

export default App;