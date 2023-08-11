import React from 'react'
import style from '../../style/homepage.module.scss'
import Newsbox from '../../components/newsbox'
import Navbarsubpage from '@/components/navbarsubpage'

const page = () => {
  return (
    <main className={style.main}>
      <Navbarsubpage/>
      <Newsbox />
      <Newsbox />
      <Newsbox />
      <Newsbox />
    </main>
  )
}

export default page;