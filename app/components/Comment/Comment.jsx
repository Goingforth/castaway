import React from "react";
import Stars from "../Stars/Stars";
import styles from "./style.module.css";

const Comment = ({ data }) => {
  const { star, comment, author } = data;
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Stars star={star} />
        <div className={styles.comment}>{comment}</div>
        <div className={styles.author}>{author}</div>
      </div>
    </div>
  );
};

export default Comment;
