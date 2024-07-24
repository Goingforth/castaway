"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { imagesSlider } from "../Data/Data";

import styles from "./style.module.css";

const PAGE_WIDTH = 1300;

const Slider = () => {
  const [offset, setOffset] = useState(0);

  const SlideLeft = () => {
    setOffset(offset + 1300);
  };
  const SlideRight = () => {
    setOffset(offset - 1300);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.viewport}>
          <div
            className={styles.view}
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {imagesSlider.map(({ id, path }) => (
              <Image
                key={id}
                src={path}
                width={1300}
                height={740}
                priority={true}
                alt='Picture of the author'
              />
            ))}
          </div>
        </div>
      </div>
      <button onClick={SlideLeft}>Left</button>
      <button onClick={SlideRight}>Right</button>
    </>
  );
};

export default Slider;
