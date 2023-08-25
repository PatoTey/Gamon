import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function FavoriteGames(){
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`favoriteGames ${theme}`}>
            favorites here
        </div>
    )
}