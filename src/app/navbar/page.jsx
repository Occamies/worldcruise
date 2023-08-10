import React from 'react'
import style from "@/style/style.module.scss"


const page = () => {
  return (
    <>
    <section className={style.navbarcontainer}>
      <img src="/assets/user.png" alt="icon" className={style.navbaricons} />
      <input type="text" />
      <div className={style.btn}>
        <img src="/assets/denmark.png" alt="" className={style.navbaricons}/>
        <img src="/assets/bluedownarrow.png" alt="" className={style.navbaricons} />

      </div>
    </section>
    </>
  )
}

export default page