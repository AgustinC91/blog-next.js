import Image from "next/image";
import styles from "./singlePage.module.css";
import { Menu } from "../components/menu/Menu";
import { Comments } from "../components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur 
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident aliquid enim dignissimos veniam harum minima ratione
              obcaecati molestiae exercitationem perferendis? Nisi quaerat est
              corrupti cum reprehenderit maiores id totam voluptatum?
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              recusandae asperiores maxime cumque nihil accusantium, ipsa
              deleniti aut alias. Perferendis dignissimos possimus repellat
              cumque aut dolores, nam hic veniam unde!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nostrum unde nesciunt temporibus odio, ullam reprehenderit et
              itaque eos voluptatem, esse, minima delectus sint architecto vero
              ad veritatis nihil accusamus?
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            quidem corrupti? Deserunt cum doloremque enim ipsam aliquid iste
            tempore, eius blanditiis saepe nostrum unde laudantium at excepturi
            modi earum maiores!
          </p>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
