import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function NotFound(){
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme}`}>
            Ops nothing here
        </div>
    )
}