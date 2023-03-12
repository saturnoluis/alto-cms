import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './PostEdit.css';

function PostEdit() {
    const { id } = useParams();
    const { loading, getPostById } = useContext(AppContext);
    const [post, setPost] = useState({});

    useEffect(() => {
        setPost(getPostById(id));
    }, [setPost, getPostById, id]);

    return (
        <>
            {loading ? (
                <p>LOADING</p>
            ) : (
                <form className="PostEdit">
                    <input
                        className="PostEdit__title"
                        type="text"
                        value={post.title || ''}
                    />
                    <textarea
                        className="PostEdit__excerpt"
                        value={post.excerpt || ''}
                    />
                    <textarea
                        className="PostEdit__body"
                        value={post.body || ''}
                    />
                    <input
                        className="PostEdit__submit"
                        type="submit"
                        value="Save changes"
                    />
                </form>
            )}
        </>
    );
} 

export default PostEdit;
