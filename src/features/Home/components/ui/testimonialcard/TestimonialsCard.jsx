
import "./testimonialsCard.css";

function TarjetaTestimonio({ texto, nombre, servicio }) {
    return (
        <article className="tarjeta-testimonio">
            <div className="tarjeta-testimonio__estrellas">
                ★★★★★
            </div>

            <p className="tarjeta-testimonio__texto">
                {texto}
            </p>

            <div className="tarjeta-testimonio__autor">
                <h3>{nombre}</h3>
                <span>{servicio}</span>
            </div>
        </article>
    );
}

export default TarjetaTestimonio;
