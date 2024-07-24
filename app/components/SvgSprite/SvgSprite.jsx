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
    case "radio1":
      return (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_2_65)'>
            <path
              d='M15.9994 0.0527344C7.19005 0.0527344 0.0483398 7.19426 0.0483398 16.0036C0.0483398 24.8133 7.19005 31.9543 15.9994 31.9543C24.8097 31.9543 31.9506 24.8133 31.9506 16.0036C31.9506 7.19483 24.8097 0.0534963 15.9992 0.0534963L15.9994 0.0527344ZM23.3144 23.0584C23.0287 23.527 22.4154 23.6756 21.9468 23.388C18.2017 21.1004 13.487 20.5823 7.93463 21.8508C7.39958 21.9727 6.86624 21.6375 6.74434 21.1023C6.62186 20.567 6.95577 20.0337 7.49215 19.9118C13.5683 18.523 18.7803 19.1213 22.9849 21.6908C23.4535 21.9784 23.6021 22.5899 23.3144 23.0584ZM25.2668 18.7146C24.9068 19.3004 24.1411 19.4851 23.5563 19.1251C19.2687 16.4891 12.7329 15.7259 7.66148 17.2653C7.00377 17.464 6.3091 17.0933 6.10948 16.4367C5.91139 15.779 6.28224 15.0857 6.93882 14.8857C12.7318 13.128 19.9335 13.9794 24.8573 17.0051C25.4421 17.3651 25.6268 18.1308 25.2668 18.7148V18.7146ZM25.4344 14.192C20.2935 11.1384 11.8116 10.8577 6.9032 12.3474C6.11501 12.5864 5.28148 12.1415 5.04263 11.3533C4.80377 10.5647 5.24834 9.73178 6.0371 9.49216C11.6716 7.78169 21.0382 8.11216 26.9571 11.6259C27.6676 12.0466 27.9 12.9623 27.479 13.6703C27.06 14.3792 26.1419 14.6129 25.4352 14.192H25.4344Z'
              fill='#1ED760'
            />
          </g>
          <defs>
            <clipPath id='clip0_2_65'>
              <rect width='32' height='32' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );
    case "radio2":
      return (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.6592 30C23.3912 30 29.6592 23.732 29.6592 16C29.6592 8.26801 23.3912 2 15.6592 2C7.92719 2 1.65918 8.26801 1.65918 16C1.65918 23.732 7.92719 30 15.6592 30Z'
            fill='white'
          />
          <path
            d='M16.1863 0C7.61062 0 0.65918 7.16334 0.65918 16C0.65918 24.8366 7.61062 32 16.1863 32C24.7621 32 31.7135 24.8366 31.7135 16C31.7135 7.16334 24.7621 0 16.1863 0ZM20.9963 16.148C20.9963 13.4927 18.9072 11.3397 16.3299 11.3397C13.7531 11.3397 11.664 13.4923 11.664 16.148C11.664 18.8033 13.7531 20.9559 16.3299 20.9559V23.7036C12.2806 23.7036 8.9975 20.321 8.9975 16.148C8.9975 11.9751 12.2802 8.5924 16.3299 8.5924C20.3797 8.5924 23.6625 11.9751 23.6625 16.148H20.9963ZM25.4955 16.148C25.4955 10.9321 21.3922 6.7036 16.3299 6.7036C11.2682 6.7036 7.16483 10.9321 7.16483 16.148C7.16483 21.3638 11.2682 25.592 16.3299 25.592V28.7404C9.58097 28.7404 4.10941 23.1024 4.10941 16.148C4.10941 9.19327 9.58097 3.5556 16.3299 3.5556C23.0793 3.5556 28.5506 9.19327 28.5506 16.148H25.4955Z'
            fill='#F43E37'
          />
        </svg>
      );
    case "radio3":
      return (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_2_33)'>
            <path
              d='M31.6593 16C31.6593 24.8889 24.5267 32 15.8923 32C7.25806 32 0.000244141 24.8889 0.000244141 16C0.000244141 7.11112 7.13292 0 15.7672 0C24.4015 0 31.6593 7.11112 31.6593 16Z'
              fill='url(#paint0_linear_2_33)'
            />
            <path
              d='M4.67003 17.069C4.67614 17.0161 4.71365 16.9789 4.76091 16.9789C4.80646 16.9789 4.8442 17.0161 4.85127 17.0687L5.0476 18.3457L4.85127 19.601C4.84397 19.6536 4.80669 19.6902 4.76091 19.6902C4.71362 19.6902 4.67614 19.6533 4.67003 19.6005L4.50439 18.3457L4.67003 17.069Z'
              fill='white'
            />
            <path
              d='M5.59841 16.1888C5.64615 16.1888 5.68488 16.2267 5.69268 16.2815L5.94575 18.3458L5.69243 20.3649C5.68465 20.4196 5.6459 20.4576 5.59841 20.4576C5.55019 20.4576 5.51048 20.4185 5.50414 20.3644L5.28149 18.3458L5.50414 16.2815C5.51071 16.2279 5.55042 16.1888 5.59841 16.1888Z'
              fill='white'
            />
            <path
              d='M9.03029 14.5498C9.03466 14.4534 9.11025 14.3774 9.2016 14.3774C9.29241 14.3774 9.36766 14.4534 9.37308 14.5498L9.57352 18.3476L9.37308 20.8022V20.8015C9.36774 20.8977 9.29241 20.9736 9.2016 20.9736C9.11025 20.9736 9.03492 20.8979 9.03029 20.802L8.85303 18.3476L9.03029 14.5498Z'
              fill='white'
            />
            <path
              d='M7.25224 15.8302C7.25786 15.7543 7.3151 15.6975 7.38525 15.6975C7.45467 15.6975 7.51191 15.7543 7.51802 15.8297L7.74504 18.3466L7.51802 20.7812C7.51191 20.8566 7.45467 20.9135 7.38525 20.9135C7.31508 20.9135 7.25759 20.8566 7.25224 20.7812L7.05249 18.3466L7.25224 15.8302Z'
              fill='white'
            />
            <path
              d='M11.2565 20.7619C11.2519 20.8806 11.1598 20.9733 11.0466 20.9733C10.9325 20.9733 10.8402 20.8803 10.8366 20.7627L10.6824 18.3485L10.8366 13.2928C10.8403 13.1741 10.9326 13.0812 11.0468 13.0812C11.1601 13.0812 11.2522 13.1739 11.2568 13.2925L11.4305 18.3488L11.2565 20.7619Z'
              fill='white'
            />
            <path
              d='M15.1123 20.6944C15.1094 20.8545 14.9808 20.9848 14.8249 20.9848C14.6689 20.9848 14.5399 20.8545 14.5374 20.6958C14.5374 20.6958 14.429 18.3522 14.429 18.3485L14.5374 12.511C14.5398 12.3506 14.6687 12.2203 14.8249 12.2203C14.9808 12.2203 15.1096 12.3509 15.1123 12.5108L15.2336 18.3504L15.1123 20.6944Z'
              fill='white'
            />
            <path
              d='M13.1702 20.724C13.1665 20.8649 13.0571 20.9754 12.9214 20.9754C12.7848 20.9754 12.6755 20.8649 12.6725 20.7255L12.541 18.3495L12.6723 13.2563C12.6752 13.1154 12.7846 13.0051 12.9213 13.0051C13.0569 13.0051 13.1662 13.1154 13.1699 13.2563L13.3178 18.3492L13.1702 20.7257V20.724Z'
              fill='white'
            />
            <path
              d='M8.44204 20.8012C8.43592 20.8875 8.37065 20.953 8.28998 20.953C8.20818 20.953 8.14317 20.8875 8.13775 20.8009L7.94946 18.3463L8.13775 16.0121C8.14291 15.9253 8.20818 15.8597 8.28998 15.8597C8.37091 15.8597 8.43618 15.9248 8.44204 16.011L8.65588 18.3463L8.44204 20.8012Z'
              fill='white'
            />
            <path
              d='M6.60156 20.7063C6.59474 20.7716 6.54699 20.8188 6.48806 20.8188C6.42812 20.8188 6.38037 20.7713 6.37452 20.7059L6.16309 18.3461L6.37452 15.8969C6.38061 15.8317 6.42834 15.7842 6.48804 15.7842C6.54698 15.7842 6.59472 15.8315 6.60179 15.8969L6.84174 18.3461L6.60156 20.7063Z'
              fill='white'
            />
            <path
              d='M13.6007 13.4426C13.6037 13.2903 13.7218 13.1714 13.8692 13.1714C14.0163 13.1714 14.1337 13.2903 14.1371 13.4421L14.2716 18.3499L14.1371 20.7111V20.7091C14.1337 20.8613 14.0163 20.98 13.8692 20.98C13.7216 20.98 13.6037 20.8611 13.6007 20.7108L13.481 18.3497L13.6007 13.4426Z'
              fill='white'
            />
            <path
              d='M10.3115 20.7863C10.3066 20.8938 10.2226 20.9782 10.1208 20.9782C10.018 20.9782 9.93416 20.8938 9.93004 20.7873L9.76416 18.3483L9.92978 13.6817C9.93424 13.5742 10.018 13.4899 10.1208 13.4899C10.2226 13.4899 10.3064 13.5739 10.3115 13.6817L10.4986 18.3483L10.3115 20.7863Z'
              fill='white'
            />
            <path
              d='M12.2098 20.7478V20.7475C12.2054 20.8764 12.1051 20.9777 11.9806 20.9777C11.8557 20.9777 11.7548 20.876 11.7514 20.7476L11.6084 18.3485L11.7512 13.1221C11.7545 12.9921 11.8554 12.8905 11.9806 12.8905C12.1051 12.8905 12.2059 12.9923 12.2098 13.1221L12.3706 18.3488L12.2098 20.7465V20.7475C12.2098 20.7472 12.2098 20.747 12.2098 20.7468V20.7478Z'
              fill='white'
            />
            <path
              d='M23.2915 15.5558C23.6233 15.4147 23.9875 15.3364 24.3692 15.3364C25.9077 15.3364 27.1549 16.6024 27.1549 18.164C27.1549 19.7255 25.9075 20.9914 24.369 20.9914C24.3192 20.9914 16.6534 20.9875 16.6463 20.9867C16.4799 20.9696 16.3477 20.8255 16.3455 20.6525V11.6794C16.3475 11.5145 16.4035 11.4295 16.6137 11.3469C17.1547 11.1346 17.7674 11.009 18.3958 11.009C20.9643 11.009 23.0698 13.0078 23.2915 15.5558Z'
              fill='white'
            />
            <path
              d='M15.4687 11.982C15.4712 11.8108 15.6086 11.6714 15.7759 11.6714C15.9428 11.6714 16.0801 11.8108 16.0826 11.9816L16.2192 18.351L16.0826 20.6628V20.66C16.0801 20.8314 15.9428 20.9705 15.7759 20.9705C15.6086 20.9705 15.4712 20.8314 15.469 20.6625L15.343 18.351L15.4687 11.982Z'
              fill='white'
            />
          </g>
          <defs>
            <linearGradient
              id='paint0_linear_2_33'
              x1='15.8298'
              y1='0'
              x2='15.8298'
              y2='32'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FF7602' />
              <stop offset='1' stopColor='#FF3502' />
            </linearGradient>
            <clipPath id='clip0_2_33'>
              <rect width='32' height='32' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );
    case "radio4":
      return (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_2_30)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M31.3672 27.7357C31.0561 28.5258 30.3384 29.6383 29.3205 30.4219C28.7329 30.8745 28.0313 31.3072 27.0676 31.5927C26.0403 31.8971 24.7749 32 23.2 32H8.8001C7.22534 32 5.95999 31.8971 4.93258 31.5927C3.96888 31.3072 3.2674 30.8745 2.67962 30.4219C1.66187 29.6382 0.943989 28.5258 0.632929 27.7357C0.00635821 26.1438 0 24.3376 0 23.2V8.79997C0 7.66243 0.00635821 5.85622 0.632929 4.26429C0.943989 3.47418 1.66174 2.36169 2.67962 1.57806C3.26727 1.12546 3.96888 0.692826 4.93258 0.407328C5.95986 0.102881 7.22521 0 8.8001 0H23.2002C24.7749 0 26.0403 0.102881 27.0677 0.407328C28.0314 0.692826 28.7329 1.12559 29.3206 1.57806C30.3384 2.36182 31.0563 3.47418 31.3673 4.26429C31.9939 5.85622 32.0003 7.66243 32.0003 8.79997V23.2C32.0001 24.3375 31.9938 26.1437 31.3672 27.7357Z'
              fill='url(#paint0_linear_2_30)'
            />
            <path
              d='M18.3209 18.3933C17.8407 17.8867 16.9973 17.5619 16.0016 17.5619C15.0059 17.5619 14.1625 17.8867 13.6823 18.3933C13.4318 18.6577 13.2993 18.9287 13.2575 19.3148C13.1767 20.0625 13.2221 20.7062 13.3097 21.7354C13.3931 22.7161 13.5516 24.024 13.7583 25.356C13.9055 26.3039 14.025 26.8155 14.1339 27.1819C14.3104 27.7756 14.97 28.2949 16.0016 28.2949C17.0331 28.2949 17.6928 27.7755 17.8693 27.1819C17.9781 26.8155 18.0977 26.3039 18.2448 25.356C18.4516 24.024 18.61 22.7161 18.6935 21.7354C18.7811 20.7061 18.8265 20.0623 18.7456 19.3148C18.7039 18.9289 18.5714 18.6577 18.3209 18.3933ZM13.3852 13.8822C13.3852 15.3285 14.5577 16.501 16.0041 16.501C17.4505 16.501 18.623 15.3285 18.623 13.8822C18.623 12.4358 17.4505 11.2633 16.0041 11.2633C14.5577 11.2633 13.3852 12.4358 13.3852 13.8822ZM15.9716 3.54704C9.84669 3.56447 4.8279 8.53341 4.7521 14.658C4.69055 19.6193 7.85762 23.8632 12.28 25.4188C12.3873 25.4565 12.4963 25.3674 12.4794 25.2549C12.4214 24.8696 12.3667 24.4825 12.3165 24.1019C12.2987 23.9674 12.213 23.8514 12.0887 23.7971C8.5933 22.27 6.15251 18.7644 6.19168 14.7037C6.24305 9.37477 10.5946 5.03036 15.9236 4.98725C21.3714 4.94325 25.8174 9.36219 25.8174 14.8C25.8174 18.82 23.3873 22.2826 19.9191 23.7975C19.7949 23.8518 19.7097 23.9681 19.692 24.1026C19.6418 24.483 19.5871 24.87 19.5292 25.2549C19.5122 25.3674 19.6212 25.4565 19.7285 25.4189C24.1086 23.8782 27.2573 19.7003 27.2573 14.8001C27.257 8.58415 22.1914 3.52924 15.9716 3.54704ZM15.7683 8.70954C19.2404 8.57512 22.1079 11.3607 22.1079 14.8034C22.1079 16.5543 21.3661 18.1351 20.1805 19.2483C20.0799 19.3427 20.0258 19.4767 20.0336 19.6144C20.0572 20.0332 20.0486 20.4402 20.0207 20.8998C20.0132 21.0222 20.1506 21.1004 20.2519 21.0314C22.2401 19.6727 23.5478 17.3881 23.5478 14.8034C23.5478 10.5478 20.0031 7.10439 15.7112 7.27073C11.7226 7.42537 8.52259 10.7139 8.47147 14.7053C8.43789 17.3303 9.7536 19.6559 11.7674 21.0316C11.8685 21.1007 12.0054 21.0224 11.9979 20.9C11.9699 20.4402 11.9614 20.0332 11.9849 19.6144C11.9927 19.4768 11.9388 19.3428 11.8384 19.2486C10.6158 18.1007 9.86501 16.4558 9.91282 14.6398C9.99701 11.444 12.5736 8.83328 15.7683 8.70954Z'
              fill='white'
            />
          </g>
          <defs>
            <linearGradient
              id='paint0_linear_2_30'
              x1='16.0001'
              y1='0'
              x2='16.0001'
              y2='32'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F452FF' />
              <stop offset='1' stopColor='#832BC1' />
            </linearGradient>
            <clipPath id='clip0_2_30'>
              <rect width='32' height='32' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );
    case "radio5":
      return (
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_2_50)'>
            <path
              d='M15.9375 30C23.704 30 30 23.704 30 15.9375C30 8.171 23.704 1.875 15.9375 1.875C8.171 1.875 1.875 8.171 1.875 15.9375C1.875 23.704 8.171 30 15.9375 30Z'
              fill='white'
              stroke='#363F46'
              strokeWidth='2.42578'
              strokeLinecap='round'
            />
            <path
              d='M8.30304 9.99902C8.30304 9.99902 6.3584 12.1928 6.3584 16.0258C6.3584 19.8588 8.30304 21.9642 8.30304 21.9642'
              fill='white'
            />
            <path
              d='M8.30304 9.99902C8.30304 9.99902 6.3584 12.1928 6.3584 16.0258C6.3584 19.8588 8.30304 21.9642 8.30304 21.9642'
              stroke='#FC7E0F'
              strokeWidth='2.42578'
              strokeLinecap='round'
            />
            <path
              d='M23.7959 9.99902C23.7959 9.99902 25.7405 12.1928 25.7405 16.0258C25.7405 19.8588 23.7959 21.9642 23.7959 21.9642'
              fill='white'
            />
            <path
              d='M23.7959 9.99902C23.7959 9.99902 25.7405 12.1928 25.7405 16.0258C25.7405 19.8588 23.7959 21.9642 23.7959 21.9642'
              stroke='#FC7E0F'
              strokeWidth='2.42578'
              strokeLinecap='round'
            />
            <path
              d='M20.6943 12.5625C20.6943 12.5625 22.0042 14.1938 21.972 16.0179C21.9318 18.2116 20.7104 19.417 20.7104 19.417'
              fill='white'
            />
            <path
              d='M20.6943 12.5625C20.6943 12.5625 22.0042 14.1938 21.972 16.0179C21.9318 18.2116 20.7104 19.417 20.7104 19.417'
              stroke='#FC7E0F'
              strokeWidth='2.42578'
              strokeLinecap='round'
            />
            <path
              d='M11.3408 12.5625C11.3408 12.5625 10.0309 14.1938 10.0631 16.0179C10.1033 18.2116 11.3247 19.417 11.3247 19.417'
              fill='white'
            />
            <path
              d='M11.3408 12.5625C11.3408 12.5625 10.0309 14.1938 10.0631 16.0179C10.1033 18.2116 11.3247 19.417 11.3247 19.417'
              stroke='#FC7E0F'
              strokeWidth='2.42578'
              strokeLinecap='round'
            />
            <path
              d='M15.9358 18.1206C17.1413 18.1206 18.1186 17.1433 18.1186 15.9377C18.1186 14.7322 17.1413 13.7549 15.9358 13.7549C14.7302 13.7549 13.7529 14.7322 13.7529 15.9377C13.7529 17.1433 14.7302 18.1206 15.9358 18.1206Z'
              fill='#363F46'
            />
            <path
              d='M16.3047 17.9767L14.7562 17.5605L12.1777 27.1924L13.7262 27.6085L16.3047 17.9767Z'
              fill='#363F46'
            />
            <path
              d='M15.7051 17.964L17.2467 17.5547L19.8116 27.1934L18.2699 27.6027L15.7051 17.964Z'
              fill='#363F46'
            />
            <path
              d='M14.2725 23.1618L14.8455 22.5752L18.8155 26.4429L18.2425 27.0296L14.2725 23.1618Z'
              fill='#363F46'
            />
            <path
              d='M17.6351 23.1825L17.1166 22.6572L13.1807 26.5659L13.6991 27.0912L17.6351 23.1825Z'
              fill='#363F46'
            />
          </g>
          <defs>
            <clipPath id='clip0_2_50'>
              <rect width='32' height='32' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default SvgSprite;
