"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/icons/logo.svg";

import Button from "./button";

import Style from "@/styles/components/navigation.module.css";

const Navigation = () => {
  return (
    <div className={Style.navigation}>
      <Image
        src={Logo}
        alt="Logo"
        height={60}
        width={60}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className={Style.buttons}>
        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </p>
        <Button>Contact us</Button>
      </div>
    </div>
  );
};

export default Navigation;
