
import {HeroSection} from "../components/layout/HeroSection/HeroSection";
import { PlansSection } from "../components/layout/PlansSection/PlansSection.jsx";
import {CtaSection } from "../components/layout/CtaSection/CtaSection"
import { ServiceAction } from "../components/layout/ServiceAction/ServiceAction";
import { TestimonialSection } from "../components/layout/TestimonialsSection/testimonialSection"
import {TrainersSection} from "../components/layout/TrainersSection/TrainersSection";
import {InstallationsSection} from "../components/layout/InstallationsSection/InstallationsSection";
import {LocationSection} from "../components/layout/LocationSection/LocationSection";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ServiceAction/>
            <PlansSection />
            <TrainersSection />
            <InstallationsSection />
            <TestimonialSection />
            <LocationSection />
            <CtaSection />
        </>
    )
}
