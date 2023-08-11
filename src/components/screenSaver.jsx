import React, { useState, useEffect } from 'react';
import style from '../style/screenSaver.module.scss'

const images = [
  'stock1.jpeg',
  'stock2.jpeg',
  'stock3.jpeg'
];

function screenSaver() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={style.sliderContainer}>
      <img
        src={`assets/${images[currentIndex]}`}
        alt={`Slide ${currentIndex}`}
        className={style.sliderImage}
      />
    </div>
  );
}

export default screenSaver;
