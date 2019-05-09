import React from 'react';

class Search extends React.Component {

    render() {

        return (
            <div className="search-root">

                <div className="b">
                </div>

                <div className="search-input-div">
                    <input type="text" className="search-input" placeholder="Start typing..." />
                </div>

            </div>
        )
    }
}

export default Search;