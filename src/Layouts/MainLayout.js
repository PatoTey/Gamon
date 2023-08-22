import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Infosection from "../Components/Infosection";
import { ThemeContextProvider } from "../Context/ThemeContext";

export default function MainLayout(){
    return (
        <div>
            <ThemeContextProvider>
                <Header/>
                <Outlet/>
                <Infosection/>
                <Footer/>
            </ThemeContextProvider>
        </div>
    )
}