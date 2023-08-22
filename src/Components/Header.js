import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

export default function Header(){
    const {theme, toggletheme} = useContext(ThemeContext)

    return (
        <div className={`header ${theme}`}>
            <Link to="/" className="unlink"><h1 className="sitetitle">Gamon</h1></Link>
            <label className="switch">
                <input type="checkbox" onChange={toggletheme}/>
                <span className="slider round"></span>
            </label>
            <nav className="headernav">
                <Link to="/games" className="unlink"><p className="navitem">Games</p></Link>
                <Link to="/about" className="unlink"><p className="navitem">About</p></Link>
                <Link to="/Contact" className="unlink"><p className="navitem">Contact</p></Link>
            </nav>
        </div>
    )
}