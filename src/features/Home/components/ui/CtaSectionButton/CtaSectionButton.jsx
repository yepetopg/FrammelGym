import ctaSectionButtonStyle from "./ctaSectionButton.module.css"

export const CtaSectionButton = () => {
  return (
  <a href="/" className={ctaSectionButtonStyle.ctaSectionButton}>
      <p>Empieza ahora</p>
      <img src="/arrow-right.svg" alt="Flecha a la derecha" />
  </a>
  )
}
