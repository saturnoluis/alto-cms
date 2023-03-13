import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import PostView from '../../pages/PostView';
import PostEdit from '../../pages/PostEdit';
import Loading from '../../components/Loading';
import AppContext from '../../context/AppContext';
import { formatPosts } from '../../utils/posts';
import './App.theme.css';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        if (posts.length === 0) {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(json => setPosts(formatPosts(json.posts)))
                .catch(error => console.error(error))
                .finally(() => setLoading(false));
        }
    }, [setPosts, setLoading, posts]);

    const getPostById = (postId) => {
        const id = parseInt(postId, 10);
        return posts.find(post => post.id === id) || {};
    }

    const setPostById = (newPost) => {
        const target = posts.findIndex(post => post.id === newPost.id);

        if (target === -1) {
            return;
        }

        const newPosts = [...posts];
        newPosts[target] = newPost;

        setPosts(newPosts);
    }

    const contextValue = {
        loading,
        posts,
        getPostById,
        setPostById,
    }

    return (
        <BrowserRouter>
            <AppContext.Provider value={contextValue}>
                <div className="App App--dark">
                    <Header />
                    <Loading />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/blog" element={<Blog />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/post/:id" element={<PostView />} />
                        <Route exact path="/edit/:id" element={<PostEdit />} />
                        <Route exact path="/search/:searchTerm" element={<Blog />} />
                    </Routes>
                </div>
            </AppContext.Provider>
        </BrowserRouter>
    );
}

export default App;
