"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useContext, useEffect, useState } from "react"


export const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext)
    const [mount, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    },[])

    if(mount){
        return (
            <div className={theme}>{children}</div>
          )
    }
  
}
