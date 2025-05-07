import React from 'react'
import style from "@/styles/components/row.module.css"
interface RowProps{
    title: string,
    description: string,
    
}
const row:React.FC<RowProps> = ({title,description}) => {
  return (
    <div className={style.row}>
     <div className={style.wrapper}>
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
        <div className={style.description}>
            <p>{description}</p>
        </div>
     </div>
    </div>
  )
}

export default row