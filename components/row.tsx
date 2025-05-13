import React from "react";
import Style from "@/styles/components/row.module.css";

interface RowProps {
  children: React.ReactNode;
  text: string;
}

const Row: React.FC<RowProps> = ({ children, text }) => {
  return (
    <div className={Style.row}>
      <h1 className={Style.title}>{children}</h1>
      <p className={Style.text}>{text}</p>
    </div>
  );
};

export default Row;
