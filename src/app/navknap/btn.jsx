import React from 'react'
import style from "@/style/style.module.scss"


const Btn = ({name}) => {
  return (
    <main className={style.main}>
    <button className={style.btn}>{name}</button>
    
    </main>
    
  )
}

export default Btn