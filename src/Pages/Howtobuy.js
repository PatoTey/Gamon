import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Howtobuy(){
    const {theme} = useContext(ThemeContext)
    return (
        <section className={`howtobuysection ${theme}`}>
            <h1>How I buy games?</h1>
            <p>First go to the main page or games page, then select the game you want to buy</p>
            <p>You will be redirected to the game's detail page and there you will find the buy button.</p>
            <p>Fill the buy form and select your prefered payment</p>
            <p>Enjoy your game!</p>
        </section>
    )
}