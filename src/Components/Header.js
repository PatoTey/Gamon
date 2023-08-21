import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <Link to="/" className="unlink"><h1 className="sitetitle">Gamon</h1></Link>
            <nav className="headernav">
                <Link to="/games" className="unlink"><p className="navitem">Games</p></Link>
                <Link to="/about" className="unlink"><p className="navitem">About</p></Link>
                <Link to="/Contact" className="unlink"><p className="navitem">Contact</p></Link>
            </nav>
        </div>
    )
}