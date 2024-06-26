import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ text, icon: Icon, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  const buttonClass = text === "WhatsApp" ? styles.cta : styles.secondaryCta;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {Icon && <Icon className={styles.icon} />} {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  url: PropTypes.string.isRequired,
};

export default Button;
