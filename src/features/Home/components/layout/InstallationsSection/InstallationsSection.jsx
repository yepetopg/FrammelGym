import styles from "./InstallationsSection.module.css";
import { InstallationCard } from "../../ui/InstallationCard/InstallationCard";

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
          <InstallationCard
            image={installation01}
            alt="Zona de entrenamiento del gimnasio"
            className={styles.installationItem}
          />

          <InstallationCard
            image={installation02}
            alt="Máquinas de entrenamiento del gimnasio"
            className={styles.installationItem}
          />

          <InstallationCard
            image={installation03}
            alt="Zona de pesas del gimnasio"
            className={styles.installationItem}
          />

          <InstallationCard
            image={installation04}
            alt="Zona de cardio del gimnasio"
            className={styles.installationItem}
          />

          <InstallationCard
            image={installation05}
            alt="Zona de entrenamiento funcional"
            className={styles.installationItem}
          />

          <InstallationCard
            image={installation06}
            alt="Interior de las instalaciones del gimnasio"
            className={styles.installationItem}
          />
        </div>
      </div>
    </section>
  );
};