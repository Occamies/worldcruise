import React from 'react'
import variables from "./variables.module.scss"
import Btn from "@/app/navknap/btn"

const page = () => {
  return (
    <main className={variables.main}>
    <Btn name={"pul"} />
    </main>
    
  )
}

export default page