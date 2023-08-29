import React, {useState, useEffect, useContext} from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import GameComp from "../Components/GameComp";
import gamedata from "../data/gamedata";
import genresdata from "../data/genresdata";
import { getrandom } from "../Functions/functions";
import useLoader from "../Hooks/useLoader";
import Loader from "../Components/Loader";
const shuffle = require("shuffle-array")

export default function Home(){
    const [games, setGames] = useState([])
    const [loading, setLoading] = useLoader()
    const {theme} = useContext(ThemeContext)

    useEffect(()=>{
        setLoading(true)
        async function loadgames(){
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
        //Axios.get("http://localhost:3001/games/get/genre")
        //    .then(res => setGamegen(res.data))
    },[])

    const gamelist = games.filter(game=>game.id < 6).map(game => {
        return (
            <GameComp game={game} key={game.id} />
        )
    })

    const randomnumber = getrandom(genresdata.length)
    const genre = genresdata.filter(genre => genre.id === randomnumber )
    const gameswithgenre = games.filter(game => game.genre_id === genre[0].id)
    shuffle(gameswithgenre)
    const gameswithgenrelist = gameswithgenre.map(game => {
        return (
            <GameComp game={game} key={game.id} />
        )
    })

    const cheapgames = games.filter(game => game.price <= 14.99)
    shuffle(cheapgames)
    cheapgames.splice(5)
    const cheapgameslist =  cheapgames.map(game => {
        return (
            <GameComp game={game} key={game.id}/>
        )
    })

    if(loading){
        return <Loader/>
    }
    
    return (
        <div className={`home ${theme}`}>
            <h1 className="welcome">Welcome to Gamon! Find your desired game here with the best prices!</h1>
            <div className="gamelist">
                {gamelist}
            </div>
            <div className="btncontainer" >
                <Link className="unlink" to="games"><p className="seeallbtn">See All</p></Link>
            </div>
            
            <h1 className="centersubtitle">You will love "{genre[0].genre_name}" games</h1>
            <div className="gamelist">
                {gameswithgenrelist}
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