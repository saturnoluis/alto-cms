import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Posts from '../../components/Posts';
import './Blog.css';

function Blog() {
    const { posts, loading } = useContext(AppContext);


    return (
        <div className="Blog">
            {loading ? <h1>LOADING</h1> : null}
            <Posts posts={posts} />
        </div>
    );
} 

export default Blog;
