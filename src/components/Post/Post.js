import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

function Post({ post }) {
    const { title, excerpt, id } = post;

    return (
        <article className="Post">
            <Link
                className="Post__thumb-link"
                to={`/post/${id}`}
            >
                <img
                    className="Post__thumb"
                    src={`https://picsum.photos/id/${id}/140/140`}
                    alt={title}
                />
            </Link>
            <h1 className="Post__title">
                <Link
                    className="Post__title-link"
                    to={`/post/${id}`}
                >
                    {title}
                </Link>
            </h1>
            <p className="Post__body">
                {excerpt}.
            </p>
        </article>
    );
}

export default Post;
