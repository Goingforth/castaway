"use client";
import React from "react";
import { useState } from "react";
import ButttonEpisodes from "../ButtonEpisodes/ButttonEpisodes";
import Episod from "../Episod/Episod";
import { dataEpisodes } from "../Data/Data";

import styles from "./style.module.css";
const Episodes = () => {
  const [toggle, setToggle] = useState(0);
  const [allView, setAllView] = useState(false);
  const [gears, setGears] = useState(false);
  const [tips, setTips] = useState(false);

  const viewDataEpisodes = dataEpisodes.filter(({ block }) =>
    !gears && !tips
      ? block
      : (gears && block === "Gear") || (tips && block === "Tips & Tricks")
  );

  return (
    <div id='episodes' className={styles.container}>
      <div className={styles.headerDiv}>
        <div className={styles.title}>Latest episodes</div>
        <div className={styles.buttons}>
          <ButttonEpisodes
            text='View all episodes'
            onClick={() => setAllView(!allView)}
            border='left'
            active={allView}
          />
          <ButttonEpisodes
            text='Gear'
            border='none'
            onClick={() => {
              setGears(!gears), setToggle(0);
            }}
            active={gears}
          />
          <ButttonEpisodes
            text='Tips & Tricks'
            onClick={() => {
              setTips(!tips), setToggle(0);
            }}
            border='right'
            active={tips}
          />
        </div>
      </div>
      {allView ? (
        <div className={styles.episodes}>
          {viewDataEpisodes.map((dataEpisod) => (
            <div key={dataEpisod.episode}>
              <Episod dataEpisod={dataEpisod} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.tabs}>
          <ul className={styles.tabsLine}>
            {viewDataEpisodes.map(({ episode }, index) => (
              <li
                key={episode}
                className={styles.tabsLineItem}
                style={{
                  color:
                    index === toggle
                      ? "var(--color-blue)"
                      : "var(--color-white)",
                }}
                onClick={() => {
                  console.log(index);
                  setToggle(index);
                }}
              >
                Episode {episode}
              </li>
            ))}
          </ul>
          {viewDataEpisodes.length ? (
            <Episod dataEpisod={viewDataEpisodes[toggle]} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Episodes;
