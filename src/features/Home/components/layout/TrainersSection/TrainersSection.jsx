import styles from './TrainersSection.module.css'

export const TrainersSection =() => {
    return ( 
        <section className={styles.trainersSection}>
            <div className={styles.trainerCard}>

                <div className={styles.imageContainer}>
                    {/* asignar imagen */}
                    <div className= {styles.imagePlaceholder}></div>
                   <span className={styles.experience}>
                    +10 AÑOS EXP.
                    </span> 
                </div>

                     <div className={styles.info}>
                    <h3>Albeiro Escobar</h3>
                    <p className={styles.role}>TECNÓLOGO EN ACTIVIDAD FÍSICA</p>
                    <p className={styles.phrase}>"Mi propósito es guiarte hacia tu mejor versión, sin importar el punto de partida. En Frammel, cada persona es un proyecto de éxito."
                    </p>
                </div>
            </div>
        </section>
    )
}

