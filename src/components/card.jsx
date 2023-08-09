import React from 'react'
import style from '../style/Card.module.scss'

const cardData = [
  {
    imageUrl: '/assets/golden-cutlery-with-textile-plate-dark-background-top-view.jpg',
    title: 'Mad',
    alt: 'Restauranter bg',
  },
  {
    imageUrl: '/assets/shirt-mockup-concept-with-plain-clothing.jpg',
    title: 'Tøj',
    alt: 'Tøj ',
  },
  {
    imageUrl: '/assets/young-smiley-man-rowing.jpg',
    title: 'Sport',
    alt: 'Mand der roer',
  },
  {
    imageUrl: '/assets/kultur.png',
    title: 'Kultur',
    alt: 'Museum',
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
                <img src="/assets/fork.png" alt="" />
                <h2>{card.title}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default card