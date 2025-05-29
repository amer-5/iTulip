"use client";

import React from "react";
import Image from "next/image";


import Style from "@/styles/components/card.module.css";

interface BaseProps {
  heading: string;
  icon: string;
}

interface TableProps extends BaseProps {
  type: "table";
  text: string;
}

interface ContactProps extends BaseProps {
  type: "contact";
  features: string[];
}

type CardProps = TableProps | ContactProps;

const Card: React.FC<CardProps> & {
  Table: React.FC<Omit<TableProps, "type">>;
  Contact: React.FC<Omit<ContactProps, "type">>;
} = (props) => {
  const { heading, icon } = props;

  return (
    <div className={Style.parent}>
      <div className={Style.header}>
        <Image
          src={icon}
          alt="Icon"
          width={24}
          height={24}
          className={Style.icon}
        />
        <p className={Style.heading}>{heading}</p>
      </div>

      {props.type === "table" && <p className={Style.text}>{props.text}</p>}

      {props.type === "contact" && (
        <>
          <ul className={Style.list}>
            {props.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

Card.Table = (props) => <Card {...props} type="table" />;
Card.Table.displayName = "Card.Table";

Card.Contact = (props) => <Card {...props} type="contact" />;
Card.Contact.displayName = "Card.Contact";

export default Card;
