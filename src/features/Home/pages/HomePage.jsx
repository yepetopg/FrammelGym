import { NavBar } from "../../../shared/components/layout/NavBar/NavBar";
import {HeroSection} from "../components/layout/HeroSection/HeroSection";
import { PlansSection } from "../components/layout/PlansSection/PlansSection.jsx";
import {CtaSection } from "../components/layout/CtaSection/CtaSection"
import { ServiceAction } from "../components/layout/ServiceAction/ServiceAction";
import { TestimonialSection } from "../components/layout/TestimonialsSection/testimonialSection"
import {Footer} from "../components/layout/footer/footer";
import {TrainersSection} from "../components/layout/TrainersSection/TrainersSection";
import {InstallationsSection} from "../components/layout/InstallationsSection/InstallationsSection";
import {LocationSection} from "../components/layout/LocationSection/LocationSection";


export default function HomePage() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <ServiceAction/>
            <PlansSection />
            <TrainersSection />
            <InstallationsSection />
            <TestimonialSection />
            <LocationSection />
            <CtaSection />
            <Footer />
        </>
    )
}
