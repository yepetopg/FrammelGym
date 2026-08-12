import { NavBar } from "../../../shared/components/layout/NavBar/NavBar";
import { InfoSection } from "../components/layout/InfoSection/InfoSection";
import { PlansSection } from "../components/layout/PlansSection/PlansSection";

export default function HomePage() {
    return (
        <>
            <NavBar />
            <InfoSection />
			<PlansSection />
        </>
    )
}
