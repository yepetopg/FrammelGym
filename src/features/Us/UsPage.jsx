import { useState } from "react";
import styles from "./UsPage.module.css";

export default function UsPage() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq((current) => (current === index ? null : index));
    };

    return (
        <div className={styles.aboutUs}>
            <section className={styles.block1}>
                <div className={styles.block3}>
                    <div
                        className={styles.block8}>
                        <span className={styles.block9}></span>
                        <span className={styles.block10}>
                            Nuestra Historia &amp; Filosofía • Santa Rosa de Osos
                        </span>
                    </div>
                    <div className={styles.block11}>
                        <h1 className={styles.block12}>
                            Más que un gimnasio, un santuario de disciplina y
                            <span className={styles.block13}>superación.</span>
                        </h1>
                        <p className={styles.block14}>
                            Nacimos en Santa Rosa de Osos con una misión innegociable: desmitificar el entrenamiento de élite,
                            erradicar las lesiones por mala técnica y brindarte un espacio donde cada repetición cuenta para tu vida
                            diaria.
                        </p>
                    </div>
                    <div className={styles.block15}>
                        <div className={styles.block16}>
                            <div className={styles.block17}>
                                <span className={styles.block18}>15+</span>
                                <span className={styles.block19}>history_edu</span>
                            </div>
                            <div>
                                <p className={styles.block20}>Años de
                                    Trayectoria</p>
                                <p className={styles.block21}>En biomecánica y ciencias aplicadas
                                </p>
                            </div>
                        </div>
                        <div className={styles.block16}>
                            <div className={styles.block17}>
                                <span className={styles.block18}>+1,200</span>
                                <span className={styles.block19}>groups</span>
                            </div>
                            <div>
                                <p className={styles.block20}>Vidas
                                    Transformadas</p>
                                <p className={styles.block21}>Atletas y familias de la región</p>
                            </div>
                        </div>
                        <div className={styles.block16}>
                            <div className={styles.block17}>
                                <span className={styles.block18}>100%</span>
                                <span className={styles.block19}>verified_user</span>
                            </div>
                            <div>
                                <p className={styles.block20}>
                                    Acompañamiento</p>
                                <p className={styles.block21}>Atención cercana, cero elitismo</p>
                            </div>
                        </div>
                        <div className={styles.block16}>
                            <div className={styles.block17}>
                                <span className={styles.block18}>0</span>
                                <span className={styles.block19}>lock_open</span>
                            </div>
                            <div>
                                <p className={styles.block20}>Cláusulas
                                    Forzosas</p>
                                <p className={styles.block21}>Sin letra pequeña ni falsedad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.block22}>
                <div className={styles.block23}>
                    <div className={styles.block24}>
                        <div className={styles.block25}>
                            <span className={styles.block26}>El
                                Origen</span>
                            <h2 className={styles.block27}>
                                Construido desde la pasión por la biomecánica y el respeto por el atleta.
                            </h2>
                            <div className={styles.block28}>
                                <p>
                                    Cansados de los gimnasios masivos donde las personas son solo un número de torniquete y se lesionan
                                    por falta de supervisión profesional, decidimos crear un santuario de entrenamiento funcional y de
                                    fuerza con máquinas de alta precisión biomecánica en el segundo piso de la Carrera 28.
                                </p>
                                <p>
                                    FRAMMEL no surgió como una franquicia comercial genérica. Nació en las montañas de Santa Rosa de Osos
                                    como un espacio de resistencia y honestidad: donde no se toleran posturas lesivas por levantar más
                                    kilos para las fotos, sino donde cada atleta aprende a dominar su propio centro de gravedad.
                                </p>
                            </div>
                            <div
                                className={styles.block29}>
                                <div className={styles.block30}></div>
                                <p className={styles.block31}>
                                    “El verdadero progreso físico no se mide solo en el peso que levantas hoy, sino en cómo se mueven tus
                                    articulaciones dentro de 20 años”
                                </p>
                                <div className={styles.block32}>
                                    <span className={styles.block33}>Albeiro Escobar</span>
                                    <span className={styles.block34}>•</span>
                                    <span className={styles.block35}>Director Técnico FRAMMEL</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block36}>
                            <div className={styles.block37}>
                                <img className={styles.block38}
                                    data-alt="Modern dark athletic gym floor in Santa Rosa de Osos with matte black dumbbells, heavy duty power racks, dark steel plates, atmospheric emerald green rim lighting and deep slate textures in a cinematic photography style"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu4tznYK9DVc0_UvyIdG8oR-16lf_x39V34J8kM903FiwakH8pZL3lEqFzZP0pXwtACJ3TBHmY8BBoL5cMo3tukJDMd1BHhedJKwY6j8UZo_kxraBqbU95IZFtvtq4AkMIHNJob-MJWZoAMvJ9col4UxK8rLuPEe2gltY-eVGQEsjzyBwaAm531F6x6EnG6wMGL4lgxqBKtCbYq6xGsCOvzxC5bJImKnfaKPmoWsc" />
                                <div
                                    className={styles.block39}>
                                </div>
                                <div
                                    className={styles.block40}>
                                    <div
                                        className={styles.block41}>
                                        <span className={styles.block42}>precision_manufacturing</span>
                                    </div>
                                    <div className={styles.block43}>
                                        <span className={styles.block44}>Sede Santa
                                            Rosa de Osos · Local 202</span>
                                        <p className={styles.block21}>Equipamiento biomecánico
                                            seleccionado pieza por pieza para trayectoria natural sin fricción articular.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.block46}>
                <div className={styles.block23}>
                    <div className={styles.block47}>
                        <span className={styles.block26}>Lo Que Nos
                            Mueve</span>
                        <h2 className={styles.block48}>
                            Los 4 pilares innegociables de FRAMMEL Gym
                        </h2>
                        <p className={styles.block49}>
                            Nuestras directrices éticas y metodológicas que aseguran longevidad, seguridad y transformación real sin
                            atajos perjudiciales.
                        </p>
                    </div>
                    <div className={styles.block50}>
                        <div
                            className={styles.block51}>
                            <div>
                                <div
                                    className={styles.block52}>
                                    <span className={styles.block53}>vital_signs</span>
                                </div>
                                <h3 className={styles.block54}>
                                    Rigor Biomecánico &amp; Cero Lesiones
                                </h3>
                                <p className={styles.block55}>
                                    La técnica precede al peso siempre. Supervisión constante en cada ángulo para blindar articulaciones,
                                    zona lumbar y cervicales.
                                </p>
                            </div>
                            <div
                                className={styles.block56}>
                                <span>Seguridad Primero</span>
                                <span className={styles.block57}>chevron_right</span>
                            </div>
                        </div>
                        <div
                            className={styles.block51}>
                            <div>
                                <div
                                    className={styles.block52}>
                                    <span className={styles.block53}>diversity_3</span>
                                </div>
                                <h3 className={styles.block54}>
                                    Comunidad Sin Intimidación
                                </h3>
                                <p className={styles.block55}>
                                    Un ambiente donde novatos de 14 años y adultos mayores de 65 años entrenan hombro a hombro con atletas
                                    de élite en absoluto respeto mutuo.
                                </p>
                            </div>
                            <div
                                className={styles.block56}>
                                <span>Inclusión Real</span>
                                <span className={styles.block57}>chevron_right</span>
                            </div>
                        </div>
                        <div
                            className={styles.block51}>
                            <div>
                                <div
                                    className={styles.block52}>
                                    <span className={styles.block53}>trending_up</span>
                                </div>
                                <h3 className={styles.block54}>
                                    Resultados Reales y Progresión
                                </h3>
                                <p className={styles.block55}>
                                    Basados en ciencia del deporte y sobrecarga progresiva cuantificable. Sin suplementación obligada ni
                                    dietas milagrosas insostenibles.
                                </p>
                            </div>
                            <div
                                className={styles.block56}>
                                <span>Ciencia Aplicada</span>
                                <span className={styles.block57}>chevron_right</span>
                            </div>
                        </div>
                        <div
                            className={styles.block51}>
                            <div>
                                <div
                                    className={styles.block52}>
                                    <span className={styles.block53}>handshake</span>
                                </div>
                                <h3 className={styles.block54}>
                                    Honestidad &amp; Transparencia Total
                                </h3>
                                <p className={styles.block55}>
                                    Sin cobros ocultos de inscripción, tarifas justas y transparentes para la comunidad de Santa Rosa y
                                    disposición humana inmediata.
                                </p>
                            </div>
                            <div
                                className={styles.block56}>
                                <span>Ética Profesional</span>
                                <span className={styles.block57}>chevron_right</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.block22}>
                <div className={styles.block23}>
                    <div className={styles.block58}>
                        <div className={styles.block60}>
                            <div className={styles.block61}>
                                <div className={styles.block62}>
                                    <img className={styles.block63}
                                        data-alt="Professional striking portrait of athletic director Albeiro Escobar, mature coach with disciplined posture, athletic black polo shirt with minimalist branding, dark moody photography studio lighting with soft emerald green edge light, cinematic sports portrait"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Sre6uI_f4B3wo49Rxwoakq78cMIVIeiHKRQ-RwnZdssLc96azW1jTEqbezkk9sHLtug-V2LvCjhgwbfWwHVrs49jdl7fyjYG6Fal60eTcLjJUVKwoL2sAAuyaanA6U766w4F0r-e5jbsleEi051kfYRTiADSFbq1PSmQVJ3NiUI6qmqdVjaws4Jm89WebNQTbkY_NCEOUWTvUX_heRpxW6SKPb49mrCvf96Fo8s" />
                                    <div
                                        className={styles.block64}>
                                    </div>
                                    <div className={styles.block65}>
                                        <span className={styles.block66}>Albeiro
                                            Escobar</span>
                                        <span className={styles.block67}>Director Técnico &amp; Fundador de
                                            FRAMMEL</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.block68}>
                                <div>
                                    <span className={styles.block69}>Liderazgo
                                        &amp; Dirección Técnica</span>
                                    <h2 className={styles.block70}>Albeiro Escobar</h2>
                                    <p className={styles.block71}>
                                        Especialista en Biomecánica Funcional &amp; Ciencias de la Actividad Física
                                    </p>
                                </div>
                                <div className={styles.block72}>
                                    <span
                                        className={styles.block73}>
                                        15 Años de Experiencia
                                    </span>
                                    <span
                                        className={styles.block73}>
                                        Tecnólogo en Ciencias del Deporte
                                    </span>
                                    <span
                                        className={styles.block74}>
                                        Mentor de Levantamiento Seguro
                                    </span>
                                </div>
                                <div
                                    className={styles.block75}>
                                    “No vendemos una simple mensualidad de gimnasio; construimos el hábito, la técnica y la disciplina que
                                    salvan tu espalda y transforman tu seguridad personal.”
                                </div>
                                <div className={styles.block76}>
                                    <span
                                        className={styles.block77}>Campos
                                        de Especialización:</span>
                                    <div className={styles.block78}>
                                        <div className={styles.block79}>
                                            <span className={styles.block80}>check_circle</span>
                                            <span>Recomposición corporal integral</span>
                                        </div>
                                        <div className={styles.block79}>
                                            <span className={styles.block80}>check_circle</span>
                                            <span>Biomecánica y salud articular</span>
                                        </div>
                                        <div className={styles.block79}>
                                            <span className={styles.block80}>check_circle</span>
                                            <span>Rehabilitación de movilidad</span>
                                        </div>
                                        <div className={styles.block79}>
                                            <span className={styles.block80}>check_circle</span>
                                            <span>Sobrecarga progresiva de fuerza</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.block81}>
                                    <a className={styles.block82}
                                        href="https://wa.me/573126436819?text=Hola%20Albeiro,%20quiero%20conocer%20FRAMMEL%20Gym%20y%20hacer%20una%20sesi%C3%B3n%20evaluativa."
                                        rel="noopener noreferrer" target="_blank">
                                        <span className={styles.block42}>chat</span>
                                        <span>Conversar directamente con Albeiro por WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.block46}>
                <div className={styles.block23}>
                    <div className={styles.block83}>
                        <div>
                            <span className={styles.block26}>Instalaciones
                                De Élite</span>
                            <h2 className={styles.block70}>Conoce nuestro espacio de entrenamiento
                            </h2>
                        </div>
                        <p className={styles.block84}>
                            Diseñado para maximizar tu enfoque mental y tu rendimiento físico en cada sesión sin distracciones.
                        </p>
                    </div>
                    <div className={styles.block85}>
                        <div className={styles.block86}>
                            <div className={styles.block87}>
                                <img className={styles.block88}
                                    data-alt="Heavy dumbbell rack and professional powerlifting stations inside FRAMMEL gym, high contrast dark architectural lighting, clean rubber gym floor, emerald green illuminated details, cinematic angle"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0HMPSn8XlSMpdgdP5d--UFMrZzK6hG6tg2euNfuJqMmVebIIMB3LZXTa8W8bMB1YM8z3KcNWpmPBoaVuZMa-WZ6Gm3EOTJp_50DLhzZuFpFui7GsrUFYnogpq5sC6Ve03lG2Mu1LHdptTtGDx3P0pMUKe76WV1Afsfuu-zrDn_1OwluXrdL1J_av-vtr2-0BJJjx9AmqKLvTFQLp5y3fc8SaZdbwfeIE0uCfV0-s" />
                                <div
                                    className={styles.block89}>
                                    Área 01
                                </div>
                            </div>
                            <div className={styles.block90}>
                                <div>
                                    <h3 className={styles.block91}>Zona de Musculación &amp; Biomecánica
                                    </h3>
                                    <p className={styles.block55}>
                                        Bancos regulables multiangulares, mancuernas de alto gramaje equilibradas, jaulas de potencia y
                                        máquinas selectorizadas con curvas de resistencia naturales.
                                    </p>
                                </div>
                                <div className={styles.block92}>
                                    <span className={styles.block80}>fitness_center</span>
                                    <span>Pesas libres de 2.5kg a 45kg</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block86}>
                            <div className={styles.block87}>
                                <img className={styles.block88}
                                    data-alt="Specialized Glute and Hip Thrust machine station in a dark modern gym, ergonomic lumbar support backrest, barbell collars and heavy resistance bands, cinematic dark luxury aesthetic"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2DjdUAECQy5SWT20k4R91LF9wTeSnnMMUHV9eZ2l3oeJmUbnepNZoydUy-bOGNffQiuik_q2e5ZZxVbwAnhpOkaLrzCio3FfvsSH3SbjSleb3J702rTAq-qm-W8jCscZtWuSs5c9fEAcQ5vzPWzU4v6GXYmxxpYp1hnj1j7zwOSzl2mrVGymxu3z4Bbp4TL_Q-_yczhZihKldmziIyK5rrixuUzKcBXx-VvBpfgs" />
                                <div
                                    className={styles.block89}>
                                    Área 02
                                </div>
                            </div>
                            <div className={styles.block90}>
                                <div>
                                    <h3 className={styles.block91}>Zona de Fuerza &amp; Hip Thrust
                                        Especializado</h3>
                                    <p className={styles.block55}>
                                        Estación dedicada con soporte lumbar anatómico para hipertrofia de glúteo e isquiotibiales con
                                        técnica milimétrica y cero estrés espinal.
                                    </p>
                                </div>
                                <div className={styles.block92}>
                                    <span className={styles.block80}>airline_seat_recline_extra</span>
                                    <span>Alineación articular garantizada</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block86}>
                            <div className={styles.block87}>
                                <img className={styles.block88}
                                    data-alt="Cardiovascular and functional training area with rowers, stationary bikes and synthetic turf strip, atmospheric overhead linear green neon lighting in a dark minimal fitness room"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4VTWr-VftPtoaiAfiqevaQpPXoc8hoD_mPH5lHoaV-b6_JWJVWPuQpThECgazElOhOVVeS1500ZrzyWgxbpzJTVlyXSyX9WJxoMRLXg71HOd0QN8thtmsbV5puOO-CWyCcqQRv2pWg9VpnyJnv4NlvrY2a8LZE0EYj7fnzaNb_XRhxilUKRPpb3_lxPrJx_dI3TokvCtSouaCYneaJSj4eyAS0dZ5ge09FpM8gvQ" />
                                <div
                                    className={styles.block89}>
                                    Área 03
                                </div>
                            </div>
                            <div className={styles.block90}>
                                <div>
                                    <h3 className={styles.block91}>Acondicionamiento Metabólico &amp; Cardio
                                    </h3>
                                    <p className={styles.block55}>
                                        Caminadoras con absorción de impacto, bicicletas estáticas y área despejada para protocolos HIIT,
                                        pliometría y movilidad dinámica.
                                    </p>
                                </div>
                                <div className={styles.block92}>
                                    <span className={styles.block80}>favorite</span>
                                    <span>Monitoreo de frecuencia cardíaca</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block86}>
                            <div className={styles.block87}>
                                <img className={styles.block88}
                                    data-alt="Clean architectural gym changing rooms and luxury hydration lounge with matte black secure lockers, minimalist washbasins and premium healthy espresso corner in warm dim light"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMYlQd-s5_IktLS8QcoCB6_n_XTUtqW2UDmh1G0ljDcJSNG6Z6Lo0L5VsCct3ig9e-zyLqS_wbu1VD86C0F5f2ikCRQZjywgIQ4LUu9HoGK_H8JWmJxs0v1RcSQ6Giv_HJ4KkqbCI--k-Fm8HXQIxFARAjM0sxm2CkUlKsrmrg-9KjhrYD-XEXhkZdWiiUebTNGLnhZ537lijIcqbtBLv16YukkFjx7MmSvkfJ7Ig" />
                                <div
                                    className={styles.block89}>
                                    Área 04
                                </div>
                            </div>
                            <div className={styles.block90}>
                                <div>
                                    <h3 className={styles.block91}>Vestidores, Hidratación &amp; Cafetería
                                        Saludable</h3>
                                    <p className={styles.block55}>
                                        Casilleros individuales seguros, duchas higiénicas, WiFi de alta velocidad y estación de café de
                                        especialidad para tu pre y post entreno.
                                    </p>
                                </div>
                                <div className={styles.block92}>
                                    <span className={styles.block80}>coffee</span>
                                    <span>Comodidad y descanso premium</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.block22}>
                <div className={styles.block23}>
                    <div className={styles.block47}>
                        <span className={styles.block26}>Voz De Nuestra
                            Gente</span>
                        <h2 className={styles.block70}>Lo que dice nuestra comunidad
                            santarrosana</h2>
                        <p className={styles.block93}>
                            Historias de superación de personas reales que encontraron en FRAMMEL salud, fuerza y una disciplina
                            sostenible.
                        </p>
                    </div>
                    <div className={styles.block94}>
                        <div className={styles.block95}>
                            <div>
                                <div className={styles.block96}>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className={styles.block97}>
                                    “Llegué con dolor crónico lumbar de otros gimnasios. Albeiro me corrigió la técnica en peso muerto y
                                    hoy levanto el doble sin molestia alguna.”
                                </p>
                            </div>
                            <div className={styles.block98}>
                                <div
                                    className={styles.block99}>
                                    MG
                                </div>
                                <div>
                                    <h4 className={styles.block100}>Mateo G.</h4>
                                    <p className={styles.block101}>Atleta de Fuerza • Santa Rosa</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block95}>
                            <div>
                                <div className={styles.block96}>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className={styles.block97}>
                                    “Tenía miedo de entrar a un gimnasio por sentirme juzgada. En FRAMMEL me recibieron con paciencia y
                                    una rutina adaptada a mis horarios y nivel.”
                                </p>
                            </div>
                            <div className={styles.block98}>
                                <div
                                    className={styles.block99}>
                                    CV
                                </div>
                                <div>
                                    <h4 className={styles.block100}>Carolina V.</h4>
                                    <p className={styles.block101}>Entrenamiento de Salud y Bienestar
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block95}>
                            <div>
                                <div className={styles.block96}>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className={styles.block42}
                                        style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className={styles.block97}>
                                    “La mejor inversión. El ambiente es enfocado, no se pierde tiempo y el acompañamiento en cada serie
                                    marca la diferencia con cualquier otro centro.”
                                </p>
                            </div>
                            <div className={styles.block98}>
                                <div
                                    className={styles.block99}>
                                    JM
                                </div>
                                <div>
                                    <h4 className={styles.block100}>Juan Pablo M.</h4>
                                    <p className={styles.block101}>Estudiante Universitario</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.block46}>
                <div className={styles.block102}>
                    <div className={styles.block103}>
                        <span className={styles.block26}>Cultura &amp;
                            Preguntas</span>
                        <h2 className={styles.block70}>Todo lo que necesitas saber antes de
                            empezar</h2>
                    </div>
                    <div className={styles.block76} id="frammel-faq-accordion">
                        <div className={styles.block104}>
                            <button className={styles.block105} onClick={() => toggleFaq(0)} type="button">
                                <span className={styles.block106}>
                                    ¿Necesito tener experiencia previa o buena condición física para empezar?
                                </span>
                                <span className={`${styles.materialIcon} ${openFaq === 0 ? styles.faqIconOpen : ""}`}>
                                    expand_more
                                </span>
                            </button>
                            <div
                                className={`${styles.faqContent} ${openFaq === 0 ? styles.faqOpen : styles.faqClosed}`}>
                                Absolutamente no. Más del 40% de nuestros miembros comenzaron desde cero sin haber tocado una mancuerna.
                                Evaluamos tu movilidad inicial, diseñamos una progresión segura y te acompañamos paso a paso hasta que
                                sientas total autonomía y confianza.
                            </div>
                        </div>
                        <div className={styles.block104}>
                            <button className={styles.block105} onClick={() => toggleFaq(1)} type="button">
                                <span className={styles.block106}>
                                    ¿Cómo es el ambiente para principiantes o personas que nunca han pisado un gimnasio?
                                </span>
                                <span className={`${styles.materialIcon} ${openFaq === 1 ? styles.faqIconOpen : ""}`}>
                                    expand_more
                                </span>
                            </button>
                            <div
                                className={`${styles.faqContent} ${openFaq === 1 ? styles.faqOpen : styles.faqClosed}`}>
                                Eliminamos cualquier conducta tóxica o de intimidación. En FRAMMEL promovemos el compañerismo y el
                                respeto sincero. Nadie te mirará mal por el peso que levantas; aquí todos celebramos el esfuerzo
                                individual y la constancia de cada persona.
                            </div>
                        </div>
                        <div className={styles.block104}>
                            <button className={styles.block105} onClick={() => toggleFaq(2)} type="button">
                                <span className={styles.block106}>
                                    ¿Albeiro Escobar está presente en el salón de entrenamiento?
                                </span>
                                <span className={`${styles.materialIcon} ${openFaq === 2 ? styles.faqIconOpen : ""}`}>
                                    expand_more
                                </span>
                            </button>
                            <div
                                className={`${styles.faqContent} ${openFaq === 2 ? styles.faqOpen : styles.faqClosed}`}>
                                Sí. Albeiro supervisa personalmente las franjas horarias de entrenamiento, evalúa posturas y brinda
                                feedback constante a los atletas en sala. No somos un gimnasio desatendido; la dirección técnica es real
                                y activa.
                            </div>
                        </div>
                        <div className={styles.block104}>
                            <button className={styles.block105} onClick={() => toggleFaq(3)} type="button">
                                <span className={styles.block106}>
                                    ¿Puedo ir a conocer las instalaciones antes de pagar una mensualidad?
                                </span>
                                <span className={`${styles.materialIcon} ${openFaq === 3 ? styles.faqIconOpen : ""}`}>
                                    expand_more
                                </span>
                            </button>
                            <div
                                className={`${styles.faqContent} ${openFaq === 3 ? styles.faqOpen : styles.faqClosed}`}>
                                Por supuesto. Puedes agendar una visita de cortesía por WhatsApp. Te mostraremos las máquinas,
                                revisaremos tus objetivos y podrás realizar una primera sesión guiada para que sientas la diferencia por
                                ti mismo sin ningún compromiso financiero.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.block107}>
                <div className={styles.block3}>
                    <div
                        className={styles.block110}>
                        <div
                            className={styles.block111}>
                            <span className={styles.block112}>fitness_center</span>
                        </div>
                        <h2 className={styles.block113}>
                            ¿Listo para formar parte de la familia FRAMMEL?
                        </h2>
                        <p className={styles.block114}>
                            Ven a visitarnos en la Carrera 28, conoce a Albeiro y experimenta una sesión de prueba guiada sin costo de
                            inscripción ni compromisos forzosos.
                        </p>
                        <div className={styles.block115}>
                            <a className={styles.block116}
                                href="https://wa.me/573126436819?text=Hola%20FRAMMEL%20Gym,%20deseo%20agendar%20mi%20visita%20de%20prueba."
                                rel="noopener noreferrer" target="_blank">
                                <span>Agendar visita o prueba por WhatsApp (+57 312 643 6819)</span>
                                <span className={styles.block42}>arrow_forward</span>
                            </a>
                        </div>
                        <div
                            className={styles.block117}>
                            <div className={styles.block79}>
                                <span className={styles.block80}>location_on</span>
                                <span>Local 202, Cra 28 # 25A-4 • Santa Rosa de Osos</span>
                            </div>
                            <span className={styles.block118}>•</span>
                            <div className={styles.block79}>
                                <span className={styles.block9}></span>
                                <span>Respuesta inmediata en horario de sala</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
