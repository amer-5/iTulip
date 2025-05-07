import React from 'react'
import style from "@/styles/pages/table.module.css"
import Table from "@/components/tableCard"
import repeat from "@/public/icons/repeat.svg"
import computer from "@/public/icons/computer-programming-01.svg"
import hourglass from "@/public/icons/hourglass.svg"
import pin from "@/public/icons/pin-location-02.svg"
import money from "@/public/icons/affiliate.svg" 
import chair from "@/public/icons/office-chair.svg"
const table = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>Stel je eens voor</h2>
          <p>Uw bedrijf krijgt toegang tot een pool aan softwave developers</p>
        </div>
        <div className={style.table}>
          <Table icon={repeat} title='CONTINUITEIT' description='Van oplossingen staat hoog in het vaandel'/>
          <Table icon={computer} title='STATE OF AAT TECH' description='O.a, Java, PHP, React, Phyton, .Net, Saas, Sql, APi’s, iOS, Azure' />
          <Table icon={hourglass} title='ERVARING' description='Met projecten in Nederland, VK, Zweden, Duistland, Belgie'/>
          <Table icon={pin} title='REMOTE' description='Direct beschikbaar'/>
          <Table icon={money} title='PRIJS-KWALITEIT' description='Verhouding waar men U tegen zegt'/>
          <Table icon={chair} title='ON-SITE' description='Binnen een paar weken' bonus='*wij regelen zelf de vergunningen'/>
        </div>
      </div>
    </div>
  )
}

export default table