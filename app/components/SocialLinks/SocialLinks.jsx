import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../Data/Data";
import styles from "./style.module.css";

const SocialLinks = () => {
  return (
    <ul className={styles.socLinks}>
      {socialLinks.map((link) => (
        <li key={link.id} className={styles.navbarItem}>
          <Link href={link.path}>
            <Image src={link.image} width={24} height={24} alt={link.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
