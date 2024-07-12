import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const NavFooter = ({ navLinks }) => {
  return (
    <ul className={styles.navbar}>
      {navLinks.map((link) => (
        <li key={link.title} className={styles.navbarItem}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavFooter;
