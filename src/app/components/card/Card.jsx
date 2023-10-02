import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>11.02.2023 - </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea similique alias provident repellat velit neque nam quaerat, consequatur, commodi magni animi! Veniam expedita pariatur soluta ipsa facere eligendi dolor fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat repudiandae sunt?...
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};
