import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
const Navbar = () => {
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Episodes", path: "#episodes" },
    { title: "About", path: "#about" },
    { title: "Contact", path: "#contact" },
  ];
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
export default Navbar;

/* <a href='#part1'>Глава 1</a> 
          <article id='part1'>Содержание первой главы</article>*/
