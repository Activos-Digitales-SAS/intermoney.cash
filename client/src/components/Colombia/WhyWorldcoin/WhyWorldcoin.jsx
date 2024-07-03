import React, { useEffect, useState } from 'react';
import styles from './WhyWorldcoin.module.css';
import Button from '../Button/Button'; // Asegúrate de que la ruta sea correcta
import { FaCheckCircle } from 'react-icons/fa'; // Importa el icono de check
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const steps = [
  "Estamos regulados y auditados por la UIAF",
  "Contamos con sede física en Colombia",
  "Contamos con un equipo altamente capacitado"
];


const WhyWorldcoin = () => {
  const [displayedSteps, setDisplayedSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setDisplayedSteps((prev) => [...prev, steps[currentStep]]);
        setCurrentStep((prevStep) => prevStep + 1);
      }, 2000); // Espera 2 segundos antes de mostrar el siguiente paso

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className={styles.container}>
  <h2 className={styles.titleC}>¿Por qué cambiar con nosotros?</h2>

      <div className={styles.steps}>
        {displayedSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.step}
          >
            <FaCheckCircle className={styles.icon} />
            <p>{step}</p>
          </motion.div>
        ))}
      </div>
      <p>¿Tienes alguna pregunta? ¡Escríbenos ahora mismo!</p>

      <Button text="WhatsApp" icon={FaWhatsapp} url="https://wa.link/roktsr" />
    </div>
  );
};

export default WhyWorldcoin;
