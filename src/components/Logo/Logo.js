import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

function Logo () {
    return (
        <div className="Logo">
            <Link to="/">Logo</Link>
        </div>
    );
}

export default Logo;
