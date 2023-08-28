import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const CartContext = React.createContext()

function CartContextProvider({children}){
    const [cart, setCart] =  useState([])

    useEffect(()=>{
        const aux = JSON.parse(localStorage.getItem("cart"))
        if(aux === null){
            localStorage.setItem("cart", JSON.stringify([]))
        }else{
            setCart(aux)
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

    function getTotal(){
        var total = 0
        for(let i=0; i<cart.length; i++){
            total += cart[i].price
        }
        return total
    }

    function resetCart(){
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addtoCart, removefromCart, getTotal, resetCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}