import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

const Submit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          Email Newsletter
          <div className={styles.invite}>
            Subscribe <p>for updates</p>
          </div>
          <div className={styles.lines}>
            <Image
              src='/lines_down.png'
              width={147}
              height={91}
              alt='Picture of the lines down'
            />
          </div>
        </div>

        <form className={styles.inputForm}>
          <input
            placeholder='Name'
            type='text'
            name='name'
            id='name'
            className={styles.input}
          />
          <input
            placeholder='Email'
            type='email'
            name='email'
            id='email'
            className={styles.input}
          />
          <div>
            <button type='submit' className={styles.buttonSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;
