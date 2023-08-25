import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("light")

    useEffect(()=>{
        setTheme(JSON.parse(localStorage.getItem("theme")))
    },[])

    function toggletheme(){
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", JSON.stringify(newTheme))
    }

    return (
        <ThemeContext.Provider value={{theme, toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}