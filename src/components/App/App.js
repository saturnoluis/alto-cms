import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteHeader from '../SiteHeader';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <SiteHeader />
                <Routes>
                    <Route exact path="/" element={<p>Home</p>} />
                    <Route exact path="/about" element={<p>About</p>} />
                    <Route exact path="/blog" element={<p>Blog</p>} />
                    <Route exact path="/contact" element={<p>Contact</p>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
