import React from "react";
import Comment from "../Comment/Comment";
import styles from "./style.module.css";
import { dataComments } from "../Data/Data";

const Comments = () => {
  return (
    <div className={styles.container}>
      {dataComments.map((dataComment) => (
        <Comment key={dataComment.id} data={dataComment} />
      ))}
    </div>
  );
};

export default Comments;
