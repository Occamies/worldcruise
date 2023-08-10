"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

function SliderPage() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/images.json');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        handleNext();
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [index, isHovered]);

  const displayedImages = images.concat(images);

  return (
    <div className={`container-fluid text-center mt-4 p-5 ${styles.sliderContainer}`}>
      <div
        className={`${styles.slider} ${isHovered ? styles.paused : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.slideWrapper}>
          {displayedImages.map((image, idx) => (
            <div key={idx} className={styles.slide}>
                <img
                  src={`/images/${image}`}
                  alt={`Slide ${idx}`}
                  className={`img-fluid ${styles.img}`}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderPage;
