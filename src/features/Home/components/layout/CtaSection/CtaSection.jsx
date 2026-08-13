import { CtaSectionButton } from "../../ui/CtaSectionButton/CtaSectionButton"
import ctaSectionStyle from "./ctaSection.module.css"

export const CtaSection = () => {
  return (
    <section className={ctaSectionStyle.ctaSection}>
      <h2>¿Listo para transformarte?</h2>
      <p>Únete a la comunidad fitnes más grande de Santa Rosa de Osos y descubre de lo que eres capaz.</p>
      <CtaSectionButton /> 
    </section>
  )
}
