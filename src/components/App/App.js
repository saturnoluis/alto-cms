import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import AppContext from '../../context/AppContext';
import { formatPosts } from '../../utils/posts';
import './App.theme.css';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(json => setPosts(formatPosts(json.posts)))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, [setPosts, setLoading]);

    const contextValue = {
        loading,
        posts,
    }

    return (
        <BrowserRouter>
            <AppContext.Provider value={contextValue}>
                <div className="App App--dark">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<p>About</p>} />
                        <Route exact path="/blog" element={<Blog />} />
                        <Route exact path="/contact" element={<p>Contact</p>} />
                    </Routes>
                </div>
            </AppContext.Provider>
        </BrowserRouter>
    );
}

export default App;
