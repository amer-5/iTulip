import React from 'react'
import style from "@/styles/pages/footer.module.css"
import Logo from "@/public/icons/logo.svg"
import Image from "next/image";
import Photo from "@/public/images/image.png"
const footer = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.txt}>
                    <div className={style.logo}>
                        <Image src={Logo} alt='logo' />
                        <h1>iTulip</h1>
                    </div>
                    <h2>Home</h2>
                    <h2>Contact</h2>
                </div>
                <div className={style.copyright}>
                    <p>© 2025 Copyright: iTulip; All Rights Reserved</p>
                </div>
            </div>
            <div className={style.image}>
                <Image width={740} height={678} src={Photo} alt="image" />
            </div>
        </div>
    )
}

export default footer