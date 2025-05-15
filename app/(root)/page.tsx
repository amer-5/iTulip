import React from "react";

import HomeSection from "@/sections/home";
import ServicesSection from "@/sections/services";
import Scroller from "@/components/scroller";
import { OrbiPartner, VoltPartner } from "@/sections/partners";
import Roles from "@/sections/roles";
import CardSection from "@/sections/cardSection";

import Style from "@/styles/pages/page.module.css";

export default function Home() {
  return (
    <div className={Style.parent}>
      <HomeSection />
      <ServicesSection />
      <Scroller />
      <OrbiPartner />
      <VoltPartner />
      <Roles />
      <CardSection />
    </div>
  );
}
