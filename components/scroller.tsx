"use client";

import React from "react";
import Image from "next/image";
import technologies from "@/public/icons/technologies";
import Style from "@/styles/components/scroller.module.css";

const Scroller: React.FC = () => {
  const techIcons = Object.values(technologies);

  return (
    <div className={Style.wrapper}>
      <div className={Style.track}>
        {[...techIcons, ...techIcons].map((icon, index) => (
          <div key={index} className={Style.icon}>
            <Image
              src={icon}
              alt={`tech-${index}`}
              width={84}
              height={84}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
