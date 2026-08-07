import infoSectionCardStyles from './infoSectionCard.module.css'

export const InfoSectionCard = ({ data, title }) => {
    return (
        <div className={infoSectionCardStyles.infoCard}>
            <p>{data}</p>
            <h2>{title}</h2>
        </div>
    )
}

export const DividerInfoSectionCard = () => {
    return (
        <div className={infoSectionCardStyles.divider}></div>
    )
}

