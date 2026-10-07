import styles from "./InstallationsSection.module.css";

import installation01 from "../../../assets/images/instalaciones_1.jpg";
import installation02 from "../../../assets/images/instalaciones_2.jpg";
import installation03 from "../../../assets/images/instalaciones_3.jpg";
import installation04 from "../../../assets/images/instalaciones_4.jpg";
import installation05 from "../../../assets/images/instalaciones_5.jpg";
import installation06 from "../../../assets/images/instalaciones_6.jpg";

export const InstallationsSection = () => {
  return (
    <section className={styles.installationsSection}>
      <div className={styles.installationsContainer}>
        <h2 className={styles.installationsTitle}>
          Nuestras Instalaciones
        </h2>

        <div className={styles.installationsGallery}>
          <div className={styles.installationItem}>
            <img
              src={installation01}
              alt="Zona de entrenamiento del gimnasio"
            />
          </div>

          <div className={styles.installationItem}>
            <img
              src={installation02}
              alt="Máquinas de entrenamiento del gimnasio"
            />
          </div>

          <div className={styles.installationItem}>
            <img
              src={installation03}
              alt="Zona de pesas del gimnasio"
            />
          </div>

          <div className={styles.installationItem}>
            <img
              src={installation04}
              alt="Zona de cardio del gimnasio"
            />
          </div>

          <div className={styles.installationItem}>
            <img
              src={installation05}
              alt="Zona de entrenamiento funcional"
            />
          </div>

          <div className={styles.installationItem}>
            <img
              src={installation06}
              alt="Interior de las instalaciones del gimnasio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};