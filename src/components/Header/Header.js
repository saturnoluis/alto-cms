import React from 'react';
import MainMenu from '../MainMenu';
import Logo from '../Logo';

import './Header.css';

function Header () {
    return (
        <div className="Header">
            <Logo />
            <MainMenu />
        </div>
    );
}

export default Header;
