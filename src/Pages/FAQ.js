import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import faqsdata from "../data/faqsdata";
import { ThemeContext } from "../Context/ThemeContext";
import BackBtn from "../Components/BackBtn";

export default function FAQ(){
    const params = useParams()
    const {theme} = useContext(ThemeContext)
    const faq = faqsdata.filter(faqa => faqa.id === parseInt(params.id))
    
    return (
        <div className={`faqpage ${theme}`}>
            <BackBtn/>
            <h3>{faq[0].question}</h3>
            <p>{faq[0].answer} </p>
        </div>
    )
}