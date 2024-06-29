import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaMoneyBillWave } from 'react-icons/fa'; // Importing the new icon
import Button from '../Button/Button';
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
        <h1>¿Estás en Colombia?</h1>
        <h2>¡Gana Más de 1.400.000 Pesos Fácilmente!</h2>
        <p>Únete a la Revolución Digital con Worldcoin y Gana Más de 1.400.000 Pesos:</p>
        <div className={styles.buttonContainer}>
          <Button text="WhatsApp" icon={FaWhatsapp} url="https://wa.link/roktsr" />
          <Button text="¡Vender!" icon={FaMoneyBillWave} url="https://activoswld.com/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
