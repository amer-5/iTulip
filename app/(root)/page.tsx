import React from "react";

import HomeSection from "@/sections/home";
import ServicesSection from "@/sections/services";
import Scroller from "@/components/scroller";

import Style from "@/styles/pages/page.module.css";

export default function Home() {
  return (
    <div className={Style.parent}>
      <HomeSection />
      <ServicesSection />
      <Scroller/>
    </div>
  );
}
