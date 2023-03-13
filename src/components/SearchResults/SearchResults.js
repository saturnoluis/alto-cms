import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

function SearchResults({ results, onClick }) {
    return (
        <>
            {results.length > 0 ?
            <ul className="SearchResults">
                {
                    results.map(post =>
                        <li
                            key={post.id}
                            className="SearchResults__item"
                        >
                            <Link
                                to={`/post/${post.id}`}
                                className="SearchResults__link"
                                onClick={onClick}
                         >
                                {post.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            : null
        }
        </>
    );
}

export default SearchResults;
