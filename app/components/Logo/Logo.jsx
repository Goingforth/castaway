import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";

const Logo = ({ width, height }) => {
  return (
    <Image
      src='/logo.png'
      width={width}
      height={height}
      alt='Logo Castaway'
      priority={true}
    />
  );
};

export default Logo;
