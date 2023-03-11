import React from 'react';

function Posts ({ posts }) {
    return (
        <ul className="Posts">
            {posts.map(post => {
                return (
                    <p>{post.title}</p>
                );
            })}
        </ul>
    );
}

export default Posts;
