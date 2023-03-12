import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './PostView.css';

function PostView() {
    const { id } = useParams();
    const { getPostById } = useContext(AppContext);
    const [post, setPost] = useState({});

    useEffect(() => {
        setPost(getPostById(id));
    }, [setPost, getPostById, id]);

    return (
        <article className="PostView">
            <h1 className="PostView__title">
                {post.title}
            </h1>
            <p className="PostView__excerpt">
                {post.excerpt}
            </p>
            <p className="PostView__body">
                {post.body}
            </p>
            <div 
                className="PostView__picture"
            >
                <img
                    src={`https://picsum.photos/id/${id}/300/500`}
                    alt={post.title}
                />
            </div>
        </article>
    );
} 

export default PostView;
