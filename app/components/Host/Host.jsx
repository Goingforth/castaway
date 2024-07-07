import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

const Host = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image
          src='/arrow.png'
          width={112}
          height={112}
          alt='Picture of the arrow right'
        />
        <div className={styles.infoTitle}>
          Meet your host <p className={styles.name}>Jacob Paulaner</p>
        </div>
        <div className={styles.infoText}>
          <div>
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </div>
          <div>
            He’s here to help you level up your game by sharing everything he’s
            learned along the way.
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <Image
          src='/host.jpg'
          width={650}
          height={743}
          alt='Picture of the host'
        />
      </div>
    </div>
  );
};

export default Host;
