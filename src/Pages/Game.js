import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Axios from "axios"
import { Link } from "react-router-dom";
import {FaRegHeart} from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import BackBtn from "../Components/BackBtn";
import { ThemeContext } from "../Context/ThemeContext";
import GameComp from "../Components/GameComp";
import useToggler from "../Hooks/useToggler";
import { CartContext } from "../Context/CartContext";

export default function Game(){
    const [game, setGame] = useState()
    const [games, setGames] = useState([])
    const [on, toggle] = useToggler()
    const {theme} = useContext(ThemeContext)
    const {addtoCart} = useContext(CartContext)
    const params = useParams()
    
    useEffect(()=>{
        Axios.get("http://localhost:3001/games/get")
            .then(res => setGames(res.data))

        Axios.get(`http://localhost:3001/game/get/${params.id}`)
            .then(res => setGame(res.data))
    },[params])   

    const gamelist = games.filter(game=>game.id < 7).map(game => {
        return (
            <GameComp game={game} key={game.id}/>
        )
    }) 

    return (
        <div className={`gs ${theme}`} >
            <BackBtn/>
            {game &&
                <div className="gameselected">
                    <div className="gsintro">
                        <img className="gsimage" src={game.image} alt={game.name} />
                        <div className="gsintrodata">
                            <h1 className="gsname">{game.name}</h1>
                            <p>"{game.genre_name}"</p>
                            <div className="hearticon">
                                { on ? <FaHeart onClick={toggle}/> : <FaRegHeart onClick={toggle}/>}
                            </div>
                        </div>
                    </div>
                    <div className="gsdata">
                        <p>{game.sinopsis}</p>
                        <div className="metacritic">
                            {game.rating}
                        </div>
                    </div>
                        <p className="gsprice">${game.price} USD</p>
                </div>
            }
           <div className="buygame">
                <button onClick={()=>addtoCart(game)} className="buybtn">Add to Cart  <FaCartPlus/></button>
           </div>
           <h1 className="moregames">Check more Games</h1>
            <div className="gamelist">
                {gamelist}
            </div>
            <div className="btncontainer" >
                <Link className="unlink" to="/games"><p className="seeallbtn">See All</p></Link>
            </div>
        </div>
    )
}