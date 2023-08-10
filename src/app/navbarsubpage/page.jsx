import React from 'react'
import style from "@/style/style.module.scss"


const page = () => {
  return (
    <>
      <section className={style.navbarcontainer}>
        <img src="/assets/worldcruise-logo-white.png" alt="" className={style.navlogo} />
        
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
          <img src="/assets/denmark.png" alt="" className={style.navbaricons} />
          <img src="/assets/bluedownarrow.png" alt="" className={style.navbaricons} />

        </div>
        </div>
      </section>
    </>
  )
}

export default page