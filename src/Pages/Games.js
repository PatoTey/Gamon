import React, {useState, useEffect, useContext} from "react";
import Axios from "axios";
import { ThemeContext } from "../Context/ThemeContext";
import GameComp from "../Components/GameComp";
import gamedata from "../data/gamedata";
import useLoader from "../Hooks/useLoader";
import Loader from "../Components/Loader";

export default function Games(){
    const [games, setGames] = useState([])
    const [loading, setLoading] = useLoader()
    const {theme} = useContext(ThemeContext)

    useEffect(()=>{
        setLoading(true)
        async function loadData(){
            try {
                await Axios.get("http://localhost:3001/games/get/all")
                    .then(res => setGames(res.data))
            }catch (err) {
                setGames(gamedata)
            }finally {
                setLoading(false)
            }
        }
        loadData()
        // eslint-disable-next-line
    },[])

    if(loading){
        return <Loader/>
    }

    const gamelist = games.map(game => {
        return (
            <GameComp game={game} key={game.id}/>
        )
    })

    return (
        <section className={`sectiongames ${theme}`}>
            <h1 style={{textAlign:"center"}}>Check out all of our games</h1>
            <div className="gamelist">
                {gamelist ? gamelist : "Loading..."}
            </div>
        </section>
    )
}