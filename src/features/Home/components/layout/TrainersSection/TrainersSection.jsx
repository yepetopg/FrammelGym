import TrainersSectionStyles from './TrainersSection.module.css'
import  { TrainerCard } from '../../ui/TrainerCard/TrainerCard'
import trainerPlaceholder from '../../../assets/images/trainer_placeholder.jpg'
export const TrainersSection = () => {
    return (
        <section className={TrainersSectionStyles.trainersSection}>
            <TrainerCard
             name="Albeiro Escobar"
                role="TECNÓLOGO EN ACTIVIDAD FÍSICA"
                phrase="Mi propósito es guiarte hacia tu mejor versión, sin importar el punto de partida. En Frammel, cada persona es un proyecto de éxito."
                image={trainerPlaceholder}
            />
        </section>
    )
}