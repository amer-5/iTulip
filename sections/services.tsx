"use client"

import React from "react";

import Card from "@/components/card";
import ManIcon from "@/public/icons/man.svg";
import PeopleIcon from "@/public/icons/peoples.svg";

import Style from "@/styles/pages/services.module.css";

const Contact = () => {
  const cards = [
    {
      icon: PeopleIcon,
      heading: "VOLLEDIGE TEAMS",
      features: [
        "Merciere teams beschikbaar voor langdurige projecten",
        "Ontwikkelaars met jarenlange ervaring eerst/meerwerk",
        "Werkt volgens Agile methode",
        "Flexibel en schaalbaar",
      ],
    },
    {
      icon: ManIcon,
      heading: "INDIVIDUELE ONTWIKKELAARS",
      features: [
        "Top talent ter aanvulling op uw intern team (Full stack, Frontend of Backend)",
        "Speciaal geselecteerd op belangrijke criteria voor NL markt",
        "Sterk in communicatieve vaardigheden en teamwerk",
        "Vloeiend in Engels (met back-up in Nederlands)",
      ],
    },
  ];

  return (
    <div className={Style.parent}>
      <h1 className={Style.heading}>
        ZODEN BRENGEN AAN <br /> DE DIJK
      </h1>
      <div className={Style.cards}>
        {cards.map((card, i) => (
          <Card.Contact
            key={i}
            icon={card.icon}
            heading={card.heading}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
