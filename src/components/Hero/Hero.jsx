import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['hero11.webp', 'hero12.webp'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.hero}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h1>¿Estás en Lima?</h1>
        <h2>¡Gana Más de 1300 Soles Fácilmente!</h2>
        <p>Únete a la Revolución Digital con Worldcoin y Gana Más de 1100 Soles:</p>
        <button className={styles.cta}>
          <FaWhatsapp className={styles.icon} /> WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Hero;
