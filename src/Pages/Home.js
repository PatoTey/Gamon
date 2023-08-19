import React, {useState, useEffect} from "react";
import Axios from "axios"
import {FaRegHeart} from "react-icons/fa"

export default function Home(){
    const [games, setGames] = useState([])
    const [gamegen, setGamegen] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/games/get")
            .then(res => setGames(res.data))

        Axios.get("http://localhost:3001/games/get/genre")
            .then(res => setGamegen(res.data))
    },[])


    const gamelist = games.map(game => {
        return (
            <div className="gamecard" key={game.id}>
                <div className="gamelook">
                    <img className="gameimg" src={game.image} alt={game.name}/>
                    <div className="gamedata">
                        <h2 className="gametitle">{game.name}</h2>
                        <h3> for ${game.price} USD</h3>
                    </div>
                </div>
                <div className="hearticon">
                    <FaRegHeart/>
                </div>
            </div>
        )
    })

    const gameswithgenre = gamegen.map(game => {
        return (
            <div className="gamecard" key={game.id}>
                <div className="gamelook">
                    <img className="gameimg" src={game.image} alt={game.name}/>
                    <div className="gamedata">
                        <h2 className="gametitle">{game.name}</h2>
                        <h3> for ${game.price} USD</h3>
                    </div>
                </div>
                <div className="hearticon">
                    <FaRegHeart/>
                </div>
            </div>
        )
    })

    return (
        <div className="home">
            <div className="gamelist">
                {gamelist}
                
            </div>
            <div className="btncontainer" >
                <p className="seeallbtn">See All</p>
            </div>
            
            <div className="gamelist">
                <p>You will love this genre</p>
                {gameswithgenre}
            </div>
        </div>
    )
}