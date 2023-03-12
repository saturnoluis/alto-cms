import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';

import './App.theme.css';
import './App.css';

function App () {
    return (
        <BrowserRouter>
            <div className="App App--dark">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<p>About</p>} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/contact" element={<p>Contact</p>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
