import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
const Episod = ({ dataEpisod }) => {
  const { image, block, episode, title, info } = dataEpisod;

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={image}
          width={389}
          //   height={874}
          alt='Picture of home'
          className={styles.wrapper}
        />
      </div>
    </div>
  );
};

export default Episod;
