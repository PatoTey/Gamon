import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from "../Context/CartContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export default function PayPal({email}){
    const paypal = useRef()
    const {cart, resetCart} = useContext(CartContext)
    const navigate = useNavigate()
    console.log(email)
    console.log(email.email)
    useEffect(()=>{
        const itemlist = cart.map(item => {
            return {
                description: item.name,
                amount: {
                    currency_code: "USD",
                    value: item.price
                },
                reference_id: item.key
            }
        })
        itemlist.push(
            {
                description: "Service Fee",
                amount: {
                    currency_code: "USD",
                    value: 6.99
                },
                reference_id: "SERFEE" + nanoid()
            }
        )
        window.paypal.Buttons({
            createOrder: (data, actions, err) =>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: itemlist
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                resetCart()
                navigate("/paysuccess", {state: {
                    email: email.email,
                    order: order
                }})
            },
            onError: (err) =>{
                console.log(err)
            }
        }).render(paypal.current)
    },[cart, email, navigate, resetCart])

    return (
        <div className="paypal">
            <div ref={paypal}></div>
        </div>
    )
}