import React from 'react'
import style from "@/styles/pages/rows.module.css"
import Row from "@/components/row"
const rows = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>SAMENWERKING WAARDEN</h2>
        </div>
        <div className={style.rows}>
          <Row title='SAMEN' description='Samen uit, samen thuis' />
          <Row title='KENNIS' description='en begrip van de Nederlandse markt en cultuur' />
          <Row title='VERTROUWEN' description='& professionele afspraken' />
        </div>
      </div>
    </div>
  )
}

export default rows