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
        Soy un profesional con amplia trayectoria en el sector financiero, liderando tres destacadas empresas: <br />
CEO de Intermoney: Con 15 años en el cambio de divisas. <br />
CEO de Activos Digitales: Líder en comercio de criptomonedas en Colombia. <br />
CEO de Finanzas en la Luna: Fundé este canal con más de 100 mil seguidores para brindar educación financiera accesible. <br />
Mi misión es ofrecer soluciones financieras innovadoras y fomentar crecimiento económico.
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
