import heroSectionStyles from './heroSection.module.css'

export const HeroSection = () => {
    return (
        <section className={heroSectionStyles.heroSection} >
            <div className={heroSectionStyles.heroInner}>

            <article className={heroSectionStyles.heroContent}>
             <h1>
                    El gimnasio donde tu edad no importa, solo tu 
                    <span> decisión.</span>
                </h1>

                <p>
                    Entrena acompañado y sin limitaciones. Más de 15 años
                    formando personas en Santa Rosa de Osos con experiencia
                    profesional e integral.
                </p>
                </article>

            <article className={heroSectionStyles.heroActions}>
                    <a href="#contacto">
                        Inscribirme ahora 
                        <img src='/arrow-right.svg' alt=''/>
                    </a>

                    <a href="#planes">
                        Ver planes
                    </a>
                </article>

                 <div className={heroSectionStyles.heroAccent}></div>

                 </div>

             <div className={heroSectionStyles.heroGlow}></div>
            
        </section>
    )
}