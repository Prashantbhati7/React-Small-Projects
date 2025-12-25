import { createContext, useContext } from "react";

export const themeContext = createContext({
    theme:"",
    todark: ()=>{},
    tolight: ()=>{},
})


export const useTheme = () => useContext(themeContext);

export const ThemeProvider = themeContext.Provider;