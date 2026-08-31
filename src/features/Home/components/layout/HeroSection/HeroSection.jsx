import heroSectionStyles from './heroSection.module.css'

export const HeroSection = () => {
    return (
        <section className={heroSectionStyles.heroSection}>
            <div className={heroSectionStyles.heroContent}>
             
                <h1>
                    ENTRENA.
                    <br/>
                    SUPERA.
                    <br/>
                    <span> TRANSFORMA.</span>
                </h1>
                <p>
                    Lleva tu entrenamiento al siguiente nivel y alcanza
                    tus objetivos.
                </p>
                 <div className={heroSectionStyles.heroAccent}></div>

                
            </div>
             <div className={heroSectionStyles.heroGlow}></div>
             <div className={heroSectionStyles.heroScrollLine}></div>
        </section>
    )
}