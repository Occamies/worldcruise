import React from 'react'
import style from '@/style/style.module.scss'

const newsbox = () => {
  return (
    <div className={style.newscon}>
      <img src="/assets/stock1.jpeg" alt="news img" className={style.newsimg} />
      <div>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi animi voluptates debitis ea sequi! Assumenda ut dolor laboriosam mollitia. <a href="#">læs mere...</a></p>
       
      </div>
    </div>
  )
}

export default newsbox