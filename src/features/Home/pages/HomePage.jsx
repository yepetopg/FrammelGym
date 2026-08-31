import { NavBar } from "../../../shared/components/layout/NavBar/NavBar";
import {HeroSection} from "../components/layout/HeroSection/HeroSection";
import { InfoSection } from "../components/layout/InfoSection/InfoSection";
import { PlansSection } from "../components/layout/PlansSection/PlansSection";
import {CtaSection } from "../components/layout/CtaSection/CtaSection"

export default function HomePage() {
    return (
        <>
            <NavBar />
            <HeroSection/>
            <InfoSection />
			      <PlansSection />
            <CtaSection />
        </>
    )
}
