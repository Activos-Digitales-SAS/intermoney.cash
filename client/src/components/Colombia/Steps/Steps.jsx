import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaFileAlt, FaQrcode, FaMobileAlt, FaExchangeAlt, FaDollarSign } from 'react-icons/fa';
import styles from './Steps.module.css';

const steps = [
  { number: 1, text: 'Ir a activoswld.com', icon: <FaGlobe /> },
  { number: 2, text: 'Llenar el formulario', icon: <FaFileAlt /> },
  { number: 3, text: 'Escanea o copia la dirección', icon: <FaQrcode /> },
  { number: 4, text: 'Abre la WorldApp', icon: <FaMobileAlt /> },
  { number: 5, text: 'Transfiere tus WorldCoins', icon: <FaExchangeAlt /> },
  { number: 6, text: 'Recibe tu pago en unos minutos', icon: <FaDollarSign /> }
];



const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showNumber, setShowNumber] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNumber((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const transitionAnimation = {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: { opacity: 1, scale: 1, rotate: 360, transition: { duration: 0.8 } }
  };

  const numberToIconAnimation = {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: { opacity: 1, scale: 1.2, rotate: 360, transition: { duration: 0.8 } }
  };

  const iconToNumberAnimation = {
    hidden: { opacity: 0, scale: 1.2, rotate: 360 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <h2 className={styles.titleSteps}>Pasos para hacer tu primer cambio</h2>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
                 src="https://www.youtube.com/embed/X-URR2gls4s"
          title="Tutorial para enviar WorldCoins"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <motion.div
            className={styles.step}
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.1 }}
            variants={floatAnimation}
          >
            <motion.div
              className={styles.number}
              initial="hidden"
              animate="visible"
              variants={showNumber ? iconToNumberAnimation : numberToIconAnimation}
            >
              {showNumber ? step.number : step.icon}
            </motion.div>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
