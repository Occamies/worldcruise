import React from 'react'
import style from '../style/Card.module.scss'
import Link from 'next/link';

const cardData = [
  {
    imageUrl: '/assets/golden-cutlery-with-textile-plate-dark-background-top-view.png',
    title: 'Mad',
    alt: 'Restauranter bg',
    icon: '/assets/fork.png',
    Link:'/productsubpage'
  },
  {
    imageUrl: '/assets/shirt-mockup-concept-with-plain-clothing.jpg',
    title: 'Tøj',
    alt: 'Tøj ',
    icon: '/assets/tshirt.png',
    Link:'/productsubpage'
  },
  {
    imageUrl: '/assets/young-smiley-man-rowing.jpg',
    title: 'Sport',
    alt: 'Mand der roer',
    icon: '/assets/ferris-wheel.png',
    Link:'/productsubpage'
  },
  {
    imageUrl: '/assets/kultur.jpg',
    title: 'Kultur',
    alt: 'Museum',
    icon: '/assets/performing.png',
    Link:'/productsubpage'
    
  },
];

const card = () => {
  return (
    <section className={style.main}>
      <div className={style.container}>
        {cardData.map((card, index) => (
          <a href={card.Link} className={style.link} key={index}>
            <div className={style.card}>
              <div className={style.cardbg}>
                <img src={card.imageUrl} alt={card.alt} />
              </div>
              <div className={style.overlay}></div>
              <div className={style.cardcontent}>
                <img src={card.icon} alt="" />
                <h2>{card.title}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className={style.scrolldown}>
        <img src="/assets/move.png" alt="" />
      </div>
    </section>
  )
}

export default card