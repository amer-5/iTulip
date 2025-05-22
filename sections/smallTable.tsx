import React from "react";
import style from "@/styles/pages/smallTable.module.css";
import Table from "@/components/tableCard";
import Comp1 from "@/public/icons/computer-programming-01.svg";
import Comp2 from "@/public/icons/computer-check.svg";
import Bulb from "@/public/icons/bulb.svg";
import Button from "@/components/button";
const smallTable = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.title}>
            <h1>PROUD PARTNER BIT bv </h1>
            <p>since 1992</p>
          </div>
          <Button.Primary>Team of 30 developers</Button.Primary>
        </div>
        <div className={style.tables}>
          <Table
            title="TALENT"
            description="Core team of 30 developers. Dedication to fulfilment of customers needs and support. Wide local and international experience in complex projects."
            icon={Bulb}
          />
          <Table
            title="TECHSTACK"
            icon={Comp1}
            description="Java, Delphi, Android, iOS, .NET (C#), ASP HTML, CSS, JavaScript, MS SQL SERVER, Angular, Amazon Web Services."
          />
          <Table
            title="RESULTS"
            icon={Comp2}
            description="Experience in software development, testing, implementation and maintenance."
          />
        </div>
      </div>
    </div>
  );
};

export default smallTable;
