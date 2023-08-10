import React from 'react'
import style from '@/style/style.module.scss'

const newsbox = () => {
  return (
    <div className={style.newscon}>
      <img src="/assets/stock1.jpeg" alt="news img" className={style.newsimg} />
      <div className={style.textfield}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi animi voluptates debitis ea sequi! Assumenda ut dolor laboriosam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste quos temporibus doloribus corporis quod rerum, aliquam veniam  </p>
        <a href="#">læs mere...</a>
       
      </div>
    </div>
  )
}

export default newsbox