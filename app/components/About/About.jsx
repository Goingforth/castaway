import styles from "./style.module.css";
import React from "react";
import Host from "../Host/Host";
import Submit from "../Submit/Submit";

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <Host />
      <Submit />
    </div>
  );
};

export default About;
