"use client";

import React from "react";
import style from "@/styles/pages/map.module.css";
import Image from "next/image";
import Picture from "@/public/images/map.svg";
const map = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <Image src={Picture} alt="map" />
        </div>
        <div className={style.text}>
          <h1>ONZE VESTIGINGEN</h1>
          <p>
            Onze kantoren zijn verspreid over de hele EU: Amsterdam, Sarajevo,
            Stockholm, Copenhagen, Brussel, Zagreb, Ljubljana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default map;
