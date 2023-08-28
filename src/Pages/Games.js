import React, {useState, useEffect, useContext} from "react";
import Axios from "axios";
import { ThemeContext } from "../Context/ThemeContext";
import GameComp from "../Components/GameComp";

export default function Games(){
    const [games, setGames] = useState([])
    const {theme} = useContext(ThemeContext)

    useEffect(()=>{
        Axios.get("http://localhost:3001/games/get/all")
            .then(res => setGames(res.data))
    },[])

    const gamelist = games.map(game => {
        return (
            <GameComp game={game}/>
        )
    })

    return (
        <section className={`sectiongames ${theme}`}>
            <h1>Check out all of our games</h1>
            <div className="gamelist">
                {gamelist ? gamelist : "Loading..."}
            </div>
        </section>
    )
}