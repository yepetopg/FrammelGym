import { InfoSectionCard, DividerInfoSectionCard } from "../../ui/InfoSectionCard/InfoSectionCard"
import infoSectionStyles from './infoSection.module.css'

export const InfoSection = () => {
    return (
        <section className={infoSectionStyles.infoSection}>
            <InfoSectionCard data={"+15"} title={"Años de experiencia"}/>
            <DividerInfoSectionCard />
            <InfoSectionCard data={"500+"} title={"Atletas activos"}/>
            <DividerInfoSectionCard />
            <InfoSectionCard data={"100%"} title={"Acompañamiento"} />
        </section>
    )
}