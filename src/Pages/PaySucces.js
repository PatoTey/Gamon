import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

export default function PaySucces(){
    const {theme} = useContext(ThemeContext)
    const location = useLocation()


    if(!location.state?.order){
        return <Navigate to={"/"}/>
    }


    const itemsbought = location.state.order.purchase_units.map(item=>{
        return (
            <div key={item.reference_id} className="receiptitem">
                <p>Name: {item.description}</p>
                <p>Amount: ${item.amount.value} {item.amount.currency_code} </p>
                -------------------------------
            </div>
        )
    })

    const prices = location.state.order.purchase_units.map(item => item.amount.value)
    const total = prices.reduce((sum,a) => sum + parseFloat(a),0)
    return (
        <section className={`thankpage ${theme}`}>
            { location.state.order ? <>
            <h1>Thank you for using Gamon!</h1>
            <p>Your game key will be sent to {location.state.email}</p>
            <p> Here's your receipt</p>
            <div className={`receipt th${theme}`}>
                <h1 style={{margin: "0"}}>Gamon</h1>
                <p>Created at: {location.state.order.create_time}</p>
                <p>Customer: {location.state.order.payer.name.given_name} {location.state.order.payer.name.surname}</p>
                <p>Email: {location.state.order.payer.email_address} </p>
                <h2>Items ({location.state.order.purchase_units.length}): </h2>
                {itemsbought}
                <p>Total: ${total} </p>
            </div>
            </>
            : <h1>Nothing to see Here</h1>}
        </section>
    )
}