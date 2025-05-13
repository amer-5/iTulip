import React from "react";
import Image from "next/image";
import Style from "@/styles/components/button.module.css";
import arrow from "@/public/icons/arrow.svg";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const BaseButton = ({
  children,
  onClick,
  className,
  withArrow = false,
}: ButtonProps & { className: string; withArrow?: boolean }) => (
  <button className={`${className} ${Style.button}`} onClick={onClick}>
    {children}
    {withArrow && <Image src={arrow} alt="Arrow" width={20} height={20} className={Style.arrow} />}
  </button>
);

const Button = {
  Primary: (props: ButtonProps) => (
    <BaseButton {...props} className={Style.primary} />
  ),

  Secondary: (props: ButtonProps) => (
    <BaseButton {...props} className={Style.secondary} />
  ),

  ContactUsNow: (props: ButtonProps) => (
    <BaseButton {...props} className={Style.contactUsNow} withArrow />
  ),
};

export default Button;
