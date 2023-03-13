import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResults from '../SearchResults';
import AppContext from '../../context/AppContext';
import { filterPosts } from '../../utils/posts';
import './SearchBar.css';

function SearchBar () {
    const { posts } = useContext(AppContext);
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    const handleChange = (event) => {
        const searchValue = event.target.value;

        setFilteredPosts(filterPosts(searchValue, posts));
        setSearchInput(searchValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const encodedSearchTerm = encodeURIComponent(searchInput.trim());

        if (encodedSearchTerm.length === 0) {
            navigate('/blog');
        }
        else {
            navigate(`/search/${encodedSearchTerm}`);
        }
        setFilteredPosts([]);
    }

    return (
        <form
            className="SearchBar"
            role="search"
            onSubmit={handleSubmit}
        >
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
                value={searchInput}
                onChange={handleChange}
                onFocus={handleChange}
            />
            <button
                className="SearchBar__submit"
                type="submit"
            >
                Search
            </button>
            <SearchResults
                results={filteredPosts}
                onClick={() => setFilteredPosts([])}
            />
        </form>
    );
}

export default SearchBar;

