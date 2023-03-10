import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

function MainMenu () {
    return (
        <nav className="MainMenu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;
