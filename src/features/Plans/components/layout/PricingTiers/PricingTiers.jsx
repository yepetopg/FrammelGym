import { PricingCard } from '../../ui/PricingCard/PricingCard';
import { Icon } from '../../ui/Icon/Icon';
import pricingTiersStyles from './pricingTiers.module.css';

const prices = {
  monthly: {
    basic: '85.000',
    custom: '160.000',
    vip: '240.000',
    period: '/ mes',
    noteBasic: 'Tarifa mensual sin permanencia obligatoria',
    noteCustom: 'Supervisión constante con Albeiro Escobar',
    noteVip: 'Sesiones de máximo rigor y atención técnica',
  },
  quarterly: {
    basic: '76.500',
    custom: '144.000',
    vip: '216.000',
    period: '/ mes (facturado $229.500 trimestral)',
    noteBasic: 'Ahorras 10% en tu trimestre ($25.500)',
    noteCustom: 'Ahorras 10% en tu trimestre ($48.000)',
    noteVip: 'Ahorras 10% en tu trimestre ($72.000)',
  },
  annual: {
    basic: '68.000',
    custom: '128.000',
    vip: '192.000',
    period: '/ mes (facturado $816.000 anual)',
    noteBasic: 'Máximo ahorro del 20% anual',
    noteCustom: 'Máximo ahorro del 20% anual',
    noteVip: 'Máximo ahorro del 20% anual',
  },
};

const basicFeatures = [
  'Acceso total a zona de pesas y musculación',
  'Acceso a zona cardio pro y funcional',
  'Lockers individuales y duchas con vestidores',
  'Horarios continuos de lunes a sábado',
  'Registro de asistencia en recepción digital',
];

const customFeatures = [
  'Valoración física y biomecánica inicial personalizada',
  'Plan de entrenamiento individualizado por objetivos',
  'Acompañamiento presencial y corrección postural en sala',
  'Evaluación de progreso mensual y reajuste de cargas',
  'Guía nutricional de hábitos diarios sostenibles',
];

const vipFeatures = [
  'Entrenador 100% dedicado durante tu sesión',
  'Análisis biomecánico avanzado y monitoreo de fatiga',
  'Plan de nutrición deportiva ajustado por fase',
  'Acceso prioritario a equipos y soporte directo WhatsApp',
  'Opción de modalidad en Dupla con descuento adicional',
];

export const PricingTiers = ({ billingCycle }) => {
  const data = prices[billingCycle];

  return (
    <section className={pricingTiersStyles.section}>
      <div className={pricingTiersStyles.container}>
        <div className={pricingTiersStyles.grid}>
          <PricingCard
            badge="Acceso Libre"
            icon="fitness_center"
            title="Plan Básico"
            description="Ideal para atletas autónomos que buscan entrenar a su ritmo con la mejor maquinaria biomecánica y espacio funcional."
            price={data.basic}
            period={data.period}
            note={data.noteBasic}
            featuresLabel="Incluye:"
            features={basicFeatures}
            featureIcon="check"
            ctaText="Elegir Plan Básico"
            ctaHref="https://wa.me/573126436819?text=Hola%20FRAMMEL%20Gym,%20deseo%20inscribirme%20en%20el%20Plan%20Básico"
            isPopular={false}
          />
          <PricingCard
            badge="MÁS POPULAR • RESULTADOS"
            icon="workspace_premium"
            title="Plan Personalizado"
            description="El programa insignia de FRAMMEL Gym. Entrenamiento guiado paso a paso con seguimiento biomecánico y ajuste periódico."
            price={data.custom}
            period={data.period}
            note={data.noteCustom}
            featuresLabel="Todo lo del Plan Básico, más:"
            features={customFeatures}
            featureIcon="verified"
            ctaText="Comenzar Plan Personalizado"
            ctaHref="https://wa.me/573126436819?text=Hola%20Albeiro,%20quiero%20empezar%20el%20Plan%20Personalizado%20en%20FRAMMEL%20Gym"
            isPopular={true}
            noteColor="primary"
          />
          <PricingCard
            badge="1 a 1 Exclusivo"
            icon="military_tech"
            title="Plan Élite VIP"
            description="Máxima dedicación y supervisión técnica constante para metas aceleradas, rehabilitación deportiva o preparación competitiva."
            price={data.vip}
            period={data.period}
            note={data.noteVip}
            featuresLabel="Todo lo del Personalizado, más:"
            features={vipFeatures}
            featureIcon="check"
            ctaText="Solicitar Cupo VIP"
            ctaHref="https://wa.me/573126436819?text=Hola%20FRAMMEL%20Gym,%20me%20interesa%20conocer%20disponibilidad%20del%20Plan%20Élite%20VIP"
            isPopular={false}
            noteColor="outline"
          />
        </div>

        <div className={pricingTiersStyles.subBanner}>
          <div className={pricingTiersStyles.subGrid}>
            <div className={pricingTiersStyles.subItem}>
              <div className={pricingTiersStyles.subIcon}>
                <Icon name="school" size={28} />
              </div>
              <div>
                <div className={pricingTiersStyles.subHeader}>
                  <h4 className={pricingTiersStyles.subTitle}>Tarifa Especial Estudiantes</h4>
                  <span className={pricingTiersStyles.subBadgeGreen}>CARNÉ VIGENTE</span>
                </div>
                <p className={pricingTiersStyles.subDescription}>
                  Acceso completo a sala y cardio para estudiantes de colegio o universidad en Santa Rosa de Osos.
                </p>
                <div className={pricingTiersStyles.subPrice}>
                  <span className={pricingTiersStyles.subPriceValue}>$70.000</span>
                  <span className={pricingTiersStyles.subPriceLabel}>/ mes completo</span>
                </div>
              </div>
            </div>
            <div className={pricingTiersStyles.subItem}>
              <div className={pricingTiersStyles.subIcon}>
                <Icon name="confirmation_number" size={28} />
              </div>
              <div>
                <div className={pricingTiersStyles.subHeader}>
                  <h4 className={pricingTiersStyles.subTitle}>Pase Diario & Tiqueteras</h4>
                  <span className={pricingTiersStyles.subBadgeGray}>SIN COMPROMISO</span>
                </div>
                <p className={pricingTiersStyles.subDescription}>
                  ¿Estás de paso o viajas con frecuencia? Entrena cuando quieras sin perder tus sesiones.
                </p>
                <div className={pricingTiersStyles.subPriceRow}>
                  <div className={pricingTiersStyles.subPrice}>
                    <span className={pricingTiersStyles.subPriceValue}>$15.000</span>
                    <span className={pricingTiersStyles.subPriceLabel}>/ día</span>
                  </div>
                  <span className={pricingTiersStyles.subDivider}>•</span>
                  <div className={pricingTiersStyles.subPrice}>
                    <span className={`${pricingTiersStyles.subPriceValue} ${pricingTiersStyles.subPricePrimary}`}>$120.000</span>
                    <span className={pricingTiersStyles.subPriceLabel}>/ 10 sesiones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
