import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

const Stars = ({ star }) => {
  return (
    <div className={styles.container}>
      {Array(star)
        .fill()
        .map((i) => (
          <div key={i}>
            <Image
              src='/star.png'
              width={18}
              height={18}
              priority
              alt='Picture of the star'
            />
          </div>
        ))}
    </div>
  );
};

export default Stars;
