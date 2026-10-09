import { NavBar } from "../../../shared/components/layout/NavBar/NavBar";
import { InfoSection } from "../components/layout/InfoSection/InfoSection";
import { PlansSection } from "../components/layout/PlansSection/PlansSection.jsx";
import {CtaSection } from "../components/layout/CtaSection/CtaSection"
import { ServiceAction } from "../components/layout/ServiceAction/ServiceAction";
import { TestimonialSection } from "../components/layout/TestimonialsSection/testimonialSection"


export default function HomePage() {
    return (
        <>
            <NavBar />
            <InfoSection /> 
            <ServiceAction/>
			<PlansSection />
            <TestimonialSection />
            <CtaSection />
        </>
    )
}
