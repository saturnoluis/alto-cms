import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

const ListItem = ({ to, label }) => {
    return (
        <li>
            <Link className="MainMenu__list-item" to={to}>
                {label}
            </Link>
        </li>
    );
};

function MainMenu () {
    return (
        <nav className="MainMenu">
            <ul className="MainMenu__list">
                <ListItem to="/" label="Home" />
                <ListItem to="/about" label="About" />
                <ListItem to="/blog" label="Blog" />
                <ListItem to="/contact" label="Contact" />
            </ul>
        </nav>
    );
}

export default MainMenu;
