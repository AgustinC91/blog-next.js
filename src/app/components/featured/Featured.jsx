import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b >Hey, Agust dev here!</b> Discover my stories creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>Lorem ipsum dolor sit emet alim consectetur adipisicing elit.</h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio nesciunt ducimus quo quis eligendi corporis. Provident consequuntur excepturi obcaecati, magni, quam nam vero repudiandae quas dicta voluptatibus, reprehenderit magnam!
            </p>
            <button className={styles.button}>Read More</button>
        </div>
      </div>

    </div>
  )
}
