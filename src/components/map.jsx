import React from 'react';
import styles from '../style/Map.module.scss';

function Map() {
  return (
    <div className={`row p-3 pb-2  ${styles.bg_blue}`}>
        <section className={`col-3`}>
            <article className={`row justify-content-center`}>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Mad
                </button>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Tøj
                </button>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Oplevelser
                </button>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Aktiviteter
                </button>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Elektronik
                </button>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Kultur
                </button>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Automator
                </button>
                <button className={`col-10 mb-4 ${styles.bg_dropdown}`}>
                    Sport
                </button>
                <button className={`col-10  ${styles.bg_dropdown}`}>
                    Vores hoved kontor
                </button>
                
            </article>
        
        </section>
        <section className={`col-9`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17780.34890045502!2d10.169232629094934!3d56.147705048012824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smad!5e0!3m2!1sda!2sdk!4v1691654057850!5m2!1sda!2sdk" width="100%" height="610" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 
        </section>
    </div>
  );
}

export default Map;
