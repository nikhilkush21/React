import React from 'react'
import { useState } from 'react'
import './change.css'
const ColourChange = () => {
    const [isDark ,setDark]= useState(false);
    const toggleTheme =() => {
        setDark(!isDark);
        console.log(isDark);
    }
  return (
    <div className={isDark? "dark":"light"}>
        <h1>Color Change</h1>
        <h1>{isDark ?"Light Theme" :"Dark Theme"}</h1>
        <button onClick={toggleTheme}>Change To {!isDark? "Light Theme": "Dark Theme"}</button>
    </div>
  )
}

export default ColourChange;