import React from "react";
import Image from "next/image";
import ButttonEpisodes from "../ButtonEpisodes/ButttonEpisodes";
import styles from "./style.module.css";
const Episod = ({ dataEpisod }) => {
  const { image, block, episode, title, info } = dataEpisod;

  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={389}
        alt='Picture of episod'
        className={styles.wrapper}
      />
      <div className={styles.infoBlock}>
        <div className={styles.block}>{block}</div>
        <div className={styles.info}>
          <div className={styles.episode}>Episode {episode}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.infoText}>{info}</div>
          <ButttonEpisodes text='View Episode Details' />
        </div>
      </div>
    </div>
  );
};

export default Episod;
