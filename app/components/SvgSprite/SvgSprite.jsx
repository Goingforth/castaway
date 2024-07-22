import React from "react";

const SvgSprite = ({ id }) => {
  switch (id) {
    case "instagram":
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z'
            stroke='current'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16 11.3698C16.1234 12.202 15.9812 13.052 15.5937 13.7988C15.2062 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4077 15.9057C10.5771 15.7721 9.80971 15.3799 9.21479 14.785C8.61987 14.19 8.22768 13.4227 8.09402 12.592C7.96035 11.7613 8.09202 10.9097 8.47028 10.1582C8.84854 9.40667 9.45414 8.79356 10.2009 8.40606C10.9477 8.01856 11.7977 7.8764 12.63 7.99982C13.4789 8.1257 14.2648 8.52128 14.8716 9.12812C15.4785 9.73497 15.8741 10.5209 16 11.3698Z'
            stroke='current'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17.5 6.5H17.51'
            stroke='current'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.52981C19.2577 3.83732 18.4573 3.3465 17.567 3.12373C16.6767 2.90097 15.7395 2.957 14.8821 3.28426C14.0247 3.61152 13.2884 4.19421 12.773 4.95352C12.2575 5.71284 11.9877 6.61214 12 7.5298V8.52979C10.2426 8.57536 8.50127 8.18562 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.49979C21 7.21979 20.97 6.93981 20.92 6.66981C21.9406 5.6633 22.6608 4.39252 23 2.9998Z'
            stroke='current'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
            stroke='current'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case "star":
      return (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_2_199)'>
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
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default SvgSprite;
