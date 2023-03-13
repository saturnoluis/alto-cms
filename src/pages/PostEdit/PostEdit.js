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
                    <label
                        htmlFor="title"
                        className="PostEdit__label"
                    >
                        Title
                    </label>
                    <textarea
                        className="PostEdit__title"
                        id="title"
                        value={post.title || ''}
                    />
                    <label
                        htmlFor="excerpt"
                        className="PostEdit__label"
                    >
                        Excerpt
                    </label>
                    <textarea
                        className="PostEdit__excerpt"
                        id="excerpt"
                        value={post.excerpt || ''}
                    />
                    <label
                        htmlFor="body"
                        className="PostEdit__label"
                    >
                        Body
                    </label>
                    <textarea
                        className="PostEdit__body"
                        id="body"
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
