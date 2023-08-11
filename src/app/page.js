"use client"
import React, { useState, useEffect } from "react";
import style from '../style/homepage.module.scss'

//import components
import Navbar from '../components/navbar'
import Card from '../components/card'
import Slider from '../components/slider'
import News from '@/components/News'
import Footer from '../components/footer'
import Modal from '../components/modal'

export default function Home() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (event) => {
    setOpen(true);
    setIndex(event.currentTarget.dataset.index);
  }
  const closeModal = () => {
    setOpen(false);

    onComplete: () => {
      setOpen(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <main className={style.main}>
      <Navbar />
      <Card />
      <Slider />
      <News />
      <Footer />

      <Modal
        isOpen={open}
        onClose={closeModal}
      />
    </main>
  )
}