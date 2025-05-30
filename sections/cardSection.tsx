"use client"

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
          WE KUNNEN ONS VOORSTELLEN DAT U NOG WAT TIJD NODIG HEEFT VÓÓR U MET
          ONS DE ZEE INGAAT?LATEN WE SAMEN KIJKEN NAAR MOGELIJKHEDEN VOOR EEN
          EERSTE STAP...
        </h1>
        <Button.ContactUsNow
          onClick={() => (window.location.href = "mailto:itulip@mail.com")}
        >
          Contact us now
        </Button.ContactUsNow>
        <Image src={Image1} alt="Atom Image" className={Style.image} />
      </div>
    </div>
  );
};

export default CardSection;
