import React from "react";
import { Link, useLocation } from "react-router-dom";
import { active, navStyle, linkStyle } from './NavBar.module.css';

const NavBar = () => {
    const location = useLocation();

    return (
        <div className={navStyle}>
            <Link className={linkStyle} to="/">Home</Link>
            <Link className={location.pathname === "/calendar" ? `${active} ${linkStyle}` : linkStyle} to="/calendar">Calendar</Link>
            <Link className={location.pathname === "/color" ? `${active} ${linkStyle}` : linkStyle} to="/color">Color</Link>
            <Link className={location.pathname === "/date" ? `${active} ${linkStyle}` : linkStyle} to="/date">Date</Link>
            <Link className={location.pathname === "/radio" ? `${active} ${linkStyle}` : linkStyle} to="/radio">Radio</Link>
            <Link className={location.pathname === "/text" ? `${active} ${linkStyle}` : linkStyle} to="/text">Text</Link>
            <Link className={location.pathname === "/time" ? `${active} ${linkStyle}` : linkStyle} to="/time">Time</Link>
        </div>
    )
}

export default NavBar;