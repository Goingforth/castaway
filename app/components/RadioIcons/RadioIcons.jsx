import React from "react";
import { radioIcons } from "../Data/Data";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./style.module.css";
const RadioIcons = () => {
  return (
    <div className={styles.radioIcons}>
      {radioIcons.map(({ name, id }) => (
        <div key={name} className={styles.radioIcon}>
          <SvgSprite id={id} />
        </div>
      ))}
    </div>
  );
};

export default RadioIcons;
