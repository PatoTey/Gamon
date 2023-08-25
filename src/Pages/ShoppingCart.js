import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { CartContext } from "../Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ShoppingCart(){
    const {theme} = useContext(ThemeContext)
    const {cart, removefromCart} = useContext(CartContext)

    function calculateTotal(){
        var total = 0
        for(let i=0; i<cart.length; i++){
            total += cart[i].price
        }
        return total
    }

    const cartlist = cart.map(item => {
        return (
            <div className="gamecontainer" key={item.key}>
                <div className="gamecard" >
                    <Link className="unlink" to={`/game/${item.id}`}>
                        <div className="gamelook">
                            <img className="gameimg" src={item.image} alt={item.name}/>
                            <div className="gamedata">
                                <h2 className="gametitle">{item.name}</h2>
                                <h3 className="gameprice"> Price ${item.price} USD</h3>
                            </div>
                        </div>
                    </Link>
                    <div className="hearticon">
                        <FaTrashAlt onClick={()=>removefromCart(item)}/>
                    </div>
                </div>
            </div>
        )
    } )

    const total = calculateTotal()

    return (
        <div className={`shoppingpage ${theme}`}>
            <h3>Here's your cart</h3>
            <p>Your Subtotal: ${total}</p>
            <div className="cart">
                <div className="cartlist">
                    {cartlist}
                </div>
                <form className={`form form-${theme}`}>
                    <label className={`formlabel formlabel-${theme} summary`} aria-label="Summary">Summary</label>
                    <div>
                        <label className={`formlabel formlabel-${theme}`} aria-label="Input your name">Name</label>
                        <input className={`formInput formInput-${theme}`} name="name" type="text" required/>
                    </div>
                    <div>
                        <label className={`formlabel formlabel-${theme}`} aria-label="Input your email">Email</label>
                        <input className={`formInput formInput-${theme}`} name="email" type="email" required/>
                    </div>
                    <button className="formbtn">Continue</button>
                </form>
            </div>
        </div>
    )
}