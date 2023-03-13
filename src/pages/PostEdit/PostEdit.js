import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './PostEdit.css';

function PostEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { loading, getPostById, setPostById } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const post = getPostById(id);
        setTitle(post.title);
        setExcerpt(post.excerpt);
        setBody(post.body);
    }, [setTitle, setExcerpt, setBody, getPostById, id]);

    const handleTitleChange = (event) => {
        const { value } = event.target;
        setTitle(value);
    }

    const handleExcerptChange = (event) => {
        const { value } = event.target;
        setExcerpt(value);
    }

    const handleBodyChange = (event) => {
        const { value } = event.target;
        setBody(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPostById({
            id: parseInt(id),
            title,
            excerpt,
            body
        });
        navigate(`/post/${id}`);
    }

    return (
        <>{
            loading ? null :
            <form
                className="PostEdit"
                onSubmit={handleSubmit}
            >
                <label
                    htmlFor="title"
                    className="PostEdit__label"
                >
                    Title
                </label>
                <textarea
                    className="PostEdit__title"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
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
                    value={excerpt}
                    onChange={handleExcerptChange}
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
                    value={body}
                    onChange={handleBodyChange}
                />
                <input
                    className="PostEdit__submit"
                    type="submit"
                    value="Save changes"
                />
            </form>
        }</>
    );
}

export default PostEdit;
