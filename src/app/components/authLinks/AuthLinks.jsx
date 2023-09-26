import Link from "next/link";
import style from "./authLinks.module.css";

export const AuthLinks = () => {

  const status = "notauthenticadted"
  return (
    <>
    {status === "notauthenticadted" ? (
      <Link href="/login">Login</Link>
    ):(
      <>
      <Link href="/write">Write</Link>
      <span className={style.link}>Logout</span>
      </>
    )}
    </>
    )
}
