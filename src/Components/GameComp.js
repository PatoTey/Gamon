import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import useToggler from "../Hooks/useToggler";

export default function GameComp({game}){
    const [on, toggle] = useToggler()
    
    useEffect(()=>{
        
    },[])

    function handlefavorite(){
        toggle() 
    }

    return(
        <div className="gamecontainer">
            <div className="gamecard" >
                <Link className="unlink" to={`/game/${game.id}`} key={game.id}>
                    <div className="gamelook">
                        <img className="gameimg" src={game.image} alt={game.name}/>
                        <div className="gamedata">
                            <h2 className="gametitle">{game.name}</h2>
                            <h3 className="gameprice"> for ${game.price} USD</h3>
                         </div>
                    </div>
                </Link>
                <div className="hearticon">
                    { on ? <FaHeart onClick={handlefavorite} className="redheart" /> : <FaRegHeart onClick={handlefavorite}/>}
                </div>
            </div>
        </div>
    )
}