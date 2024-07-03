import React from 'react';
import { FaWhatsapp, FaMoneyBillWave } from 'react-icons/fa';
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
      <h2>¿Cómo funciona?</h2>
<p>
  En el video, te explico paso a paso cómo puedes cambiar tus WorldCoin y por qué hacerlo con nosotros es la mejor opción.
</p>

        {/*<Button text="WhatsApp" icon={FaWhatsapp} url="https://wa.link/roktsr" /> */} 
        <Button text="¡Vender WorldCoins!" icon={FaMoneyBillWave} url="https://activoswld.com/" />
      </div>
    </div>
  );
};

export default HowItWorks;
