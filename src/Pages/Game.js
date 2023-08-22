import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Axios from "axios"
import { Link } from "react-router-dom";
import {FaRegHeart} from "react-icons/fa"
import BackBtn from "../Components/BackBtn";

export default function Game(){
    const [game, setGame] = useState()
    const [games, setGames] = useState([])
    const params = useParams()
    
    useEffect(()=>{
        Axios.get("http://localhost:3001/games/get")
            .then(res => setGames(res.data))

        Axios.get(`http://localhost:3001/game/get/${params.id}`)
            .then(res => setGame(res.data))
    },[params])   

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

    return (
        <div style={{padding: "1em"}}>
            <BackBtn/>
            {game &&
                <div className="gameselected">
                    <img className="gsimage" src={game.image} alt={game.name} />
                        <h1 className="gsname">{game.name}</h1>
                        <div className="hearticon">
                            <FaRegHeart/>
                        </div>
                    <p>{game.sinopsis}</p>
                    <div className="metacritic">
                        {game.rating}
                    </div>

                    <p className="gsprice">${game.price} USD</p>
                </div>
            }
           <div className="buygame">
                <button className="buybtn">Buy now</button>
           </div>
           <h1 className="moregames">Check more Games</h1>
            <div className="gamelist">
                {gamelist}
            </div>
            <div className="btncontainer" >
                <Link className="unlink" to="games"><p className="seeallbtn">See All</p></Link>
            </div>
        </div>
    )
}