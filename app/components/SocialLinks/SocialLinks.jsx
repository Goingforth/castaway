import React from "react";
import Link from "next/link";
import SvgSprite from "../SvgSprite/SvgSprite";
import { socialLinks } from "../Data/Data";
import styles from "./style.module.css";

const SocialLinks = () => {
  return (
    <div>
      <ul className={styles.socLinks}>
        {socialLinks.map(({ id, path, name }) => (
          <li key={id} className={styles.navbarItem}>
            <Link href={path}>
              <SvgSprite id={id} />
            </Link>
            <div className={styles.name}>{name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
