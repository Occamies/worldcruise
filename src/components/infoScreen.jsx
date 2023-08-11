"use client"
import React, { useState, useEffect } from 'react'
import style from '../style/Infoscreen.module.scss'

const weatherDetails = [
  {
    icon: '/assets/wind.png',
    text: 'Vind: 19km/h',
  },
  {
    icon: '/assets/rays.png',
    text: 'Uv index: 7',
  },
  {
    icon: '/assets/visibility.png',
    text: 'Sigtbarhed: 9.66km',
  },
  {
    icon: '/assets/water.png',
    text: 'Vanddybde 2.500m',
  },
  {
    icon: '/assets/humidity.png',
    text: 'Fugtighed: 58%',
  },
  {
    icon: '/assets/up-and-down-arrow.png',
    text: 'Lufttryk: 1017.3 mb',
  },
];


const infoScreen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Opdater hver sekund

    return () => clearInterval(interval);
  }, []);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false // Brug 24-timers format
  };

  const localTime = currentTime.toLocaleTimeString(undefined, options);

  return (
    <section className={style.container}>
      <div className={style.overlay}></div>
      <div className={style.infoScreen}>
        <div className={style.header}>
          <div className={style.nextStop}>
            <h1>
              Næste Havn: Genoa
            </h1>
            <h2>Forventet ankomst: 14:45</h2>
          </div>
          <div >
            <h2 className={style.time}>{localTime}</h2>
            <p>08-08-2023</p>
          </div>
        </div>

        <div className={style.weatherContainer}>
          <div className={style.weathernow}>
            <div>
              <img src="/assets/sun.png" alt="" />
              <h2>34°C</h2>
            </div>
            <div>
              <img src="/assets/hot.png" alt="" />
              <h2>Sol op/Sol ned: 05.00 - 22:05</h2>
            </div>
          </div>
          <div className={style.line}></div>
        </div>

        <div className={style.weatherdetails}>
          {weatherDetails.map((detail, index) => (
            <div key={index}>
              <img src={detail.icon} alt="" />
              <p>{detail.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default infoScreen;