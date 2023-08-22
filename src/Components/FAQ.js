import React from "react";
import useToggler from "../Hooks/useToggler";
import {FaArrowRight} from "react-icons/fa"
import {FaArrowDown} from "react-icons/fa"

export default function FAQ({question,answer}){
    const [on, toggle] = useToggler()
    return (
        <div onClick={()=>toggle()}>
            <h3 className="faqquestion">{on ? <FaArrowDown style={{marginRight: "1em"}}/> : <FaArrowRight style={{marginRight: "1em"}}/>}{question}</h3>
            { on &&
                <p>{answer}</p>
            }
        </div>
    )
}