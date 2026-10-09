import ctaSectionButtonStyle from "./ctaSectionButton.module.css";
import { Link } from "react-router";

export const CtaSectionButton = () => {
  return (
  <Link to={"/"} className={ctaSectionButtonStyle.ctaSectionButton}>
      <p>Empieza ahora</p>
      <img src="/arrow-right.svg" alt="Flecha a la derecha" />
  </Link>
  )
}
