
import footerStyles from "./footer.module.css";

export const Footer = () => {
    return (
        <footer className={footerStyles.piePagina}>
            <div className={footerStyles.contenedor}>

                <div className={footerStyles.marca}>
                    <h2 className={footerStyles.logotipo}>
                        FRAMMEL GYM
                    </h2>

                    <p className={footerStyles.eslogan}>
                        Fuerza, disciplina y comunidad.
                    </p>

                    <p className={footerStyles.derechosReservados}>
                        © 2026 Frammel Gym. Todos los derechos reservados.
                    </p>
                </div>

                <nav className={footerStyles.navegacion}>
                    <a href="#inicio">Inicio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#contacto">Contacto</a>
                </nav>

            </div>
        </footer>
    );
};
