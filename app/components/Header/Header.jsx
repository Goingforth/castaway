import React from "react";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import styles from "./style.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={160} height={33} />
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
