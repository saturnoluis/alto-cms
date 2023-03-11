import React from 'react';
import Logo from '../Logo';
import MainMenu from '../MainMenu';
import SearchBar from '../SearchBar';

import './Header.css';

function Header () {
    return (
        <div className="Header">
            <Logo />
            <MainMenu />
            <SearchBar />
        </div>
    );
}

export default Header;
