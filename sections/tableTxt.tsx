import React from 'react'
import style from "@/styles/pages/tableTxt.module.css"
import Button from '@/components/button'
const tableTxt: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h1>PROUD PARTNER CODE bv</h1>
                    <p>since 2011</p>
                </div>
                <div className={style.buttons}>
                    <Button>100+ Engineers</Button>
                    <Button>170 Years of Experience</Button>
                    <Button>50+ Successful Projects</Button>
                </div>
                <div className={style.text}>
                    <div className={style.purple}>
                        <h1>YOUR VISION, OUR EXPERTISE</h1>
                    </div>
                    <div className={style.main}>
                        <p>A group of talented minds, passionate about one thing, to develop most innovative technological solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tableTxt