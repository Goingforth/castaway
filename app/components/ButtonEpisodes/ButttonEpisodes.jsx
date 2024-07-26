import React from "react";
import styles from "./style.module.css";
const ButttonEpisodes = ({ text, onClick, border, active }) => {
  return (
    <div>
      <button
        type='button'
        className={
          styles.button +
          " " +
          (border === "none"
            ? styles.borderNone
            : border === "left"
            ? styles.borderLeft
            : border === "right"
            ? styles.borderRight
            : "none")
        }
        onClick={onClick}
        border={border}
        style={{
          backgroundColor: !active
            ? "var(--color-gray_back)"
            : "var(--color-blue)",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default ButttonEpisodes;
