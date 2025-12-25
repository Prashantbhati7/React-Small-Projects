import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './themeContext'
import Comp1 from './Comp1';
function ThemeSwitcher() {
    const [theme,settheme] = useState("light");

    const todark = ()=>{

        settheme("dark");
    }
    const tolight = ()=>{
        settheme("light");
    }
    useEffect(()=>{
        document.querySelector("html").classList.remove('light','dark');
        document.querySelector("html").classList.add(theme);
    },[theme])
  return (
    <ThemeProvider value={{theme,todark,tolight}}>
        <div className="min-h-screen bg-white dark:bg-black ">
            <div className="switch "> <button className='bg-blue-700 rounded-xl px-5 py-1 ' onClick={()=> (theme =="dark" ? tolight() : todark() )}> change Theme </button> </div>
            <Comp1/>
        </div>
    </ThemeProvider>
  )
}

export default ThemeSwitcher
