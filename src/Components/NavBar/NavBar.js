import React from "react";
import { NavLink } from "react-router-dom";
import { active, navStyle, linkStyle } from './NavBar.module.css';

const NavBar = () => {

    return (
        <div className={navStyle}>
            <NavLink activeClassName={`${active} ${linkStyle}`} className={linkStyle} to="/" exact>Search</NavLink>
            <NavLink activeClassName={`${active} ${linkStyle}`} className={linkStyle} to="/calendar">Calendar</NavLink>
            <NavLink activeClassName={`${active} ${linkStyle}`} className={linkStyle} to="/color">Color</NavLink>
            <NavLink activeClassName={`${active} ${linkStyle}`} className={linkStyle} to="/date">Date</NavLink>
            <NavLink activeClassName={`${active} ${linkStyle}`} className={linkStyle} to="/radio">Radio</NavLink>
            <NavLink activeClassName={`${active} ${linkStyle}`} className={linkStyle} to="/text">Text</NavLink>
            <NavLink activeClassName={`${active} ${linkStyle}`} className={linkStyle} to="/time">Time</NavLink>
        </div>
    )
}

export default NavBar;