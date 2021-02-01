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
            <button onClick={handleClick}>Radio Cheat</button>
            <Link to="/">Home from Nav</Link>
            <Link to="/radio">Radio from Nav</Link>
            <Link to="/calendar">Calendar from Nav</Link>
        </div>
    )
}

export default NavBar