"use client";

import React from "react";
import Image from "next/image";

import Style from "@/styles/pages/home.module.css";

import Button from "@/components/button";

import HFA from "@/public/icons/brand.svg";
import Akkuro from "@/public/icons/akkuro.svg";
import image from "@/public/images/image.png";

const Home = () => {
  console.log(Button);

  return (
    <div className={Style.home}>
      <div className={Style.left}>
        <div className={Style.partners}>
          <p>Lid von HFA</p>
          <Image src={HFA} alt="HFA" height={24} className={Style.hfa} />
          <p>Trotse partner van Akkuro by Topicus</p>
          <Image
            src={Akkuro}
            alt="Akkuro"
            height={24}
            className={Style.akkuro}
          />
        </div>
        <div className={Style.mainText}>
          <h1 className={Style.heading}>
            iTULIP <br />
            <span>SOFTWARE BEDRIJIVEN UIT ADRIA REGIO</span>
          </h1>
          <p className={Style.text}>
            iĆ codering talent. Brengt zoden aan jouw Nearshoring dijk!
          </p>
          <Button.ContactUsNow
            onClick={() => (window.location.href = "mailto:itulip@mail.com")}
          >
            Contact Us Now
          </Button.ContactUsNow>
        </div>
      </div>
      <div className={Style.image}>
        <Image src={image} alt="iTulip" className={Style.image} />
      </div>
    </div>
  );
};

export default Home;
