import React from "react";
import { Link } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa"

export default function BackBtn(){
    return (
        <div style={{marginBottom: "1em"}}>
            <Link to=".." className="unlink"> <FaArrowLeft/> Go back</Link>
        </div>
    )
}