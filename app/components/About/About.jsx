import styles from "./style.module.css";
import React from "react";
import Host from "../Host/Host";
import Submit from "../Submit/Submit";
import Comments from "../Comments/Comments";

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <Host />
      <Submit />
      <Comments />
    </div>
  );
};

export default About;
