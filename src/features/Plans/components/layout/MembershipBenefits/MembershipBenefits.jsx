import { BenefitCard } from '../../ui/BenefitCard/BenefitCard';
import benefitsStyles from './membershipBenefits.module.css';

const benefits = [
  {
    icon: 'accessibility_new',
    title: 'Valoración Biomecánica',
    description: 'Análisis completo de rangos articulares, movilidad y postura sin cobros sorpresa para evitar lesiones desde el primer día.',
    tag: 'Cero costo adicional',
  },
  {
    icon: 'lock_open',
    title: 'Sin Cláusulas Atadas',
    description: 'Entrenas con nosotros porque experimentas progreso tangible, no porque un contrato de permanencia te obligue a quedarte.',
    tag: 'Libertad total',
  },
  {
    icon: 'mode_fan',
    title: 'Espacio Climatizado',
    description: 'Instalaciones modernas en Carrera 28, segundo piso Local 202. Ventilación optimizada, orden riguroso y asepsia constante.',
    tag: 'Comodidad premium',
  },
  {
    icon: 'diversity_3',
    title: 'Ambiente Inclusivo',
    description: 'Cero intimidación. Una hermandad de superación personal que recibe con respeto a principiantes y deportistas avanzados.',
    tag: 'Comunidad Santarrosana',
  },
];

export const MembershipBenefits = () => {
  return (
    <section className={benefitsStyles.section}>
      <div className={benefitsStyles.container}>
        <div className={benefitsStyles.header}>
          <div>
            <span className={benefitsStyles.label}>TRANQUILIDAD & RIGOR</span>
            <h2 className={benefitsStyles.title}>¿Qué incluye cada membresía?</h2>
          </div>
          <p className={benefitsStyles.description}>
            Diseñamos una experiencia libre de fricciones para que tu única preocupación sea presentarte y
            superarte día tras día.
          </p>
        </div>
        <div className={benefitsStyles.grid}>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};
