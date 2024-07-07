import React from "react";
import Image from "next/image";
import RadioIcons from "../RadioIcons/RadioIcons";
import styles from "./style.module.css";

const Home = () => {
  return (
    <div id='home' className={styles.home}>
      <Image
        src='/home.jpg'
        width={650}
        height={874}
        alt='Picture of home'
        priority
        className={styles.wrapper}
      />
      <Image
        src='/lines.png'
        width={68}
        height={74}
        alt='Picture of lines'
        className={styles.wrapperLines}
      />
      <div className={styles.homeInfo}>
        <div className={styles.homeText}>
          Take your podcast to the next
          <span className={styles.spanText}> level</span>
          <Image
            src='/line.png'
            width={160}
            height={104}
            alt='Picture of line'
            className={styles.wrapperLine}
          />
        </div>

        <div className={styles.homeListenTitle}> Listen on</div>
        <RadioIcons />
      </div>
    </div>
  );
};

export default Home;
