import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Posts from '../../components/Posts';
import { filterPosts } from '../../utils/posts';
import './Blog.css';

function Blog() {
    const { posts, loading } = useContext(AppContext);
    const { searchTerm } = useParams();

    console.log('>>>', decodeURIComponent(searchTerm));

    return (
        <div className="Blog">
            {loading ? <h1>LOADING</h1> : null}
            <Posts posts={searchTerm ? filterPosts(searchTerm, posts) : posts } />
        </div>
    );
} 

export default Blog;
