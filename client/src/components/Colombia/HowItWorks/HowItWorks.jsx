import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../Button/Button';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Y5ciQpnbszU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.content}>
        <h2>¿Cómo Funciona?</h2>
        <p>
          En el siguiente video, te explicaré paso a paso cómo puedes participar y reclamar tu recompensa.
          Es muy fácil y rápido:
        </p>
        <Button text="WhatsApp" icon={FaWhatsapp} url="https://wa.link/roktsr" />
      </div>
    </div>
  );
};

export default HowItWorks;
