import React from 'react';

import './SearchBar.css';

function SearchBar () {
    return (
        <form className="SearchBar" role="search">
            <label
                className="SearchBar__label"
                htmlFor="searchInput"
                title="Search the site"
            >
                Search the site
            </label>
            <input
                className="SearchBar__input"
                type="text"
                id="searchInput"
                name="search"
            />
            <button
                className="SearchBar__submit"
                type="submit"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;

