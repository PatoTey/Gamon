import React, {useState, useEffect, useContext} from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import GameComp from "../Components/GameComp";

export default function Home(){
    const [games, setGames] = useState([])
    const [gamegen, setGamegen] = useState([])
    const {theme} = useContext(ThemeContext)

    useEffect(()=>{
        Axios.get("http://localhost:3001/games/get")
            .then(res => setGames(res.data))

        Axios.get("http://localhost:3001/games/get/genre")
            .then(res => setGamegen(res.data))
    },[])

    const gamelist = games.filter(game=>game.id < 7).map(game => {
        return (
            <GameComp game={game} key={game.id} />
        )
    })

    const gameswithgenre = gamegen.map(game => {
        return (
            <GameComp game={game} key={game.id} />
        )
    })

    const cheapgames = games.filter(game => game.price <= 14.99)
    const cheapgameslist =  cheapgames.map(game => {
        return (
            <GameComp game={game} key={game.id}/>
        )
    })
    
    return (
        <div className={`home ${theme}`}>
            <h1 className="welcome">Welcome to Gamon! Find your desired game here with the best prices!</h1>
            <div className="gamelist">
                {gamelist}
            </div>
            <div className="btncontainer" >
                <Link className="unlink" to="games"><p className="seeallbtn">See All</p></Link>
            </div>
            
            <h1 className="centersubtitle">You will love this genre</h1>
            <div className="gamelist">
                {gameswithgenre}
            </div>  

            <h1 className="centersubtitle">Games under $15</h1>
            <div className="gamelist">
                
                {cheapgameslist &&
                    cheapgameslist
                }
            </div>
        </div>
    )
}