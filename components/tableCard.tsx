import React from 'react'
import style from "@/styles/components/tableCard.module.css"
import Image from "next/image";
interface TableCardProps{
    icon: string,
    title: string,
    description: string,
    bonus?:string
}

const tableCard: React.FC <TableCardProps> = ({icon,title,description, bonus}) => {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <div className={style.title}>
               <Image src={icon} alt="Icon" width={24} height={24} />
               <h2 >{title}</h2>
            </div>
            <div className={style.description}>
                <p>{description}</p>
                {bonus && <h6>{bonus}</h6>}
            </div>
        </div>
    </div>
  )
}

export default tableCard