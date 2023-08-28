import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FavoriteContext } from "../Context/FavoriteContext";
import GameComp from "../Components/GameComp";

export default function FavoriteGames(){
    const {theme} = useContext(ThemeContext)
    const {favoriteGames} = useContext(FavoriteContext)

    const favoritelist = favoriteGames.map(game => {
        return (
            <GameComp game={game}/>
        )
    })
    return (
        <div className={`favoriteGames ${theme}`}>
            { favoriteGames.length ? <>
            <h1>My Wishlist</h1>
            <div className="gamelist">
                {favoritelist}
            </div>
            </> : <h1 style={{textAlign: "center"}}>Your Wishlist is empty!</h1>}
        </div>
    )
}