import React from 'react';

import './SearchBar.css';

function SearchBar () {
    return (
        <form className="SearchBar">
            <label>
                Search the site
                <input type="text" />
            </label>
            <input type="submit" value="Search" />
        </form>
    );
}

export default SearchBar;
