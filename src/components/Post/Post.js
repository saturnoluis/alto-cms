import React from 'react';

import './Post.css';

function Post ({ post }) {
    const { title, body } = post;

    return (
        <article className="Post">
            <h1>{title}</h1>
            <p>
                {body}
            </p>
        </article>
    );
}

export default Post;
