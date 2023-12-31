"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const ThemeToggle = () => {

  const { theme, toggle } = useContext(ThemeContext);
  
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="" width={14} height={14}/>
      <div className={styles.ball} style={theme === "dark" ? {left: 1, backgroundColor:"white"} : { right: 1, backgroundColor:"0f172a" }}></div>
      <Image src="/sun.png" alt="" width={14} height={14}/>
    </div>
  )
}
