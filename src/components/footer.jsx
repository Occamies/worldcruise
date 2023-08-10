import React from 'react'
import style from '../style/homepage.module.scss'

const footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <p className={style.copyright}>
        copyright {year} &copy; All rights reserved
      </p>

    </div>
  )
}

export default footer