import styles from "./LocationSection.module.css";

export const LocationSection = () => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.locationContainer}>
        <div className={styles.locationInfo}>
          <h2 className={styles.locationTitle}>¿Dónde estamos?</h2>

          <div className={styles.locationItem}>
            <div className={styles.locationItemHeader}>
              <svg
                className={styles.locationIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <h3>Dirección</h3>
            </div>

            <p>Cra 28 #24-15, Calle Córdoba</p>
          </div>

          <div className={styles.locationItem}>
            <div className={styles.locationItemHeader}>
              <svg
                className={styles.locationIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M21 11.5C21 16.19 16.97 20 12 20C10.38 20 8.86 19.59 7.56 18.88L3 20L4.33 16.17C3.49 14.84 3 13.25 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3>WhatsApp</h3>
            </div>

            <p>312 654 7889</p>
          </div>

          <div className={styles.locationItem}>
            <div className={styles.locationItemHeader}>
              <svg
                className={styles.locationIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 7V12L15 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3>Horarios</h3>
            </div>

            <p>Lunes a sábado</p>
            <p>6:00 a. m. – 9:00 p. m.</p>
          </div>

          <a
            className={styles.locationButton}
            href="https://wa.me/573126547889"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className={styles.locationMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.6890549009159!2d-75.46074774176331!3d6.6438323352523145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1791489127849!5m2!1ses-419!2sco"
            title="Ubicación de FrammelGym"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};