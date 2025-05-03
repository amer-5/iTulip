import React from "react";
import Image from "next/image";

import Style from "@/styles/components/button.module.css";

import arrow from "@/public/icons/arrow.svg";

interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={Style.contactUsNow}>
      {children}
      {children === "Contact us now" && (
        <Image src={arrow} alt="Arrow" width={20} height={20} />
      )}
    </button>
  );
};

export default Button;
