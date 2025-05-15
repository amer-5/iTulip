import React from 'react'
import style from "@/styles/pages/cluster.module.css"
import Image from "next/image";
import Picture from "@/public/images/image1.svg"
import Button from "@/components/button";
const cluster = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <h1>CLUSTER VAN 4 SOFTWARE DEVELOPMENT BEDRIJVEN!</h1>
                </div>
                <div className={style.main}>
                    <div className={style.image}>
                        <Image src={Picture} alt='picture' />
                    </div>
                    <div className={style.text}>
                        <p>Eendracht maakt kracht.</p>
                        <p>Meer dan 150 developers in dienst.</p>
                        <p>Decennialange ervaring met Nearshoring.</p>
                        <Button.ContactUsNow>Contact us now</Button.ContactUsNow>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cluster