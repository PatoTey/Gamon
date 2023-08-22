import React, {useState, useEffect, useContext} from "react";
import Axios from "axios"
import {FaRegHeart} from "react-icons/fa"
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

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

    const gameswithgenre = gamegen.map(game => {
        return (
            <Link className="unlink" to={`/game/${game.id}`} key={game.id}>
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
            </Link>
        )
    })

    const cheapgames = games.filter(game => game.price <= 14.99)
    const cheapgameslist =  cheapgames.map(game => {
        return (
            <Link className="unlink" to={`/game/${game.id}`} key={game.id}>
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
            </Link>
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