import React, { useState, useEffect } from 'react';
import Posts from '../../components/Posts';

import './Blog.css';

function Blog () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json.posts))
    }, [setPosts]);

    return (
        <div className="Blog">
            <Posts posts={posts} />
        </div>
    );
} 

export default Blog;
