import billingToggleStyles from './billingToggle.module.css';

export const BillingToggle = ({ cycle, onChange }) => {
  return (
    <div className={billingToggleStyles.toggle}>
      <button
        className={`${billingToggleStyles.btn} ${cycle === 'monthly' ? billingToggleStyles.active : ''}`}
        onClick={() => onChange('monthly')}
      >
        Mensual
      </button>
      <button
        className={`${billingToggleStyles.btn} ${cycle === 'quarterly' ? billingToggleStyles.active : ''}`}
        onClick={() => onChange('quarterly')}
      >
        <span>Trimestral</span>
        <span className={billingToggleStyles.badge}>10% OFF</span>
      </button>
      <button
        className={`${billingToggleStyles.btn} ${cycle === 'annual' ? billingToggleStyles.active : ''}`}
        onClick={() => onChange('annual')}
      >
        <span>Anual</span>
        <span className={billingToggleStyles.badge}>20% OFF</span>
      </button>
    </div>
  );
};
