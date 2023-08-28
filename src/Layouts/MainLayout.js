import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Infosection from "../Components/Infosection";
import { ThemeContextProvider } from "../Context/ThemeContext";
import { CartContextProvider } from "../Context/CartContext";
import { FavoriteContextProvider } from "../Context/FavoriteContext";

export default function MainLayout(){
    return (
        <div>
            <ThemeContextProvider>
                <CartContextProvider>
                    <FavoriteContextProvider>
                        <Header/>
                        <Outlet/>
                        <Infosection/>
                        <Footer/>
                    </FavoriteContextProvider>
                </CartContextProvider>
            </ThemeContextProvider>
        </div>
    )
}