import React from "react";

export default function Header(){
    return (
        <div className="header">
            <h1>Gamon</h1>
            <nav className="headernav">
                <p className="navitem">Games</p>
                <p className="navitem">About</p>
                <p className="navitem">Contact</p>
            </nav>
        </div>
    )
}