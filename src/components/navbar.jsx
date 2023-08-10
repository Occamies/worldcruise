import React from 'react'
import style from "@/style/style.module.scss"


const navbar = () => {
  return (
    <>
      <section className={style.navbarcontainer}>
        <img src="/assets/userLightBlue.png" alt="icon" className={style.usericon} />
        <form className={style.form}>
          <input type="search" placeholder="Search..." className={style.navinput} />
          <button type="submit" className={style.submitbtn}>Search</button>
        </form>
        <div className={style.btn}>
          <img src="/assets/denmark.png" alt="" className={style.navbaricons} />
          <img src="/assets/bluedownarrow.png" alt="" className={style.navbaricons} />

        </div>
      </section>
    </>
  )
}

export default navbar