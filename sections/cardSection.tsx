"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import Image1 from "@/public/images/image.png";
import Style from "@/styles/pages/cardSection.module.css";

const CardSection = () => {
  return (
    <div>
      <div className={Style.card}>
        <h1>
          We kunnen ons voorstellen dat u nog wat tijd nodig heeft voor u met
          ons in zee gaat! <br />
          LATEN WE SAMEN KIJKEN NAAR MOGELIJKHEDEN VOOR EEN EERSTE STAP...
        </h1>
        <Button.ContactUsNow
          onClick={() => (window.location.href = "mailto:ermandoric@gmail.com")}
        >
          Contact us now
        </Button.ContactUsNow>
        <Image src={Image1} alt="Atom Image" className={Style.image} />
      </div>
    </div>
  );
};

export default CardSection;
