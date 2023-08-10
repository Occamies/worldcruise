import React from 'react'
import style from "@/style/style.module.scss"


const page = () => {
  return (
    <>
      <section className={style.navbarcontainer}>
        <img src="/assets/worldcruise-logo-white.png" alt="" className={style.navlogo} />
        
        <form className={style.form}>
          <input type="search" placeholder="Search..." className={style.navinput} />
          <button type="submit" className={style.submitbtn}>Search</button>
        </form>
        <div className={style.navbariconbox}>
        <img src="/assets/userLightBlue.png" alt="icon" className={style.usericon} />
        <div className={style.btn}>
          <img src="/assets/denmark.png" alt="" className={style.navbaricons} />
          <img src="/assets/bluedownarrow.png" alt="" className={style.navbaricons} />

        </div>
        </div>
      </section>
    </>
  )
}

export default page