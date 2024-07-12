import React from "react";
import Image from "next/image";
import { radioIcons } from "../Data/Data";
import styles from "./style.module.css";
const RadioIcons = () => {
  return (
    <div className={styles.radioIcons}>
      {radioIcons.map((icon) => (
        <div key={icon.name} className={styles.radioIcon}>
          <Image
            src={icon.icon}
            width={32}
            height={32}
            alt='Picture of icon radio'
          />
        </div>
      ))}
    </div>
  );
};

export default RadioIcons;
