import React from "react";
import Image from "next/image";
import SocialLinks from "../SocialLinks/SocialLinks";
import RadioIcons from "../RadioIcons/RadioIcons";
import { navLinks, navLinksSecondBlock } from "../Data/Data";
import NavFooter from "../NavFooter.jsx/NavFooter";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src='/logo_footer.png'
          width={224}
          height={46}
          alt='Logo Castaway'
        />
        <SocialLinks />
      </div>
      <NavFooter navLinks={navLinks} />
      <NavFooter navLinks={navLinksSecondBlock} />
      <div>
        <RadioIcons />
      </div>
    </div>
  );
};

export default Footer;
