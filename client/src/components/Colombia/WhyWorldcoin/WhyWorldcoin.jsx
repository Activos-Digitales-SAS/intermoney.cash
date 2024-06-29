import React, { useEffect, useState } from 'react';
import styles from './WhyWorldcoin.module.css';
import Button from '../Button/Button'; // Asegúrate de que la ruta sea correcta
import { FaCheckCircle } from 'react-icons/fa'; // Importa el icono de check
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const steps = [
  "Innovación: Sé parte de un proyecto que está transformando la identidad digital a nivel global.",
  "Recompensa Valiosa: Recibe 1.400.000 Pesos en WLD-WorldCoin, con un valor actual de 4.9 USD por moneda.",
  "Fácil de Usar: Todo el proceso es intuitivo y puede realizarse desde tu teléfono móvil."
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
      <h2 className={styles.titleC}>¿Por qué Worldcoin?</h2>
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
      <Button text="WhatsApp" icon={FaWhatsapp} url="https://wa.link/roktsr" />
    </div>
  );
};

export default WhyWorldcoin;
