import React from "react";
import ButttonEpisodes from "../ButtonEpsodes/ButttonEpisodes";
import Episod from "../Episod/Episod";
import { dataEpisodes } from "../Data/Data";

import styles from "./style.module.css";
const Episodes = () => {
  return (
    <div id='episodes' className={styles.container}>
      <div className={styles.headerDiv}>
        <div className={styles.title}>Latest episodes</div>
        <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <ButttonEpisodes text='View all episodes' />
        </div>
      </div>
      <div className={styles.episodes}>
        {dataEpisodes.map((dataEpisod) => (
          <div key={dataEpisod.episode}>
            <Episod dataEpisod={dataEpisod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
