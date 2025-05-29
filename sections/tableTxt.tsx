import React from "react";
import style from "@/styles/pages/tableTxt.module.css";
import Button from "@/components/button";
const tableTxt: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h1>PROUD PARTNER CODE bv</h1>
          <p>since 2011</p>
        </div>
        <div className={style.buttons}>
          <Button.Primary>Team of 100+ Engineers</Button.Primary>

        </div>
      </div>
    </div>
  );
};

export default tableTxt;
