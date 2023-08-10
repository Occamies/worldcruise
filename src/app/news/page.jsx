import React from 'react'
import style from '../../style/News.module.scss'
import Btn from "@/app/navknap/btn"

const page = () => {
  return (
    <section className={style.news}>
      <div className={style.newsCard}>
        <h2>
          Lorem ipsum
        </h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Maecenas tempor enim auctor
          porta egestas. Integer laoreet
          ex at ligula lacinia, eget porttitor
          dolor hendrerit. Proin at efficitur
          turpis. Donec nunc diam, auctor
          et convallis eu, venenatis eget.
          Vivamus ullamcorper
        </p>
        <div className={style.btncontainer}>
          <Btn name={"Læs mere"} className={style.btn} />
        </div>
      </div>
      <div className={style.newsCard}>
        <h2>
          Lorem ipsum
        </h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Maecenas tempor enim auctor
          porta egestas. Integer laoreet
          ex at ligula lacinia, eget porttitor
          dolor hendrerit. Proin at efficitur
          turpis. Donec nunc diam, auctor
          et convallis eu, venenatis eget.
          Vivamus ullamcorper
        </p>

        <div className={style.btncontainer}>
          <Btn name={"Læs mere"} className={style.btn} />
        </div>
      </div>
      <div className={style.newsCard}>
        <h2>
          Lorem ipsum
        </h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Maecenas tempor enim auctor
          porta egestas. Integer laoreet
          ex at ligula lacinia, eget porttitor
          dolor hendrerit. Proin at efficitur
          turpis. Donec nunc diam, auctor
          et convallis eu, venenatis eget.
          Vivamus ullamcorper
        </p>
        <div className={style.btncontainer}>
          <Btn name={"Læs mere"} className={style.btn} />
        </div>
      </div>
    </section>
  )
}

export default page