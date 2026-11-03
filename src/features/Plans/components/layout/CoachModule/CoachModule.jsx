import { Icon } from '../../ui/Icon/Icon';
import coachStyles from './coachModule.module.css';

export const CoachModule = () => {
  return (
    <section className={coachStyles.section}>
      <div className={coachStyles.container}>
        <div className={coachStyles.card}>
          <div className={coachStyles.glow} />
          <div className={coachStyles.grid}>
            <div className={coachStyles.photoCol}>
              <div className={coachStyles.photoBox}>
                <img
                  className={coachStyles.photo}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATU_70lE-73Z2PlHvPf0gRDV8romSOBya4d6zMxX7QLwe6OESQgVU0JjdFUyc1yrCz6AgkpGQH22_-MNI61ehHkAuVvVGbcdeu5QfzXmIJzrWOfbYDfD5IqOGxKFwKdSZ9fC3adxgmp-bVRhOKY4wOym8Qsn9-G1ccHX9p_PZTqQTFtUm6PAmrqj8OlWYZQIreBmixR6nKy4CZ-4knG2m2cLaNhybg4rJID3bijEw"
                  alt="Retrato de Albeiro Escobar, entrenador experto en FRAMMEL Gym"
                />
                <div className={coachStyles.photoOverlay} />
                <div className={coachStyles.photoBadge}>
                  <span>Head Coach & Fundador</span>
                </div>
              </div>
            </div>
            <div className={coachStyles.textCol}>
              <div className={coachStyles.experienceBadge}>
                <Icon name="verified_user" size={16} />
                <span>15 AÑOS DE TRAYECTORIA PROFESIONAL</span>
              </div>
              <h3 className={coachStyles.name}>Albeiro Escobar</h3>
              <p className={coachStyles.role}>Tecnólogo en Actividad Física • Especialista en Biomecánica Funcional</p>
              <blockquote className={coachStyles.quote}>
                "No vendemos una simple mensualidad de gimnasio; construimos el hábito, la técnica
                biomecánica y la disciplina necesaria para que transformes tu vida sin lesionarte."
              </blockquote>
              <p className={coachStyles.description}>
                En FRAMMEL Gym no eres un número de registro. Ya sea que elijas el Plan Básico o el
                Personalizado, tendrás la seguridad de entrenar en un espacio con supervisión calificada
                que cuida tu integridad articular y maximiza cada minuto invertido en el salón de máquinas.
              </p>
              <div className={coachStyles.ctaBox}>
                <a
                  className={coachStyles.cta}
                  href="https://wa.me/573126436819?text=Hola%20Albeiro,%20me%20gustaría%20agendar%20una%20valoración%20en%20FRAMMEL%20Gym"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="chat" size={20} />
                  <span>Conversar directamente con el entrenador</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
