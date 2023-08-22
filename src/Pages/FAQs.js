import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import faqsdata from "../data/faqsdata";
import FAQ from "../Components/FAQ";

export default function FAQs(){
    const {theme} = useContext(ThemeContext)

    const faqlist = faqsdata.map(faq => {
        return (
            <div className={`faq ${theme=== "light" ? "faqborderlight" : ""}`} key={faq.id}>
                <FAQ question={faq.question} answer={faq.answer}/>
            </div>
        )
    })

    return (
        <section className={`faqs ${theme}`}>
            {faqlist}
        </section>
    )
}