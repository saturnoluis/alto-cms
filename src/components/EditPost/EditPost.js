import React from 'react';
import { Link } from 'react-router-dom';
import './EditPost.css';

function EditPost ({ id }) {
    return (
        <div className="EditPost">
            <Link
                className="EditPost__button"
                to={`/edit/${id}`}
            >
                Edit this post
            </Link>
        </div>
    );
}

export default EditPost;
