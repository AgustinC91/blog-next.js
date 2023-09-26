import Image from "next/image";
import style from "./themeToggle.module.css";

export const ThemeToggle = () => {
  return (
    <div className={style.container}>
      <Image src="/moon.png" alt="" width={14} height={14}/>
      <div className={style.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14}/>
    </div>
  )
}
