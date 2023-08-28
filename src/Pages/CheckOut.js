import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { CartContext } from "../Context/CartContext";
import PayPal from "../Components/PayPal";
import { useLocation, Navigate } from "react-router-dom";


export default function CheckOut(){
    const {theme} = useContext(ThemeContext)
    const {cart, getTotal} = useContext(CartContext)
    const [checkout, setCheckout] = useState(false)
    const [email, setEmail] = useState({
        email: "",
        emailconfirm: ""
    })
    const location = useLocation()

    if(!location.state?.allowed){
        return <Navigate to={"/"}/>
    }

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
                </div>
            </div>
        )
    } )

    function handleChange(e){
        setEmail(prev=> ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        setCheckout(true)
    }

    const total =  getTotal()
    return ( 
        <section className={`sectioncheckout ${theme}`}>
            <div className="cartlist">
                {cartlist}
            </div>
            <div className="checkout">
                <div>
                    <h3 style={{textAlign: "center", padding: "1em", margin:"0"}}>SubTotal + Service Fee: {total.toFixed(2)} + 6.99</h3>
                    <h2 style={{textAlign: "center", padding: "1em", margin:"0"}}>Total ${parseFloat(total.toFixed(2)) + 6.99} USD </h2>
                </div>
                <div className="advice">
                    <h3>Please use this when trying paypal demo</h3>
                    <p> EMAIL: gamonclient@demo.com</p>
                    <p> PASSWORD: gamonclient1234</p>
                </div>
                { !checkout ? 
                    <form className={`form`} onSubmit={handleSubmit}>
                        <div className="formemailcontainer">
                            <label className={`formlabel`} aria-label="Input your email">Email</label>
                            <input className={`formInput formInput-${theme}`} name="email" type="email" onChange={handleChange} required/>

                            <label className={`formlabel`} aria-label="Confirm your email">Email Confirmation</label>
                            <input className={`formInput formInput-${theme}`} name="emailconfirm" type="email" onChange={handleChange} required/>
                            <small>We need your email to send you the game key</small>
                        </div>
                        <button className="formbtn">Continue</button>
                    </form>
                : <PayPal email={email} />}
            </div>
        </section>
    )
}