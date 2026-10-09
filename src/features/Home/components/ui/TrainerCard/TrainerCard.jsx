import trainerCardStyles from './TrainerCard.module.css'

export const TrainerCard = ({ name, role, phrase, image }) => {
    return (
        <article className={trainerCardStyles.card}>
            <img
                className={trainerCardStyles.image}
                src={image}
                alt={name}
            />

            <div className={trainerCardStyles.info}>
                <h3 className={trainerCardStyles.name}>{name}</h3>

                <p className={trainerCardStyles.role}>{role}</p>

                <p className={trainerCardStyles.phrase}>{phrase}</p>
            </div>
        </article>
    )
}

