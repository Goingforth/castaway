"use client";
import React from "react";
import { useState } from "react";
import ButttonEpisodes from "../ButtonEpisodes/ButttonEpisodes";
import Episod from "../Episod/Episod";
import { dataEpisodes } from "../Data/Data";

import styles from "./style.module.css";
const Episodes = () => {
  const gtyEpisodes = dataEpisodes.length;
  const [toggle, setToggle] = useState(gtyEpisodes);
  const [allView, setAllView] = useState(false);

  return (
    <div id='episodes' className={styles.container}>
      <div className={styles.headerDiv}>
        <div className={styles.title}>Latest episodes</div>
        <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <ButttonEpisodes
            text='View all episodes'
            onClick={() => setAllView(!allView)}
          />
        </div>
      </div>
      {allView ? (
        <div className={styles.episodes}>
          {dataEpisodes.map((dataEpisod) => (
            <div key={dataEpisod.episode}>
              <Episod dataEpisod={dataEpisod} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.tabs}>
          <ul className={styles.tabsLine}>
            {dataEpisodes.map(({ episode }) => (
              <li
                key={episode}
                className={styles.tabsLineItem}
                style={{
                  color:
                    episode === toggle
                      ? "var(--color-blue)"
                      : "var(--color-white)",
                }}
                onClick={() => {
                  setToggle(episode);
                }}
              >
                Episode {episode}
              </li>
            ))}
          </ul>
          <Episod dataEpisod={dataEpisodes[gtyEpisodes - toggle]} />
        </div>
      )}
    </div>
  );
};

export default Episodes;
