import styles from "./ServicesPage.module.css";

const c = (...names) => names.map((name) => styles[name]).join(" ");

const ServicesPage = () => {
  return (
    <main className={styles.page}>
      <section className={c("u205", "u185", "u181", "u157", "u156", "u175", "u50", "u40")}>
        <div className={c("u4", "u121", "u303")}>
          <img alt="Área de entrenamiento atlético oscuro con pesas y barras" className={c("u301", "u107", "u172", "u171", "u64", "u56")} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWDZ_mpZ_Hk7Vpf7SxTFuGoN6v--mF5meUVWEafMAOqoI6cEgtbywTlT8qT3Gok2PH_3m_Nod93xtVp1J_FxFRrCdJCzN1FXdwtjgqHyUHuNraDK56_6kCzF7sH87UJJ3gfMp9xPZxqhrEgTK6LEi2AzKL2ClEK2NFtobA9QnFUv0S0vqzFMzOqL1gN19a2SqOWGj6viAbXMtGR5U7slYGeTjCYYVtAwzO9Lb6vM" />
          <div className={c("u4", "u121", "u27", "u76", "u287", "u271")}></div>
          <div className={c("u4", "u121", "u29", "u81", "u286", "u270")}></div>
        </div>

        <div className={c("u4", "u277", "u130", "u2", "u299", "u106", "u17", "u211", "u33", "u184")}></div>

        <div className={c("u205", "u304", "u139", "u169", "u192", "u231", "u133", "u257")}>
          <div className={c("u120", "u123", "u83", "u191", "u197", "u211", "u13", "u35", "u46", "u250", "u269", "u75", "u280", "u285", "u149", "u223")}>
            <span className={c("u292", "u97", "u211", "u15", "u5")}></span>
            Servicios de Élite · Santa Rosa de Osos
          </div>

          <h1 className={c("u248", "u235", "u134", "u71", "u267", "u278", "u127", "u149")}>
            Metodologías diseñadas para tu <br className={c("u108", "u228")} />
            <span className={c("u266", "u24", "u26", "u82", "u289", "u274", "u170")}>
              transformación definitiva.
            </span>
          </h1>

          <p className={c("u137", "u169", "u255", "u237", "u158", "u252", "u128", "u143", "u74")}>
            Desde entrenamiento funcional intensivo hasta preparación biomecánica individualizada. Adaptado a cualquier nivel, guiado con disciplina por <strong className={c("u267", "u73")}>Albeiro Escobar</strong>.
          </p>

          <div className={c("u66", "u67", "u225", "u123", "u125", "u85", "u144")}>
            <a className={c("u301", "u240", "u120", "u123", "u125", "u83", "u194", "u203", "u211", "u265", "u70", "u256", "u20", "u110", "u282", "u62", "u220")} href="#catalogo">
              Explorar programas
              <svg className={c("u295", "u101")} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>

            <a className={c("u301", "u240", "u120", "u123", "u125", "u83", "u194", "u203", "u211", "u265", "u75", "u267", "u14", "u109", "u35", "u47", "u112", "u282")} href="https://wa.me/573126436819" rel="noopener noreferrer" target="_blank">
              <svg className={c("u295", "u101", "u250")} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.742.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.679.116-.174.232-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1 1.024z"></path>
              </svg>
              Hablar por WhatsApp
            </a>
          </div>

          <div className={c("u88", "u89", "u226", "u85", "u187", "u52", "u41", "u137", "u169")}>
            <div className={c("u66", "u123", "u125", "u84")}>
              <span className={c("u292", "u97", "u211", "u15")}></span>
              <span className={c("u269", "u238", "u75", "u279", "u260")}>4 Modalidades Principales</span>
            </div>
            <div className={c("u66", "u123", "u125", "u84")}>
              <span className={c("u292", "u97", "u211", "u15")}></span>
              <span className={c("u269", "u238", "u75", "u279", "u260")}>Monitoreo Biomecánico</span>
            </div>
            <div className={c("u66", "u123", "u125", "u84")}>
              <span className={c("u292", "u97", "u211", "u15")}></span>
              <span className={c("u269", "u238", "u75", "u279", "u260")}>Entrenador Permanente en Sala</span>
            </div>
          </div>
        </div>
      </section>

      <section className={c("u202", "u11", "u205")} id="catalogo">
        <div className={c("u141", "u169", "u192", "u231", "u133")}>
          <div className={c("u257", "u136", "u169", "u145")}>
            <span className={c("u269", "u70", "u281", "u249", "u285", "u16", "u190", "u196", "u211", "u35", "u44")}>
              Nuestra Oferta Especializada
            </span>
            <h2 className={c("u248", "u234", "u71", "u267", "u166", "u278")}>
              Entrenamiento guiado con estándares de élite
            </h2>
            <p className={c("u252", "u265", "u236", "u165")}>
              Selecciona la modalidad adecuada según tus objetivos físicos, disponibilidad horaria y ritmo de vida.
            </p>
          </div>

          <div className={c("u88", "u89", "u152", "u87")}>
            <article className={c("u205", "u91", "u208", "u175", "u12", "u59", "u66", "u67", "u126", "u159", "u179", "u230")} data-purpose="service-card">
              <div className={c("u4", "u121", "u303")}>
                <img alt="Clases dirigidas con atletas entrenando juntos en sala con iluminación oscura" className={c("u301", "u107", "u172", "u92", "u284", "u63", "u64", "u57")} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtLkzMU3DtRlFsgnOWWuMpt70PA3oi3da98rVQLa1PfoOw5TcpjPIaWavGey8WQV4dcpjCskSfhn9hlxvQInr4W1GG-2AKGtgXVYarhKO6hIzt4CIJh1ORtxVv8_MwEFwMt-wof4BOZVGR1IE4fACk5Y_O2lSuXElXGq4wr2bpvbMHekjulmEW-39cBa0Ko4OVB9E4Mys-DbrbZB9XT9Ic0TdqKWtko9F7RIG0Zb8" />
                <div className={c("u4", "u121", "u27", "u78", "u288", "u275")}></div>
              </div>

              <div className={c("u205", "u304")}>
                <div className={c("u66", "u123", "u124", "u147")}>
                  <span className={c("u190", "u196", "u254", "u70", "u285", "u280", "u250", "u21", "u35", "u49", "u211")}>POPULARES</span>
                  <span className={c("u269", "u261", "u73")}>Grupos Dinámicos</span>
                </div>
                <h3 className={c("u247", "u70", "u267", "u146", "u93", "u283")}>Clases Dirigidas</h3>
                <p className={c("u265", "u252", "u148", "u128")}>
                  Sesiones estructuradas por expertos para maximizar tu capacidad aeróbica, potencia y quema calórica con apoyo constante del instructor.
                </p>
                <ul className={c("u245", "u149", "u269", "u238", "u260")}>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Corrección técnica en tiempo real durante cada serie.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Rutinas cambiantes para evitar el estancamiento muscular.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Apto para niveles iniciación e intermedios.</span>
                  </li>
                </ul>
                <div className={c("u66", "u123", "u124", "u186", "u52", "u53")}>
                  <span className={c("u269", "u251")}>Horarios: Mañana y Tarde</span>
                  <a className={c("u192", "u199", "u212", "u30", "u110", "u116", "u269", "u75", "u267", "u282", "u61")} href="https://wa.me/573126436819?text=Hola,%20deseo%20consultar%20disponibilidad%20de%20Clases%20Dirigidas" rel="noopener noreferrer" target="_blank">Consultar disponibilidad →</a>
                </div>
              </div>
            </article>

            <article className={c("u205", "u91", "u208", "u175", "u12", "u35", "u46", "u221", "u66", "u67", "u126", "u159", "u179", "u230")} data-purpose="service-card">
              <div className={c("u4", "u121", "u303")}>
                <img alt="Entrenador personal apoyando postura en levantamiento pesado" className={c("u301", "u107", "u172", "u92", "u284", "u63", "u64", "u58")} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKY7WswVJQ0qYGYy6mXrmtLQ07akjOn9bHp61nexBBbo0L2Lsz9U6nkNjUJRJehFI2W8xTYmfsDQ2GdBhxsrJ07sG23Hx3hk3kpUU_r6qLU5bXIbRc2PwFO792oBt9i06CKp9ELH7CuMyDN6nYq1tBFqvA0dxd2rOMrrMdCqX411LbeGJz3IPM7_PakD2K6x8GGsJxlOkEx_ytX75hWdVlzVBja9AOzhLtqjZFRHE" />
                <div className={c("u4", "u121", "u27", "u77", "u288", "u275")}></div>
              </div>

              <div className={c("u205", "u304")}>
                <div className={c("u66", "u123", "u124", "u147")}>
                  <span className={c("u190", "u196", "u254", "u70", "u285", "u280", "u256", "u20", "u211", "u217")}>MÁS POPULAR</span>
                  <span className={c("u269", "u250", "u75")}>1 a 1 Exclusivo</span>
                </div>
                <h3 className={c("u247", "u70", "u267", "u146", "u93", "u283")}>Entrenamiento Personalizado</h3>
                <p className={c("u265", "u252", "u148", "u128")}>
                  Un plan meticulosamente adaptado a tu morfología, con valoración postural inicial, periodización de cargas y asesoría nutricional completa.
                </p>
                <ul className={c("u245", "u149", "u269", "u238", "u260")}>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Acompañamiento directo de Albeiro Escobar.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Análisis de composición corporal y bio-impedancia.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Prevención y readaptación de molestias articulares.</span>
                  </li>
                </ul>
                <div className={c("u66", "u123", "u124", "u186", "u52", "u45")}>
                  <span className={c("u269", "u250", "u73")}>Cupos limitados por mes</span>
                  <a className={c("u192", "u199", "u212", "u20", "u110", "u269", "u70", "u256", "u282", "u61", "u224")} href="https://wa.me/573126436819?text=Hola,%20me%20interesa%20agendar%20una%20valoración%20para%20Entrenamiento%20Personalizado" rel="noopener noreferrer" target="_blank">Agendar valoración →</a>
                </div>
              </div>
            </article>

            <article className={c("u205", "u91", "u208", "u175", "u12", "u59", "u66", "u67", "u126", "u159", "u179", "u230")} data-purpose="service-card">
              <div className={c("u4", "u121", "u303")}>
                <img alt="Entrenamiento funcional grupal con cuerdas y pesas rusas" className={c("u301", "u107", "u172", "u92", "u284", "u63", "u64", "u57")} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVnU75Mf7s5XTCcFH39hBwKa1JdI0fnWPfdNlGSZbZHKH_1oihizMWpEys88YIE3byq-iSf3s0KAt7WIrl3c8TA_KeBM-7-dGGhRWfvXTO_8H01LvjiWC08hJTKks-U4n61WS3yAz1mEYJu8j48t4i3FTpbKmvy-sceNBpa3LFqrQrsbDdHPugbNPQXpBdt6X_lKe1Y6gF8B3kmO0VOrU3CkUYercTY2pGHs-5xwQ" />
                <div className={c("u4", "u121", "u27", "u78", "u288", "u275")}></div>
              </div>

              <div className={c("u205", "u304")}>
                <div className={c("u66", "u123", "u124", "u147")}>
                  <span className={c("u190", "u196", "u254", "u70", "u285", "u280", "u250", "u21", "u35", "u49", "u211")}>ALTA ENERGÍA</span>
                  <span className={c("u269", "u261", "u73")}>Motivación Colectiva</span>
                </div>
                <h3 className={c("u247", "u70", "u267", "u146", "u93", "u283")}>Clases Grupales &amp; Funcional</h3>
                <p className={c("u265", "u252", "u148", "u128")}>
                  Ritmo contagioso, camaradería y circuitos de alta intensidad: sesiones de entrenamiento funcional, acondicionamiento metabólico y movilidad activa.
                </p>
                <ul className={c("u245", "u149", "u269", "u238", "u260")}>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Fomenta resistencia muscular y capacidad pulmonar.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Uso de cuerdas de batalla, balones medicinales y cajones.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Ambiente electrizante con espíritu de comunidad.</span>
                  </li>
                </ul>
                <div className={c("u66", "u123", "u124", "u186", "u52", "u53")}>
                  <span className={c("u269", "u251")}>Variedad diaria garantizada</span>
                  <a className={c("u192", "u199", "u212", "u30", "u110", "u116", "u269", "u75", "u267", "u282", "u61")} href="#horarios">Ver horarios →</a>
                </div>
              </div>
            </article>

            <article className={c("u205", "u91", "u208", "u175", "u12", "u59", "u66", "u67", "u126", "u159", "u179", "u230")} data-purpose="service-card">
              <div className={c("u4", "u121", "u303")}>
                <img alt="Gimnasio con zona de peso integrado y mancuernas iluminado tenue" className={c("u301", "u107", "u172", "u92", "u284", "u63", "u64", "u57")} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeC8kXicOJ3bcimulDWuo5WsVmm3quch6uCdlrTrbFVxp6VxZrQY8TWZaf6XhfpzzTWpcv33XyHveLnecoDf24Bmcjg6i8q-WGYaiWn6j0JzycD322u20_3BOEcIRZqDPNiOC13cAABiLGOKqXA0NOKAk1SXHfRekpzABnKdSwDmiA4qbwiQWLddSBs6ecb_f2_kff0Bz628ItEAjOK2uYsPUzBK2fHIZaEBgjA2Y" />
                <div className={c("u4", "u121", "u27", "u78", "u288", "u275")}></div>
              </div>

              <div className={c("u205", "u304")}>
                <div className={c("u66", "u123", "u124", "u147")}>
                  <span className={c("u190", "u196", "u254", "u70", "u285", "u280", "u250", "u21", "u35", "u49", "u211")}>LIBRE ACCESO</span>
                  <span className={c("u269", "u261", "u73")}>Equipamiento Pro</span>
                </div>
                <h3 className={c("u247", "u70", "u267", "u146", "u93", "u283")}>Zona Musculación, Cardio &amp; Fuerza</h3>
                <p className={c("u265", "u252", "u148", "u128")}>
                  Acceso sin restricciones a nuestra sala de pesas libres, racks de potencia, zona aislada de Hip Thrust y máquinas selectorizadas biomecánicas.
                </p>
                <ul className={c("u245", "u149", "u269", "u238", "u260")}>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Línea completa de máquinas multifuncionales.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Bancos regulables y pesas calibradas sin saturación.</span>
                  </li>
                  <li className={c("u66", "u123", "u83")}>
                    <svg className={c("u295", "u101", "u249", "u68")} fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                    <span>Cintas de correr y elípticas de última generación.</span>
                  </li>
                </ul>
                <div className={c("u66", "u123", "u124", "u186", "u52", "u53")}>
                  <span className={c("u269", "u251")}>Entrena a tu propio ritmo</span>
                  <a className={c("u192", "u199", "u212", "u30", "u110", "u116", "u269", "u75", "u267", "u282", "u61")} href="https://wa.me/573126436819?text=Hola,%20quisiera%20conocer%20los%20equipos%20y%20tarifas%20de%20musculación" rel="noopener noreferrer" target="_blank">Conocer equipos →</a>
                </div>
              </div>
            </article>
          </div>

          <div className={c("u88", "u90", "u154", "u84", "u162")}>
            <div className={c("u12", "u35", "u42", "u177", "u213", "u66", "u123", "u125", "u83", "u269", "u73", "u252")}><span className={c("u255")}>☕</span> Cafetería Saludable</div>
            <div className={c("u12", "u35", "u42", "u177", "u213", "u66", "u123", "u125", "u83", "u269", "u73", "u252")}><span className={c("u255")}>⚡</span> Zona Hip Thrust Especial</div>
            <div className={c("u12", "u35", "u42", "u177", "u213", "u66", "u123", "u125", "u83", "u269", "u73", "u252")}><span className={c("u255")}>🏋️</span> Máquinas Multifuncionales</div>
            <div className={c("u12", "u35", "u42", "u177", "u213", "u66", "u123", "u125", "u83", "u269", "u73", "u252")}><span className={c("u255")}>🏃</span> Zona Cardio Pro</div>
          </div>
        </div>
      </section>

      <section className={c("u202", "u9", "u52", "u50", "u40", "u205")} id="incluye">
        <div className={c("u141", "u169", "u192", "u231", "u133")}>
          <div className={c("u257", "u136", "u169", "u145")}>
            <h2 className={c("u248", "u234", "u71", "u267", "u278")}>¿Qué incluye cada experiencia en FRAMMEL?</h2>
            <p className={c("u252", "u265", "u236", "u165")}>
              No te dejamos solo frente a una máquina. Integramos ciencia, metodología y acompañamiento humano permanente.
            </p>
          </div>

          <div className={c("u88", "u89", "u152", "u132", "u86")}>
            <div className={c("u12", "u35", "u42", "u111", "u179", "u208", "u282", "u62")}>
              <div className={c("u291", "u96", "u213", "u16", "u35", "u45", "u66", "u123", "u125", "u148", "u250")}>
                <svg className={c("u297", "u103")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <h3 className={c("u258", "u70", "u267", "u146")}>Evaluación y Bio-monitoreo</h3>
              <p className={c("u269", "u238", "u251", "u128")}>Medición de porcentaje graso, masa magra y análisis postural para asegurar que cada movimiento sea seguro para tus articulaciones.</p>
            </div>

            <div className={c("u12", "u35", "u42", "u111", "u179", "u208", "u282", "u62")}>
              <div className={c("u291", "u96", "u213", "u16", "u35", "u45", "u66", "u123", "u125", "u148", "u250")}>
                <svg className={c("u297", "u103")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <h3 className={c("u258", "u70", "u267", "u146")}>Guía Nutricional</h3>
              <p className={c("u269", "u238", "u251", "u128")}>Pautas claras de alimentación sostenible para complementar tu gasto calórico diario sin dietas extremas ni mitos perjudiciales.</p>
            </div>

            <div className={c("u12", "u35", "u42", "u111", "u179", "u208", "u282", "u62")}>
              <div className={c("u291", "u96", "u213", "u16", "u35", "u45", "u66", "u123", "u125", "u148", "u250")}>
                <svg className={c("u297", "u103")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <h3 className={c("u258", "u70", "u267", "u146")}>Sobrecarga Progresiva</h3>
              <p className={c("u269", "u238", "u251", "u128")}>Monitoreo semanal de pesos, repeticiones y descansos para estimular adaptaciones musculares reales sin riesgo de lesión.</p>
            </div>

            <div className={c("u12", "u35", "u42", "u111", "u179", "u208", "u282", "u62")}>
              <div className={c("u291", "u96", "u213", "u16", "u35", "u45", "u66", "u123", "u125", "u148", "u250")}>
                <svg className={c("u297", "u103")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
              <h3 className={c("u258", "u70", "u267", "u146")}>Comunidad y Soporte</h3>
              <p className={c("u269", "u238", "u251", "u128")}>Ambiente respetuoso y cordial donde cada miembro, sin importar su edad ni condición física previa, es respaldado con dignidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={c("u202", "u11")} id="horarios">
        <div className={c("u140", "u169", "u192", "u231", "u133")}>
          <div className={c("u257", "u142", "u169", "u144")}>
            <span className={c("u269", "u70", "u281", "u249", "u285", "u16", "u190", "u196", "u211", "u35", "u44")}>Disponibilidad</span>
            <h2 className={c("u248", "u234", "u71", "u267", "u166", "u278")}>Horarios de Entrenamiento</h2>
            <p className={c("u252", "u265", "u164")}>Horarios flexibles diseñados para adaptarse a tus responsabilidades laborales y académicas.</p>
          </div>

          <div className={c("u88", "u89", "u153", "u86")}>
            <div className={c("u12", "u35", "u42", "u180", "u208", "u205", "u175", "u91")}>
              <div className={c("u4", "u276", "u206", "u293", "u99", "u19", "u210", "u184")}></div>
              <span className={c("u269", "u70", "u250", "u285", "u280", "u31", "u146")}>Jornada Regular</span>
              <h3 className={c("u268", "u70", "u267", "u147")}>Lunes a Viernes</h3>
              <div className={c("u246")}>
                <div className={c("u51", "u43", "u183")}>
                  <span className={c("u269", "u251", "u31", "u73")}>Bloque Mañana</span>
                  <p className={c("u255", "u75", "u267")}>5:00 AM – 10:00 AM</p>
                </div>
                <div className={c("u51", "u43", "u183")}>
                  <span className={c("u269", "u251", "u31", "u73")}>Bloque Tarde / Noche</span>
                  <p className={c("u255", "u75", "u267")}>2:00 PM – 8:00 PM</p>
                </div>
              </div>
              <p className={c("u269", "u261", "u168", "u186", "u52", "u54")}>Entrenador presente en sala durante ambas franjas horarias.</p>
            </div>

            <div className={c("u12", "u35", "u45", "u180", "u208", "u205", "u175", "u218")}>
              <div className={c("u4", "u276", "u206", "u293", "u99", "u16", "u210", "u184")}></div>
              <span className={c("u269", "u70", "u250", "u285", "u280", "u31", "u146")}>Fin de Semana</span>
              <h3 className={c("u268", "u70", "u267", "u147")}>Sábados y Festivos</h3>
              <div className={c("u246")}>
                <div className={c("u51", "u48", "u183")}>
                  <span className={c("u269", "u251", "u31", "u73")}>Jornada Continua</span>
                  <p className={c("u255", "u75", "u267")}>7:00 AM – 11:00 AM</p>
                </div>
              </div>
              <p className={c("u269", "u261", "u163", "u186", "u52", "u54")}>Sesiones de circuito y entrenamiento libre supervisado.</p>
            </div>

            <div className={c("u12", "u35", "u42", "u180", "u208", "u205", "u175")}>
              <span className={c("u269", "u70", "u261", "u285", "u280", "u31", "u146")}>Regeneración</span>
              <h3 className={c("u268", "u70", "u267", "u147")}>Domingos</h3>
              <div className={c("u178", "u213", "u22", "u35", "u54", "u257", "u164")}>
                <p className={c("u265", "u75", "u267")}>Cerrado por descanso</p>
                <p className={c("u269", "u251", "u161")}>El descanso activo y el sueño son parte fundamental del progreso muscular y salud articular.</p>
              </div>
              <p className={c("u269", "u249", "u168", "u186", "u52", "u54", "u73")}>¡Nos preparamos para arrancar con toda la energía el lunes a las 5:00 AM!</p>
            </div>
          </div>
        </div>
      </section>

      <section className={c("u202", "u9", "u52", "u40")} id="entrenador">
        <div className={c("u138", "u169", "u192", "u231", "u133")}>
          <div className={c("u25", "u79", "u272", "u35", "u42", "u209", "u180", "u229", "u257", "u205", "u175")}>
            <div className={c("u4", "u1", "u130", "u2", "u298", "u104", "u17", "u211", "u32", "u184")}></div>

            <div className={c("u205", "u119", "u149")}>
              <div className={c("u294", "u100", "u239", "u227", "u211", "u176", "u28", "u80", "u275", "u169")}>
                <img alt="Albeiro Escobar - Tecnólogo en Actividad Física y Entrenador Principal de Frammel Gym" className={c("u301", "u107", "u211", "u172", "u173", "u36", "u37")} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwODaW8FssWKtHVRkH4FLuQn2sMQZ1pWnTQ5gSgh2v6M09-h1czk56HIbcwy-fI2BMCxnegPlgV0yYO_WdOL_5OeG6WB80TiWlYNIJpZNgzdKa3hACSLmJ1iYKxryscytzFH1PA0ZK3MY7bUsEQHxmhpIUDaA0D3-UzRbFNOCuSy0oiD7jvAUVJ56TLHASINujDAVDBr1RgGZSimG3TFcVhe7oDO7Y6aVENOeTxvc" />
              </div>
              <span className={c("u4", "u0", "u130", "u2", "u190", "u195", "u211", "u253", "u71", "u285", "u280", "u256", "u20", "u224", "u302")}>+15 AÑOS EXP.</span>
            </div>

            <h3 className={c("u247", "u233", "u71", "u267")}>Albeiro Escobar</h3>
            <p className={c("u269", "u238", "u75", "u280", "u285", "u250", "u161", "u148")}>Tecnólogo en Actividad Física</p>

            <blockquote className={c("u136", "u169", "u255", "u237", "u260", "u122", "u72", "u128", "u149")}>
              “Mi propósito es guiarte hacia tu mejor versión, sin importar el punto de partida ni la edad. En Frammel, cada persona es un proyecto de éxito individual.”
            </blockquote>

            <div className={c("u120", "u123", "u83", "u269", "u251", "u23", "u192", "u199", "u211", "u35", "u54")}>
              <span className={c("u292", "u97", "u211", "u15")}></span>
              Santa Rosa de Osos, Antioquia · Asesoría profesional directa
            </div>
          </div>
        </div>
      </section>

      <section className={c("u202", "u11", "u52", "u40")} id="faq">
        <div className={c("u138", "u169", "u192", "u231", "u133")}>
          <div className={c("u257", "u144")}>
            <span className={c("u269", "u70", "u281", "u249", "u285", "u16", "u190", "u196", "u211", "u35", "u44")}>Respuestas Claras</span>
            <h2 className={c("u248", "u234", "u71", "u267", "u166", "u278")}>Preguntas Frecuentes</h2>
            <p className={c("u252", "u265", "u164")}>Resolvemos tus dudas antes de comenzar tu proceso de transformación con nosotros.</p>
          </div>

          <div className={c("u246")}>
            <details className={c("u91", "u12", "u35", "u42", "u208", "u179", "u3", "u282", "u61", "u174")}>
              <summary className={c("u66", "u123", "u124", "u60", "u135")}>
                <h4 className={c("u255", "u237", "u75", "u267", "u93", "u283")}>¿Necesito experiencia previa para inscribirme a las clases dirigidas?</h4>
                <span className={c("u160", "u68", "u249", "u284", "u62", "u94")}>
                  <svg className={c("u296", "u102")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
              </summary>
              <p className={c("u265", "u251", "u166", "u128", "u52", "u54", "u186")}>No necesitas experiencia alguna. Todas nuestras clases dirigidas y sesiones funcionales son adaptadas progresivamente por el entrenador a tu capacidad cardiovascular y nivel de fuerza actual.</p>
            </details>

            <details className={c("u91", "u12", "u35", "u42", "u208", "u179", "u3", "u282", "u61", "u174")}>
              <summary className={c("u66", "u123", "u124", "u60", "u135")}>
                <h4 className={c("u255", "u237", "u75", "u267", "u93", "u283")}>¿Cómo funciona la valoración en el plan personalizado?</h4>
                <span className={c("u160", "u68", "u249", "u284", "u62", "u94")}>
                  <svg className={c("u296", "u102")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
              </summary>
              <p className={c("u265", "u251", "u166", "u128", "u52", "u54", "u186")}>En tu primera sesión realizamos un test de movilidad articular, antecedentes médicos/lesiones, historial de actividad física y bioimpedancia. Con estos datos construimos tu rutina exclusiva y fijamos metas reales a 4, 8 y 12 semanas.</p>
            </details>

            <details className={c("u91", "u12", "u35", "u42", "u208", "u179", "u3", "u282", "u61", "u174")}>
              <summary className={c("u66", "u123", "u124", "u60", "u135")}>
                <h4 className={c("u255", "u237", "u75", "u267", "u93", "u283")}>¿Puedo alternar entre musculación libre y clases grupales?</h4>
                <span className={c("u160", "u68", "u249", "u284", "u62", "u94")}>
                  <svg className={c("u296", "u102")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
              </summary>
              <p className={c("u265", "u251", "u166", "u128", "u52", "u54", "u186")}>Sí. Nuestro Plan Personalizado y membresías completas incluyen acceso total a las máquinas de fuerza, mancuernas libres, zona cardio y cualquiera de las clases dirigidas programadas en el día.</p>
            </details>

            <details className={c("u91", "u12", "u35", "u42", "u208", "u179", "u3", "u282", "u61", "u174")}>
              <summary className={c("u66", "u123", "u124", "u60", "u135")}>
                <h4 className={c("u255", "u237", "u75", "u267", "u93", "u283")}>¿Qué métodos de pago y membresías manejan?</h4>
                <span className={c("u160", "u68", "u249", "u284", "u62", "u94")}>
                  <svg className={c("u296", "u102")} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
              </summary>
              <p className={c("u265", "u251", "u166", "u128", "u52", "u54", "u186")}>Aceptamos transferencias bancarias (Bancolombia, Nequi, Daviplata) y efectivo directo en recepción. Contamos con membresías mensuales, tiqueteras para personas con tiempo rotativo y descuento especial para estudiantes acreditados.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={c("u201", "u25", "u76", "u273", "u52", "u40", "u205", "u175")}>
        <div className={c("u4", "u55", "u130", "u2", "u300", "u105", "u18", "u211", "u34", "u184")}></div>

        <div className={c("u205", "u304", "u138", "u169", "u192", "u231", "u133", "u257")}>
          <h2 className={c("u248", "u235", "u71", "u267", "u278", "u147")}>¿Listo para elegir tu servicio ideal?</h2>
          <p className={c("u255", "u237", "u260", "u136", "u169", "u150", "u72")}>
            Escríbenos directamente y Albeiro Escobar te orientará personalmente sobre la modalidad más idónea para tus metas.
          </p>
          <a className={c("u120", "u123", "u125", "u84", "u188", "u204", "u211", "u255", "u70", "u256", "u20", "u110", "u282", "u62", "u222", "u114")} href="https://wa.me/573126436819?text=Hola%20Albeiro,%20quiero%20información%20sobre%20los%20servicios%20de%20Frammel%20Gym" rel="noopener noreferrer" target="_blank">
            <span>Empieza ahora</span>
            <svg className={c("u296", "u102")} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </a>
          <p className={c("u269", "u251", "u167")}>Respuesta rápida vía WhatsApp · Santa Rosa de Osos</p>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;