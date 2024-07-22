import React from "react";
import Stars from "../Stars/Stars";
import styles from "./style.module.css";

const Comment = ({ data }) => {
  const { id, star, comment, author, index } = data;
  return (
    <div className={styles.container}>
      <Stars star={star} />
      <div className={styles.comment}>{comment}</div>
      <div className={styles.author}>{author}</div>
    </div>
  );
};

export default Comment;
