"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { imagesSlider } from "../Data/Data";
import SvgSprite from "../SvgSprite/SvgSprite";

import styles from "./style.module.css";

const SLIDE_WIDTH = 1300;

const Slider = () => {
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);
  const sliderLength = imagesSlider.length;

  const SlideLeft = () => {
    offset !== 0
      ? (setOffset(offset + SLIDE_WIDTH), setIndex(index - 1))
      : setOffset(0);
  };
  const SlideRight = () => {
    offset !== -((sliderLength - 1) * SLIDE_WIDTH)
      ? (setOffset(offset - SLIDE_WIDTH), setIndex(index + 1))
      : (setOffset(-(sliderLength - 1) * SLIDE_WIDTH), setIndex(sliderLength));
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
            {imagesSlider.map(({ id, path }) => {
              return (
                <Image
                  key={id}
                  src={path}
                  width={1300}
                  height={740}
                  priority={true}
                  alt='Picture of the author'
                />
              );
            })}
          </div>
        </div>
        <div
          className={styles.buttonLeft}
          onClick={SlideLeft}
          style={{ opacity: index === 1 ? 0 : 1 }}
        >
          <SvgSprite id='gallery-left' />
        </div>

        <div
          className={styles.buttonRight}
          onClick={SlideRight}
          style={{ opacity: index === sliderLength ? 0 : 1 }}
        >
          <SvgSprite id='gallery-right' />
        </div>

        <div className={styles.counter}>
          {index}/{sliderLength}
        </div>
      </div>
    </>
  );
};

export default Slider;
