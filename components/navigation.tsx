"use client";
import React from "react";
import Image from "next/image";

import Logo from "@/public/icons/logo.svg";

import Button from "./button";

import Style from "@/styles/components/navigation.module.css";

const Navigation = () => {
  return (
    <div className={Style.navigation}>
      <Image
        src={Logo}
        alt="Logo"
        className={Style.logo}
        height={60}
        width={60}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className={Style.buttons}>
        <p className={Style.homeButton} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </p>
        <Button.Primary>Contact us</Button.Primary>
      </div>
    </div>
  );
};

export default Navigation;
