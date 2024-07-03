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
        <h1>Cambia tus WorldCoin</h1>
<h2>¡De manera rápida y segura!</h2>
<p>Más de 10 años de experiencia en el mercado y con sede física en Colombia.</p>

        <div className={styles.buttonContainer}>
          
          <Button text="¡Vender!" icon={FaMoneyBillWave} url="https://activoswld.com/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
