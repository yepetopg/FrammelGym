import { useState } from "react";
import styles from "./ContactPage.module.css";

const WHATSAPP_URL =
  "https://wa.me/573126436819?text=Hola%20FRAMMEL%20Gym,%20deseo%20informaci%C3%B3n%20sobre%20membres%C3%ADas%20y%20entrenamiento.";

const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Santa+Rosa+de+Osos+Cra+28+25A-4";

const WAZE_URL =
  "https://waze.com/ul?q=Santa+Rosa+de+Osos+Cra+28+25A-4";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // El formulario muestra una confirmación visual.
    // Para enviar los datos realmente se necesitaría conectar un backend.
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              <span className={styles.statusDot} />
              FRAMMEL GYM · SANTA ROSA DE OSOS
            </span>

            <h1>
              Comunícate con FRAMMEL Gym.
              <span> Tu transformación empieza hoy.</span>
            </h1>

            <p className={styles.heroDescription}>
              Estamos aquí para acompañarte. Resuelve tus dudas sobre
              membresías, agenda tu primera visita o conoce nuestro
              entrenamiento personalizado con Albeiro Escobar.
            </p>

            <div className={styles.quickActions}>
              <a
                className={styles.quickAction}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>chat</span>
                WhatsApp directo
              </a>

              <a className={styles.quickAction} href="#ubicacion">
                <span className={styles.icon}>location_on</span>
                Cómo llegar
              </a>

              <span className={styles.quickAction}>
                <span className={styles.icon}>local_parking</span>
                Parqueadero disponible
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO Y FORMULARIO */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>ESTAMOS PARA AYUDARTE</span>
            <h2>Hablemos de tus objetivos</h2>
            <p>
              Elige el canal que más te convenga o envíanos tu consulta
              mediante el formulario.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* COLUMNA IZQUIERDA */}
            <div className={styles.contactDetails}>
              {/* WHATSAPP */}
              <article className={`${styles.card} ${styles.whatsappCard}`}>
                <div className={styles.cardIcon}>
                  <span className={styles.icon}>chat</span>
                </div>

                <span className={styles.eyebrow}>CONTACTO INMEDIATO</span>

                <h3>WhatsApp Oficial &amp; Asesoría Inmediata</h3>

                <p>
                  Escríbenos para consultar nuestros planes, resolver tus
                  dudas o programar una visita al gimnasio.
                </p>

                <a
                  className={styles.whatsappNumber}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +57 312 643 6819
                </a>

                <a
                  className={styles.primaryButton}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
                  <span className={styles.icon}>arrow_forward</span>
                </a>
              </article>

              {/* CANALES DIRECTOS */}
              <article className={styles.card}>
                <div className={styles.cardTitle}>
                  <div className={styles.cardIcon}>
                    <span className={styles.icon}>contact_mail</span>
                  </div>

                  <div>
                    <span className={styles.eyebrow}>CONTÁCTANOS</span>
                    <h3>Canales Directos</h3>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>
                    <span className={styles.icon}>location_on</span>
                  </span>

                  <div>
                    <h4>Dirección</h4>
                    <p>
                      Carrera 28 # 25A - 4, Local 202
                      <br />
                      Santa Rosa de Osos, Antioquia
                    </p>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>
                    <span className={styles.icon}>call</span>
                  </span>

                  <div>
                    <h4>Teléfono</h4>
                    <a href="tel:+573126436819">+57 312 643 6819</a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>
                    <span className={styles.icon}>mail</span>
                  </span>

                  <div>
                    <h4>Correo electrónico</h4>
                    <a href="mailto:contacto@frammelgym.com">
                      contacto@frammelgym.com
                    </a>
                    <a href="mailto:info@frammelgym.com">
                      info@frammelgym.com
                    </a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>
                    <span className={styles.icon}>share</span>
                  </span>

                  <div>
                    <h4>Redes sociales</h4>

                    <div className={styles.socialLinks}>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>

                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* HORARIOS */}
              <article className={styles.card} id="horarios">
                <div className={styles.cardTitle}>
                  <div className={styles.cardIcon}>
                    <span className={styles.icon}>schedule</span>
                  </div>

                  <div>
                    <span className={styles.eyebrow}>PLANIFICA TU RUTINA</span>
                    <h3>Horarios de Entrenamiento</h3>
                  </div>
                </div>

                <div className={styles.scheduleRow}>
                  <div>
                    <h4>Lunes a viernes</h4>
                    <p>Jornada de mañana</p>
                  </div>

                  <span>5:00 AM – 10:00 AM</span>
                </div>

                <div className={styles.scheduleRow}>
                  <div>
                    <h4>Lunes a viernes</h4>
                    <p>Jornada de tarde</p>
                  </div>

                  <span>2:00 PM – 8:00 PM</span>
                </div>

                <div className={styles.scheduleRow}>
                  <div>
                    <h4>Sábados y festivos</h4>
                    <p>Jornada única</p>
                  </div>

                  <span>7:00 AM – 11:00 AM</span>
                </div>

                <div className={styles.scheduleRow}>
                  <div>
                    <h4>Domingos</h4>
                    <p>Descanso</p>
                  </div>

                  <span className={styles.closedLabel}>Cerrado</span>
                </div>

                <p className={styles.scheduleNote}>
                  ¿Necesitas confirmar un horario especial?{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consúltanos por WhatsApp.
                  </a>
                </p>
              </article>
            </div>

            {/* FORMULARIO */}
            <div className={styles.formCard}>
              <div className={styles.formHeading}>
                <span className={styles.eyebrow}>TU PRÓXIMO PASO</span>
                <h2>Envíanos un mensaje o agenda tu visita</h2>
                <p>
                  Cuéntanos qué necesitas. Nuestro equipo estará preparado
                  para orientarte.
                </p>
              </div>

              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="user-name">
                      <span className={styles.icon}>person</span>
                      Nombre completo
                    </label>

                    <input
                      id="user-name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      autoComplete="name"
                      required
                      disabled={submitted}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="user-phone">
                      <span className={styles.icon}>call</span>
                      Número de contacto
                    </label>

                    <input
                      id="user-phone"
                      name="phone"
                      type="tel"
                      placeholder="Tu número de celular"
                      autoComplete="tel"
                      required
                      disabled={submitted}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="user-email">
                    <span className={styles.icon}>mail</span>
                    Correo electrónico
                  </label>

                  <input
                    id="user-email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    required
                    disabled={submitted}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service-select">
                    <span className={styles.icon}>fitness_center</span>
                    ¿Qué servicio o plan te interesa?
                  </label>

                  <select
                    id="service-select"
                    name="service"
                    defaultValue="personalizado"
                    disabled={submitted}
                  >
                    <option value="personalizado">
                      Entrenamiento Personalizado con Albeiro Escobar
                    </option>
                    <option value="dirigidas">
                      Clases Dirigidas &amp; Acompañamiento en Sala
                    </option>
                    <option value="funcional">
                      Clases Grupales &amp; Circuito Funcional
                    </option>
                    <option value="visita">
                      Visita Guiada / Pase Diario de Prueba
                    </option>
                    <option value="consulta">
                      Consulta General / Precios de Membresías
                    </option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="user-message">
                    <span className={styles.icon}>edit_note</span>
                    Mensaje / Consulta particular
                  </label>

                  <textarea
                    id="user-message"
                    name="message"
                    placeholder="Cuéntanos tus objetivos físicos, horarios preferidos o dudas..."
                    rows="4"
                    disabled={submitted}
                  />
                </div>

                <div className={styles.consent}>
                  <input
                    id="consent-check"
                    name="consent"
                    type="checkbox"
                    required
                    disabled={submitted}
                  />

                  <label htmlFor="consent-check">
                    Acepto la política de tratamiento de datos personales
                    conforme a la ley colombiana para ponerme en contacto con
                    el equipo de FRAMMEL Gym.
                  </label>
                </div>

                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={submitted}
                >
                  {submitted ? "Mensaje enviado ✓" : "Enviar mensaje y conectar"}

                  {!submitted && (
                    <span className={styles.icon}>arrow_forward</span>
                  )}
                </button>

                {submitted && (
                  <div
                    className={styles.formFeedback}
                    role="status"
                    aria-live="polite"
                  >
                    ¡Gracias! Tu mensaje fue recibido. Nos pondremos en
                    contacto contigo por WhatsApp en breve.
                  </div>
                )}

                <p className={styles.formNote}>
                  <span className={styles.icon}>verified</span>
                  Respuesta estimada en menos de 2 horas en días hábiles.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className={styles.locationSection} id="ubicacion">
        <div className={styles.container}>
          <div className={styles.locationHeading}>
            <div>
              <span className={styles.eyebrow}>GEOLOCALIZACIÓN</span>
              <h2>Encuéntranos en el corazón de Santa Rosa de Osos</h2>
              <p>
                A pocos minutos del parque principal, en una ubicación segura
                y accesible sobre el corredor de la Carrera 28.
              </p>
            </div>

            <div className={styles.mapActions}>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <span className={styles.icon}>map</span>
                Google Maps
              </a>

              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <span className={styles.icon}>navigation</span>
                Abrir en Waze
              </a>
            </div>
          </div>

          <div className={styles.locationGrid}>
            <div className={styles.mapPanel}>
              <div className={styles.mapPattern} />

              <div className={styles.mapRoad} />

              <div className={styles.mapMarker}>
                <span className={styles.icon}>fitness_center</span>
              </div>

              <div className={styles.mapLabel}>
                <span className={styles.mapLabelDot} />
                FRAMMEL GYM
                <small>Local 202 · Carrera 28</small>
              </div>

              <div className={styles.mapCaption}>
                <span className={styles.icon}>location_on</span>
                Santa Rosa de Osos, Antioquia
              </div>
            </div>

            <div className={styles.locationInfo}>
              <article className={styles.locationFeature}>
                <span className={styles.featureIcon}>
                  <span className={styles.icon}>near_me</span>
                </span>

                <div>
                  <h3>Puntos de referencia</h3>
                  <p>
                    Estamos ubicados sobre la Carrera 28, cerca del parque
                    principal de Santa Rosa de Osos.
                  </p>
                </div>
              </article>

              <article className={styles.locationFeature}>
                <span className={styles.featureIcon}>
                  <span className={styles.icon}>local_parking</span>
                </span>

                <div>
                  <h3>Parqueadero disponible</h3>
                  <p>
                    Consulta con nuestro equipo las opciones de parqueo al
                    momento de planificar tu visita.
                  </p>
                </div>
              </article>

              <article className={styles.locationFeature}>
                <span className={styles.featureIcon}>
                  <span className={styles.icon}>door_open</span>
                </span>

                <div>
                  <h3>Acceso y recepción</h3>
                  <p>
                    Al llegar, dirígete al Local 202. Nuestro equipo te
                    orientará para comenzar tu experiencia.
                  </p>
                </div>
              </article>

              <a
                className={styles.locationWhatsApp}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                ¿Necesitas indicaciones? Escríbenos
                <span className={styles.icon}>arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className={styles.faqSection} id="preguntas">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>RESOLVEMOS TUS DUDAS</span>
            <h2>Preguntas frecuentes</h2>
            <p>
              Queremos que llegues con confianza y tengas claro cómo empezar.
            </p>
          </div>

          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>
                ¿Puedo visitar el gimnasio antes de inscribirme?
                <span className={styles.icon}>add</span>
              </summary>

              <p>
                ¡Claro! Puedes escribirnos por WhatsApp para coordinar una
                visita guiada, conocer nuestras instalaciones y resolver tus
                dudas antes de elegir un plan.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>
                ¿Necesito una cita para entrenar con Albeiro Escobar?
                <span className={styles.icon}>add</span>
              </summary>

              <p>
                Te recomendamos contactarnos previamente para consultar la
                disponibilidad y coordinar tu valoración o sesión de
                entrenamiento personalizado.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>
                ¿Qué debo llevar para mi primera visita?
                <span className={styles.icon}>add</span>
              </summary>

              <p>
                Te recomendamos llevar ropa deportiva cómoda, calzado
                adecuado, una botella de agua y muchas ganas de entrenar.
              </p>
            </details>

            <details className={styles.faqItem}>
              <summary>
                ¿Qué medios de pago aceptan?
                <span className={styles.icon}>add</span>
              </summary>

              <p>
                Puedes consultar por WhatsApp los medios de pago disponibles.
                Entre las opciones contempladas están efectivo, Bancolombia,
                Nequi, Daviplata y tarjetas débito o crédito. Confirma con
                nuestro equipo cuáles están habilitadas actualmente.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.finalCta}>
        <div className={styles.ctaGlow} />

        <div className={styles.ctaContent}>
          <span className={styles.eyebrow}>TU CAMBIO COMIENZA AQUÍ</span>

          <h2>¿Listo para dar el paso hacia tu mejor versión?</h2>

          <p>
            Escríbenos y recibe asesoría personalizada para comenzar tu
            entrenamiento en FRAMMEL Gym.
          </p>

          <a
            className={styles.primaryButton}
            href="https://wa.me/573126436819?text=Hola%20FRAMMEL%20Gym!%20Quiero%20asesor%C3%ADa%20personalizada%20para%20iniciar%20mi%20entrenamiento."
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar con un asesor
            <span className={styles.icon}>arrow_forward</span>
          </a>

          <p className={styles.ctaNote}>
            Respuesta rápida vía WhatsApp · Santa Rosa de Osos
          </p>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;