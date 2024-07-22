import React from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./style.module.css";

const Stars = ({ star }) => {
  return (
    <div className={styles.container}>
      {Array(star)
        .fill()
        .map((index) => (
          <div key={"star" + index} className={styles.star}>
            <SvgSprite id='star' />
            {/* <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_2_199)'>
                <path
                  d='M9.01265 13.822L13.1626 16.332C13.9226 16.792 14.8526 16.112 14.6526 15.252L13.5526 10.532L17.2226 7.35201C17.8926 6.77201 17.5326 5.67201 16.6526 5.60201L11.8226 5.19201L9.93265 0.732012C9.59265 -0.0779883 8.43265 -0.0779883 8.09265 0.732012L6.20265 5.18201L1.37265 5.59201C0.492646 5.66201 0.132646 6.76201 0.802646 7.34201L4.47265 10.522L3.37265 15.242C3.17265 16.102 4.10265 16.782 4.86265 16.322L9.01265 13.822Z'
                  fill='current'
                />
              </g>
              <defs>
                <clipPath id='clip0_2_199'>
                  <rect
                    width='18'
                    height='17'
                    fill='white'
                    transform='translate(0 0.124512)'
                  />
                </clipPath>
              </defs>
            </svg> */}
          </div>
        ))}
    </div>
  );
};

export default Stars;
