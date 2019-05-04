import React from 'react';
import { Link } from 'react-router-dom';

class LoggedInSplash extends React.Component {

    render(){
        return(
            <div className="main-root"> 

                Hey this is ur main content 

                <TopLinks />

                <h1>Made for CurrentUsername</h1>
                {/* playlist icons */}

                <h1>New Releases</h1>
                {/* album icons */}

                <h1>Recently Played</h1>
                {/* artist icons */}

            </div>
        )
    }
}

export default LoggedInSplash;