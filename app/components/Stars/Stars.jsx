import React from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./style.module.css";

const Stars = ({ star }) => {
  return (
    <div className={styles.container}>
      {Array(star)
        .fill()
        .map((index) => (
          <div key={"star" + index} className={styles.star}>
            <SvgSprite id='star' />
          </div>
        ))}
    </div>
  );
};

export default Stars;
