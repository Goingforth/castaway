import React from "react";
import styles from "./style.module.css";
const ButttonEpisodes = ({ text, onClick }) => {
  return (
    <div>
      <button type='button' className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ButttonEpisodes;
