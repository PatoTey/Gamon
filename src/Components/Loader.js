import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { AiOutlineLoading } from "react-icons/ai"

export default function Loader(){
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`loader ${theme}`} >
            <AiOutlineLoading className="loadingbar"/>
            <p>Loading resources...</p>
        </div>
    )
}