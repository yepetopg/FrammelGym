import { Link } from "react-router"
import ctaSectionButtonStyle from "./ctaSectionButton.module.css"

export const CtaSectionButton = () => {
  return (
  <Link to={"/"} className={ctaSectionButtonStyle.ctaSectionButton}>
      <p>Empieza ahora</p>
      <img src="/arrow-right.svg" alt="Flecha a la derecha" />
  </Link> 
  )
}
