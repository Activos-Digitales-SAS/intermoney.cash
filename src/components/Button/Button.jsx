import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Button.module.css';

const Button = ({ text, icon }) => {
  return (
    <button className={styles.cta}>
      {icon && <FaWhatsapp className={styles.icon} />} {text}
    </button>
  );
};

export default Button;
