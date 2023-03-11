import React from 'react';
import Post from '../Post';

import './Posts.css';

function Posts ({ posts }) {
    return (
        <ul className="Posts">
            {posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        post={post}
                    />
                );
            })}
        </ul>
    );
}

export default Posts;
