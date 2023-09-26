import { CardList } from "./components/cardList/CardList";
import { CategoryList } from "./components/categorylist.jsx/CategoryList";
import { Featured } from "./components/featured/Featured";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import { Navbar } from "./components/navbar/Navbar";
import styles from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="style.container">
        <Featured />
        <CategoryList />
      <div className="style.content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
