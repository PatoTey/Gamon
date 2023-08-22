import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function About(){
    const {theme} = useContext(ThemeContext)
    return (
        <section className={`about ${theme}`}>
            <div className="aboutus">
                <h2>About Gamon</h2>
                <h1>Our mission is to help everyone find and enjoy what videogames offer</h1>
                <p>Games go beyond entertaiment. We are building a secure game markerplate, afordable and sustainable for every gamer.</p>
                <button className={`aboutusbtn ${theme === "light" ? "abtbtnlight": ""}`}>Join our Team</button>
                <small>See Privacy of Candidates</small>
            </div>
            <div className="history">
                <h1>Our History</h1>
                <p>
                    Mr A, Mr B and Mr C, the cofounders of Gamon, are lifetime gamers. Their history started back in 2005 gamming at 
                    night in vacations, playing a variety of games, here all of the ideas of the bussines started to take shape. 
                </p>
                <p>
                    After years of experience in other company and enterprises, in 2020, they decided to join together and make this dream come true
                    about what they loved! GAMES!
                </p>
                <p>
                    Nowadays our site offer service for more than 1 million users and rising. Ofering trust, security and accesibility to 
                    the game market. We are proud of what we have done.
                </p>
            </div>
        </section>
    )
}