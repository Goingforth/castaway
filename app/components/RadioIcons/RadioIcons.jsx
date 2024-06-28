import React from "react";
import Image from "next/image";
import { radio1, radio2, radio3, radio4, radio5 } from "@/public/radio";
import styles from "./style.module.css";
const RadioIcons = () => {
  const radioIcons = [
    { name: radio1, icon: radio1 },
    { name: radio2, icon: radio2 },
    { name: radio3, icon: radio3 },
    { name: radio4, icon: radio4 },
    { name: radio5, icon: radio5 },
  ];
  return (
    <div className={styles.radioIcons}>
      {radioIcons.map((icon) => (
        <div className={styles.radioIcon}>
          <Image
            key={icon.name}
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
