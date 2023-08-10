import React from 'react'
import style from "@/style/style.module.scss"


const navbarsubpage = () => {
  return (
    <>
      <section className={style.navbarcontainer}>
        <img src="/assets/worldcruise-logo-white.png" alt="logo" className={style.navlogo} />
        
        <ul className={style.navbarsubpagebtncon}>
          <li className={style.btn}>nyheder</li>
          <li className={style.btn}>kundeservice</li>
          <li className={style.btn}>Tøj</li>
          <li className={style.btn}>Oplevelser</li>
          <li className={style.btn}>Kultur</li>
        </ul>
        
        <div className={style.navbariconbox}>
        <img src="/assets/userLightBlue.png" alt="icon" className={style.usericon} />
        <div className={style.btn}>
          <img src="/assets/denmark.png" alt="flag" className={style.navbaricons} />
          <img src="/assets/bluedownarrow.png" alt="chevron" className={style.navbaricons} />

        </div>
        </div>
      </section>
    </>
  )
}

export default navbarsubpage