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
import gamedata from "../data/gamedata";
import useLoader from "../Hooks/useLoader";
import Loader from "../Components/Loader";
import { FavoriteContext } from "../Context/FavoriteContext";

export default function Game(){
    const [game, setGame] = useState()
    const [games, setGames] = useState([])
    const [on, toggle] = useToggler()
    const {theme} = useContext(ThemeContext)
    const {addtoCart} = useContext(CartContext)
    const params = useParams()
    const [loading, setLoading] = useLoader()
    const {favoriteGames, addFavorite, removeFavorite} = useContext(FavoriteContext)
    
    // eslint-disable-next-line
    useEffect(()=>{
        async function loadgames(){
            setLoading(true)
            try{
                await Axios.get("http://localhost:3001/games/get")
                    .then(res => setGames(res.data))
            }catch (err){
                setGames(gamedata)
            }finally{
                setLoading(false)
            }
        }
        loadgames()
        //Axios.get(`http://localhost:3001/game/get/${id}`)
        //           .then(res => setGame(res.data))

        // eslint-disable-next-line
    },[params])  

    // eslint-disable-next-line
    useEffect(()=>{
        const gamesel = gamedata.filter(game => game.id === parseInt(params.id))
        setGame(gamesel[0])
       // eslint-disable-next-line
    }, [games])

    // eslint-disable-next-line
    useEffect(()=>{
        if(game?.id){
            const isFavorite = favoriteGames.filter(gamefav => gamefav.id === game.id )
            if(isFavorite.length){
                if(!on){
                    toggle()
                }
            }else{
                if(on){
                    toggle()
                }
            }
        }
    },[favoriteGames, on, toggle, game])


    const gamelist = games.filter(game=>game.id < 7).map(game => {
        return (
            <GameComp game={game} key={game.id}/>
        )
    }) 

    if(loading){
        return <Loader/>
    }

    function handlefavorite(){
        toggle()
        if(!on){
            addFavorite(game)
        }else{
            removeFavorite(game)
        }
    }

    return (
        <div className={`gs ${theme}`} >
            <BackBtn/>
            {game &&
                <div className="gameselected">
                    <div className="gsintro">
                        <img className="gsimage" src={game.image} alt={game.name} />
                        <div className="gsintrodata">
                            <h1 className="gsname">{game.name}</h1>
                            <div className="hearticon">
                                { on ? <FaHeart onClick={handlefavorite} className="redheart" /> : <FaRegHeart onClick={handlefavorite}/>}
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
            <div className="gamelist" style={{padding: "1em"}}>
                {gamelist}
            </div>
            <div className="btncontainer" >
                <Link className="unlink" to="/games"><p className="seeallbtn">See All</p></Link>
            </div>
        </div>
    )
}