import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import styles from './CEOProfile.module.css';

const CEOProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="/norman.png" alt="CEO" />
      </div>
      <div className={styles.content}>
        <h2>CEO & Fundador de Activos Digitales</h2>
        <p>
          Detrás del Éxito: Un Vistazo al Mundo Empresarial donde la influencia en las redes sociales se combina con el liderazgo. Con una base de seguidores que supera los 100,000, Norman ha consolidado su posición como un referente en las plataformas digitales. Pero su influencia va más allá: como exitoso empresario, Norman Luna dirige una próspera empresa que refleja su visión y creatividad.
        </p>
        <div className={styles.socials}>
          <a href="https://www.tiktok.com/@finanzasenlaluna"><span><FaFacebook className={styles.icon} /></span></a>
<a href="https://web.facebook.com/finanzasenlaluna">  <span><FaTiktok className={styles.icon} /></span></a>
        <a href="https://www.instagram.com/finanzasenlaluna/"><span><FaInstagram className={styles.icon} /></span></a>
          
        </div>
      </div>
    </div>
  );
};

export default CEOProfile;
