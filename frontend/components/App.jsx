import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import LoggedInSplashContainer from './browse/logged_in_splash';
import SearchContainer from './search/search_container';
import CollectionHome from './collection/CollectionHome';
import CreatePlaylistModal from './modal/modal';
import PlaylistShow from './playlist/playlist_show';
import AlbumIndex from './album/album_index';
import SongIndex from './songs/song_index'
// import ArtistIndex from './artist/artist_index';
 



const App = () => (
    <>
        <CreatePlaylistModal />
        <Switch> 
            {/* user auth: */}
            <AuthRoute exact path="/login" component={LogInContainer} /> 
            <AuthRoute exact path="/signup" component={SignUpContainer} /> 

            {/* browse routes: */}
            <ProtectedRoute exact path="/browse/featured" component={LoggedInSplashContainer} hi={"hello"}/>
            <ProtectedRoute exact path="/browse/search" component={SearchContainer} />

            {/* collection routes: */}
            <ProtectedRoute exact path="/collection/playlists" component={CollectionHome} />
            {/* <ProtectedRoute exact path="/collection/songs" component={SongIndex} /> */}
            <ProtectedRoute exact path="/collection/albums" component={AlbumIndex} />
            {/* <ProtectedRoute exact path="/collection/artists" component={ArtistIndex} /> */}
            
            {/* show pages: */}
            <Route path="/playlists/:playlistId" component={PlaylistShow} />
            
            {/* root route: */}
            <Route path="/" component={SplashContainer} /> 
        </Switch>
    </>
);

export default App;