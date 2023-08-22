import React, { useState } from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("light")

    function toggletheme(){
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}