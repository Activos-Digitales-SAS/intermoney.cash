import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaUserPlus, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import styles from './Steps.module.css';

const steps = [
  { number: 1, text: 'Descarga la APP', icon: <FaDownload /> },
  { number: 2, text: 'Regístrate y crea tu cuenta', icon: <FaUserPlus /> },
  { number: 3, text: 'Programa una cita', icon: <FaCalendarAlt /> },
  { number: 4, text: 'Acércate al Orbe más cercano', icon: <FaMapMarkerAlt /> },
  { number: 5, text: 'Proceso de Verificación', icon: <FaCheckCircle /> },
  { number: 6, text: 'Reclama tu recompensa', icon: <FaMoneyBillWave /> }
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
      <h2 className={styles.titleSteps}>¿Estás buscando una manera sencilla de ganar dinero extra?</h2>
      <p className={styles.subtitle}>
        ¡Tenemos la solución perfecta para ti! Worldcoin es un proyecto revolucionario que te ofrece la oportunidad de ganar 1100 Soles simplemente por registrarte y crear tu pasaporte digital universal.
      </p>
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
