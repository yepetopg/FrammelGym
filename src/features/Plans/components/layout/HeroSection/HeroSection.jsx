import { Icon } from '../../ui/Icon/Icon';
import { BillingToggle } from '../../ui/BillingToggle/BillingToggle';
import heroStyles from './heroSection.module.css';

const trustBadges = [
  'Sin cobro de matrícula',
  'Valoración inicial incluida',
  'Asesoría técnica con Albeiro Escobar',
  'Cancelación flexible',
];

export const HeroSection = ({ billingCycle, onBillingChange }) => {
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.glow1} />
      <div className={heroStyles.glow2} />
      <div className={heroStyles.inner}>
        <div className={heroStyles.badge}>
          <span className={heroStyles.badgeDot} />
          <span className={heroStyles.badgeText}>MEMBRESÍAS & TARIFAS 2026 • SANTA ROSA DE OSOS</span>
        </div>
        <h1 className={heroStyles.headline}>
          Invierte en tu salud con planes claros y{' '}
          <span className={heroStyles.highlight}>resultados reales</span>.
        </h1>
        <p className={heroStyles.subtitle}>
          Sin matrículas ocultas ni cláusulas complejas. Elige la modalidad de entrenamiento que mejor se
          adapte a tus objetivos, disponibilidad y nivel de exigencia en Santa Rosa de Osos.
        </p>
        <div className={heroStyles.trustBadges}>
          {trustBadges.map((badge) => (
            <span key={badge} className={heroStyles.trustBadge}>
              <Icon name="check_circle" size={18} className={heroStyles.trustIcon} />
              {badge}
            </span>
          ))}
        </div>
        <BillingToggle cycle={billingCycle} onChange={onBillingChange} />
      </div>
    </section>
  );
};
