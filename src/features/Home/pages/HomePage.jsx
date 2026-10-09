import { NavBar } from "../../../shared/components/layout/NavBar/NavBar";
import {HeroSection} from "../components/layout/HeroSection/HeroSection";
import { InfoSection } from "../components/layout/InfoSection/InfoSection";
import { PlansSection } from "../components/layout/PlansSection/PlansSection";
import { TrainersSection } from "../components/layout/TrainersSection/TrainersSection";
import { InstallationsSection } from "../components/layout/InstallationsSection/InstallationsSection";
import { LocationSection } from "../components/layout/LocationSection/LocationSection";
import {CtaSection } from "../components/layout/CtaSection/CtaSection"
import { ServiceAction } from "../components/layout/ServiceAction/ServiceAction";
import { Footer } from "../components/layout/footer/footer";

export default function HomePage() {
    return (
        <>
            <NavBar />
            <InfoSection /> 
            <ServiceAction/>
			      <PlansSection />
            <CtaSection />
            <Footer />
        </>
    )
}
