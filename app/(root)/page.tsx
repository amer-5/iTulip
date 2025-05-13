import React from "react";

import HomeSection from "@/sections/home";

import Style from "@/styles/pages/page.module.css";

export default function Home() {
  return (
    <div className={Style.parent}>
      <HomeSection />
    </div>
  );
}
