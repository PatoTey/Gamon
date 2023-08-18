import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}