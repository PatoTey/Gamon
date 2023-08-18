import React, {useState, useEffect} from "react";
import Axios from "axios"

export default function Home(){
    const [games, setGames] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/games/get")
            .then(res => setGames(res.data))
    },[])

    const gamelist = games.map(game => {
        return (
            <div className="game" key={game.id}>
                <img className="gameimg" src={game.image} alt={game.name}/>
                <div className="gamedata">
                    <h2>{game.name}</h2>
                    <h3> for ${game.price}</h3>
                </div>
            </div>
        )
    })

    return (
        <div className="home">
            {gamelist}
        </div>
    )
}