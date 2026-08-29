import ServiceActionCard from "../../ui/serviceActionCard/ServiceActionCard.jsx";
import styles from "./ServiceAction.module.css";

import icon1 from "../../../../../assets/service1.png";
import icon2 from "../../../../../assets/service2.png";
import icon3 from "../../../../../assets/service3.png";

export function ServiceAction() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h2 className={styles.title}>
                    Más que un gimnasio, una comunidad
                </h2>

                <div className={styles.line}></div>

                <div className={styles.cards}>

                    <ServiceActionCard
                        image={icon1}
                        title="Para todas las edades"
                        text="Creamos un espacio saludable para jóvenes, adultos y personas mayores, sin importar su nivel de experiencia."
                    />

                    <ServiceActionCard
                        image={icon2}
                        title="Entrenamiento acompañado"
                        text="Nunca estarás solo. Nuestros expertos están para ayudarte, corregir tus ejercicios y evitar lesiones."
                    />

                    <ServiceActionCard
                        image={icon3}
                        title="15 años de experiencia"
                        text="Llevamos 15 años creando, haciendo entrenamiento exitoso para nuestra comunidad."
                    />

                </div>

            </div>
        </section>
    );
}
