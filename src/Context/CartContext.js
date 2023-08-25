import React, { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

const CartContext = React.createContext()

function CartContextProvider({children}){
    const [cart, setCart] =  useState([])
    const loadonce = useRef(true)

    useEffect(()=>{
        if(loadonce.current){
            const aux = JSON.parse(localStorage.getItem("cart"))
            if(!aux){
                localStorage.setItem("cart", JSON.stringify(""))
            }
            setCart(aux)
            loadonce.current = false
            console.log("loaded cart once")
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    function addtoCart(item){
        setCart(prev => {
            return [
                    ...prev, 
                    {
                        id : item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        key: nanoid()
                    }
                ]
            }    
        )
    }

    function removefromCart(item){
        const aux = cart.filter(game => game.key !== item.key)
        setCart(aux)
    }

    return (
        <CartContext.Provider value={{cart, addtoCart, removefromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}