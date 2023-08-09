import React from 'react'
import variables from "./variables.module.scss"


const Btn = ({name}) => {
  return (
    <main className={variables.main}>
    <button className={variables.btn}>{name}</button>
    
    </main>
    
  )
}

export default Btn