import React from "react";

interface CardProps {
  heading: string;
  icon: string;
  text?: string;
  buttonText?: string;
  features?: string[];
}

const Card: React.FC<CardProps> & {
  Table: React.FC<CardProps>;
  Contact: React.FC<CardProps>;
} = ({ heading, icon, text, buttonText, features }) => {
  return (
    <>
      <div>{icon + heading}</div>
      {text && <p>{text}</p>}
      {buttonText && <button>{buttonText}</button>}
      {features && (
        <ul>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </>
  );
};

Card.Table = (props) => <Card {...props} />;
Card.Table.displayName = "Card.Table";

Card.Contact = (props) => <Card {...props} />;
Card.Contact.displayName = "Card.Contact";

export default Card;
