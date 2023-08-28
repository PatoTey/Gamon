import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { CartContext } from "../Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ShoppingCart(){
    const {theme} = useContext(ThemeContext)
    const {cart, removefromCart, getTotal} = useContext(CartContext)

    const cartlist = cart.map(item => {
        return (
            <div className="gamecontainer" key={item.key}>
                <div className="gamecard" >
                    <div className="gamelook">
                        <img className="gameimg" src={item.image} alt={item.name}/>
                        <div className="gamedata">
                            <h2 className="gametitle">{item.name}</h2>
                            <h3 className="gameprice"> Price ${item.price} USD</h3>
                        </div>
                    </div>
                    <div className="hearticon">
                        <FaTrashAlt onClick={()=>removefromCart(item)}/>
                    </div>
                </div>
            </div>
        )
    } )

    const total = getTotal()
    return (
        <div className={`shoppingpage ${theme}`}>
            {cartlist.length ? <> 
            <h3>Here's your cart</h3>
            <p>Your Subtotal: ${total.toFixed(2)}</p>
            <div className="cart">
                <div className="cartlist">
                    {cartlist}
                </div>
                <div className={`summary`}>
                    <h1>Summary</h1>
                    <p>{cart.length} products - ${total.toFixed(2)}</p>
                    <p style={{marginBottom: "1em"}}>Service Fee - $6.99</p>
                    <div className="btncontainer">
                        <Link to="/checkout" state={{allowed: "yes"}} className="unlink"><button className="buybtn">Continue with purchase</button></Link>
                    </div>
                    <small style={{marginTop: "1em"}}>Service fee, is charged for paying the product, administrative and procesing services</small>
                </div>
            </div>
            
            </>: <h1>Your Cart is empty!</h1>}
        </div>
    )
}