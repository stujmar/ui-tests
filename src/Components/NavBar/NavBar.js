import React from "react";
import { Link, useHistory } from "react-router-dom";
import { navStyle } from './NavBar.module.css'

const NavBar = () => {
    const history = useHistory();

    const handleClick = (e) => {
        history.push("radio");
    }
    return (
        <div className={navStyle}>
            <Link to="/">Home</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/color">Color</Link>
            <Link to="/date">Date</Link>
            <Link to="/radio">Radio</Link>
            <Link to="/text">Text</Link>
            <Link to="/time">Time</Link>
        </div>
    )
}

export default NavBar