import { useState } from 'react';
import { HeroSection } from '../components/layout/HeroSection/HeroSection';
import { PricingTiers } from '../components/layout/PricingTiers/PricingTiers';
import { ComparisonTable } from '../components/layout/ComparisonTable/ComparisonTable';
import { MembershipBenefits } from '../components/layout/MembershipBenefits/MembershipBenefits';
import { CoachModule } from '../components/layout/CoachModule/CoachModule';
import { FaqSection } from '../components/layout/FaqSection/FaqSection';
import { BottomCta } from '../components/layout/BottomCta/BottomCta';
import plansPageStyles from './PlansPage.module.css';

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <main className={plansPageStyles.main}>
      <HeroSection billingCycle={billingCycle} onBillingChange={setBillingCycle} />
      <PricingTiers billingCycle={billingCycle} />
      <ComparisonTable />
      <MembershipBenefits />
      <CoachModule />
      <FaqSection />
      <BottomCta />
    </main>
  );
}
