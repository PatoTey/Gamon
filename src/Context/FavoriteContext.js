import React, { useState, useEffect } from "react";

const FavoriteContext = React.createContext()

function FavoriteContextProvider({children}){
    const [favoriteGames, setFavoriteGames] = useState([])
    console.log(favoriteGames, "favs")
    useEffect(()=>{

        const storaged = JSON.parse(localStorage.getItem("favorites"))
        if(storaged === null){
            localStorage.setItem("favorites", JSON.stringify([]))
        }else{
            setFavoriteGames(storaged)
        }
        
    },[])

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favoriteGames))
    },[favoriteGames])

    function addFavorite(game){
        setFavoriteGames(prev =>{
            return [
                ...prev,
                {
                    id: game.id,
                    name: game.name,
                    image: game.image,
                    price: game.price
                }
            ]
        })
    }

    function removeFavorite(game){
        const aux = favoriteGames.filter(gamefav=> game.id !== gamefav.id)
        setFavoriteGames(aux)
    }

    return (
        <FavoriteContext.Provider value={{favoriteGames, addFavorite, removeFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export {FavoriteContext, FavoriteContextProvider}