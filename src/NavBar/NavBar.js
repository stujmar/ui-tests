import React from "react";
import { Link } from "react-router-dom";
import { navStyle } from './NavBar.module.css'

const NavBar = () => {

    return (
        <div className={navStyle}>
            <Link to="/">Home from Nav</Link>
            <Link to="/">Home from Nav</Link>
        </div>
    )
}

export default NavBar