import React from 'react'
import style from "@/style/style.module.scss"


const Btn = ({name}) => {
  return (
    <button className={style.btn}>{name}
    </button>
  )
}

export default Btn