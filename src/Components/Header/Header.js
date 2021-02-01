import React from 'react';
import { headBody, headText } from './Header.module.css';

const Header = () => {

    return (
        <div className={headBody}>
            <div className={headText}>UI TESTS</div>
        </div>
    )
}

export default Header;