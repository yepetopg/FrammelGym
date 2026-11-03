import { Icon } from '../../ui/Icon/Icon';
import ctaStyles from './bottomCta.module.css';

export const BottomCta = () => {
  return (
    <section className={ctaStyles.section}>
      <div className={ctaStyles.gradient} />
      <div className={ctaStyles.container}>
        <div className={ctaStyles.card}>
          <span className={ctaStyles.badge}>ATENCIÓN PERSONALIZADA INMEDIATA</span>
          <h2 className={ctaStyles.title}>¿Tienes dudas sobre cuál plan elegir para tus objetivos?</h2>
          <p className={ctaStyles.description}>
            Escríbenos directamente a WhatsApp. Albeiro Escobar te asesorará personalmente según tu
            condición física actual, horarios y metas específicas.
          </p>
          <a
            className={ctaStyles.cta}
            href="https://wa.me/573126436819?text=Hola%20Albeiro,%20tengo%20dudas%20sobre%20cuál%20plan%20elegir%20en%20FRAMMEL%20Gym"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="chat" size={24} />
            <span>Escribir por WhatsApp ahora (+57 312 643 6819)</span>
            <Icon name="arrow_forward" size={20} />
          </a>
          <div className={ctaStyles.info}>
            <span className={ctaStyles.infoItem}>
              <Icon name="location_on" size={16} className={ctaStyles.infoIcon} />
              Carrera 28 # 25A - 4, Local 202
            </span>
            <span className={ctaStyles.infoDivider}>•</span>
            <span className={ctaStyles.infoItem}>
              <Icon name="schedule" size={16} className={ctaStyles.infoIcon} />
              Lunes a Viernes 5:00 AM - 9:00 PM | Sábados 6:00 AM - 4:00 PM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
