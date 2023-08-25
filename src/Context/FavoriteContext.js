import React, { useState, useEffect } from "react";

const FavoriteContext = React.createContext()

function FavoriteContextProvider({children}){
    const [favoriteGames, setFavoriteGames] = useState([])
    
    useEffect(()=>{
        setFavoriteGames(JSON.parse(localStorage.getItem("favorites")))
    },[])

    return (
        <FavoriteContext.Provider value={{favoriteGames, setFavoriteGames}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteContext, FavoriteContextProvider}