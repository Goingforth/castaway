import React from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./style.module.css";

const Stars = ({ star }) => {
  const arrayStar = Array(star).fill(0);

  return (
    <div className={styles.container}>
      {arrayStar.map((item, index) => (
        <div key={"star" + index} className={styles.star}>
          <SvgSprite id='star' />
        </div>
      ))}
    </div>
  );
};

export default Stars;
