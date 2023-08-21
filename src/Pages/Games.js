import React, {useState, useEffect} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {FaRegHeart} from "react-icons/fa"

export default function Games(){
    const [games, setGames] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/games/get/all")
            .then(res => setGames(res.data))
    },[])

    const gamelist = games.map(game => {
        return (
            <Link className="unlink" to={`/game/${game.id}`} key={game.id}>
                <div className="gamecard" >
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
            </Link>
        )
    })

    return (
        <section className="sectiongames">
            <h1>Check out all of our games</h1>
            <div className="gamelist">
                {gamelist ? gamelist : "Loading..."}
            </div>
        </section>
    )
}