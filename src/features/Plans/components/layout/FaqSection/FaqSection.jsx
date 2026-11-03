import { useState } from 'react';
import { FaqItem } from '../../ui/FaqItem/FaqItem';
import faqStyles from './faqSection.module.css';

const faqs = [
  {
    question: '¿Hay costo de inscripción o matrícula adicional?',
    answer: 'No. En FRAMMEL Gym no cobramos matrícula ni costos ocultos de afiliación. Solo cancelas el valor correspondiente a tu mes de entrenamiento o la modalidad que elijas.',
  },
  {
    question: '¿Puedo congelar mi plan si salgo de viaje o por incapacidad?',
    answer: 'Sí. Entendemos que surgen compromisos laborales o de salud. Puedes congelar tu plan notificándonos con anticipación vía WhatsApp. El Plan Personalizado admite hasta 15 días continuos de congelación sin perder tus sesiones pagas.',
  },
  {
    question: '¿Cuáles son los métodos de pago aceptados?',
    answer: 'Aceptamos efectivo en recepción, transferencias directas por Bancolombia, Nequi y Daviplata, además de pagos con tarjetas débito y crédito a través de nuestro datáfono digital.',
  },
  {
    question: '¿Necesito experiencia previa para el Plan Personalizado?',
    answer: 'En lo absoluto. El Plan Personalizado es precisamente el más recomendado para personas que inician desde cero o que llevan años sedentarias. Albeiro Escobar te guiará con paciencia, enseñándote cada movimiento y adaptando el peso a tus capacidades reales.',
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer: 'Por supuesto. Al finalizar tu mes de suscripción o incluso durante el transcurso de este puedes solicitar un ascenso (upgrade) a Plan Personalizado o VIP cancelando el excedente proporcional.',
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={faqStyles.section}>
      <div className={faqStyles.container}>
        <div className={faqStyles.header}>
          <span className={faqStyles.label}>RESOLVEMOS TUS DUDAS</span>
          <h2 className={faqStyles.title}>Preguntas Frecuentes sobre Planes</h2>
          <p className={faqStyles.description}>
            Todo lo que necesitas saber antes de comenzar tu ciclo de entrenamiento en Santa Rosa de Osos.
          </p>
        </div>
        <div className={faqStyles.list}>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
