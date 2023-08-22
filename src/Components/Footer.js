import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Footer(){
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`footer ${theme === "light" ? "ft-light": ""}`}>
            <small>Made by Teyo @2023</small>
        </div>
    )
}