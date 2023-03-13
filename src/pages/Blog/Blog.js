import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Posts from '../../components/Posts';
import { filterPosts } from '../../utils/posts';
import './Blog.css';

function Blog() {
    const { posts } = useContext(AppContext);
    const { searchTerm } = useParams();

    return (
        <div className="Blog">
            <Posts posts={searchTerm ? filterPosts(searchTerm, posts) : posts } />
        </div>
    );
} 

export default Blog;
