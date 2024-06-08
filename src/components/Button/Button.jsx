import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, icon: Icon }) => {
  const handleClick = () => {
    window.location.href = 'https://chat.whatsapp.com/IB4fYJHueqV4sEWcN4AKJu';
  };

  return (
    <button className={styles.cta} onClick={handleClick}>
      {Icon && <Icon className={styles.icon} />} {text}
    </button>
  );
};

export default Button;
