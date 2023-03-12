import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

function Logo () {
    return (
        <Link className="Logo" to="/">
            <i className="Logo__icon" aria-hidden="true">⚡</i>
            Logo
        </Link>
    );
}

export default Logo;
