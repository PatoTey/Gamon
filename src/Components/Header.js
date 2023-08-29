import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Header(){
    const {theme, toggletheme} = useContext(ThemeContext)

    return (
        <div className={`headerlayout ${theme}`}>
            <div className={`header ${theme}`}>
                <Link to="/" className="unlink"><h1 className="sitetitle">Gamon</h1></Link>
                <nav className="headernav">
                    <Link to="/games" className="unlink"><p className="navitem">Games</p></Link>
                    <Link to="/about" className="unlink"><p className="navitem">About</p></Link>
                    <Link to="/Contact" className="unlink"><p className="navitem">Contact</p></Link>
                </nav>
            </div>
            <div className={`navicons ${theme}`}>
                <Link to="/cart" className="unlink"><FaShoppingCart/></Link>
                <Link to="/favorites" className="unlink"><FaHeart/></Link>
                <label className="switch">
                    <input type="checkbox" onChange={toggletheme}/>
                    <span  className={`slider round slider-${theme}`}></span>
                </label>
            </div>
        </div>
    )
}