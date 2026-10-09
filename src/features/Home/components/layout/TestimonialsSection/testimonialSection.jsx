import styles from "./TestimonialsSection.module.css";
import TarjetaTestimonio from "../../ui/testimonialcard/TestimonialsCard";

export function TestimonialSection() {
  const testimonios = [
    {
      texto: "Llevaba mucho tiempo buscando un cambio. Gracias al acompañamiento, mejoré mis hábitos y conseguí resultados increíbles.",
      nombre: "Carlos Medina",
      servicio: "plan basico"
    },
    {
      texto: "Me sorprendió la atención personalizada. Cada sesión me ayudó a superar mis límites y mantener la motivación.",
      nombre: "María Lopez",
      servicio: "Plan personalizado"
    },
    {
      texto: "Ahora tengo más energía, confianza y ganas de seguir mejorando. La experiencia ha sido excelente.",
      nombre: "Juan Perez",
      servicio: "plan estudiantil"
    }
  ];

  return (
    <section className={styles["seccion-testimonios"]}>
      <div className={styles["seccion-testimonios__contenedor"]}>
        <h2 className={styles["seccion-testimonios__titulo"]}>
          Historias de Transformación
        </h2>

        <div className={styles["seccion-testimonios__rejilla"]}>
          {testimonios.map((testimonio, indice) => (
            <TarjetaTestimonio
              key={indice}
              texto={testimonio.texto}
              nombre={testimonio.nombre}
              servicio={testimonio.servicio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}




