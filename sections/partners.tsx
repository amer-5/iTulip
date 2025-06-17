"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/button";

import Style from "@/styles/pages/partners.module.css";

import PartnerImage from "@/public/images/image1.png";
import PartnerImage2 from "@/public/images/image2.png";

interface PartnerProps {
  name: string;
  image: string;
  year: number;
  buttonText: string;
  description: string;
  techs: string;
}

const Partner: React.FC<PartnerProps> = ({
  name,
  image,
  year,
  buttonText,
  description,
  techs,
}) => {
  return (
    <div className={Style.parent}>
      <Image
        src={image}
        alt={name}
        height={200}
        width={200}
        className={Style.partnerImage}
      />
      <div className={Style.partnerText}>
        <h1 className={Style.heading}>
          PROUD PARTNER {name.toUpperCase()} bv
        </h1>
        <p className={Style.year}>since {year}</p>
        <Button.Primary>{buttonText}</Button.Primary>
        <p className={Style.description} style={{ marginTop: 40 }}>
          {description}
        </p>
        <p className={Style.description}>{techs}</p>
      </div>
    </div>
  );
};

export const OrbiPartner: React.FC = () => {
  return (
    <div>
      <Partner
        name="Orbi"
        image={PartnerImage.src}
        year={2010}
        buttonText="Team of 25 developers"
        description="With a team of 25 developers, we are a full service software company that empowers innovation"
        techs="Java, Android, Ios, .NET, HTML, MS SQL, Azure, Amazon Web Services"
      />
    </div>
  );
};

export const VoltPartner: React.FC = () => {
  return (
    <div>
      <Partner
        name="Volt"
        image={PartnerImage2.src}
        year={2016}
        buttonText="Team of 20 developers"
        description="We're dedicated to your success and growth."
        techs="More than just engineering experts, they are the disruptive leaders shaping the future of technology. Their innovative spirit and deep-seated expertise go beyond leading our company; they are actively redefining the industry landscape."
      />
    </div>
  );
};
