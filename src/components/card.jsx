import React from 'react'
import style from '../style/Card.module.scss'

const cardData = [
  {
    imageUrl: '/assets/golden-cutlery-with-textile-plate-dark-background-top-view.jpg',
    title: 'Mad',
    alt: 'Restauranter bg',
    icon: '/assets/fork.png',
  },
  {
    imageUrl: '/assets/shirt-mockup-concept-with-plain-clothing.jpg',
    title: 'Tøj',
    alt: 'Tøj ',
    icon: '/assets/tshirt.png',
  },
  {
    imageUrl: '/assets/young-smiley-man-rowing.jpg',
    title: 'Sport',
    alt: 'Mand der roer',
    icon: '/assets/ferris-wheel.png',
  },
  {
    imageUrl: '/assets/kultur.png',
    title: 'Kultur',
    alt: 'Museum',
    icon: '/assets/performing.png',
  },
];

const card = () => {
  return (
    <section>
      <div className={style.container}>
        {cardData.map((card, index) => (
          <a href="/" className={style.link} key={index}>
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