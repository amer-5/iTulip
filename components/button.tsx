import React from "react";
import Image from "next/image";
import Style from "@/styles/components/button.module.css";
import arrow from "@/public/icons/arrow.svg";

export enum ButtonVariant {
  ContactUsNow = "ContactUsNow",
  Primary = "Primary",
  Secondary = "Secondary",
}

interface ButtonProps {
  children: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> & { Variant: typeof ButtonVariant } = ({
  children,
  onClick,
  variant = ButtonVariant.Primary,
}) => {
  const className =
    variant === ButtonVariant.ContactUsNow
      ? Style.contactUsNow
      : variant === ButtonVariant.Secondary
      ? Style.secondary
      : Style.primary;

  return (
    <button className={className} onClick={onClick}>
      {children}
      {variant === ButtonVariant.ContactUsNow && (
        <Image src={arrow} alt="Arrow" width={20} height={20} />
      )}
    </button>
  );
};

Button.Variant = ButtonVariant;

export default Button;
