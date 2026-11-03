import { Icon } from '../Icon/Icon';
import pricingCardStyles from './pricingCard.module.css';

export const PricingCard = ({
  badge,
  icon,
  title,
  description,
  price,
  period,
  note,
  featuresLabel,
  features,
  featureIcon = 'check',
  ctaText,
  ctaHref,
  isPopular = false,
  noteColor = 'default',
}) => {
  return (
    <div className={`${pricingCardStyles.card} ${isPopular ? pricingCardStyles.popular : ''}`}>
      {isPopular && <div className={pricingCardStyles.glow} />}
      <div className={pricingCardStyles.content}>
        <div className={pricingCardStyles.header}>
          <span className={`${pricingCardStyles.badge} ${isPopular ? pricingCardStyles.badgePopular : ''}`}>
            {isPopular && <Icon name="star" size={16} />}
            {badge}
          </span>
          <Icon
            name={icon}
            size={isPopular ? 26 : 24}
            className={isPopular ? pricingCardStyles.iconPopular : pricingCardStyles.icon}
          />
        </div>
        <h3 className={pricingCardStyles.title}>{title}</h3>
        <p className={pricingCardStyles.description}>{description}</p>

        <div className={`${pricingCardStyles.priceBox} ${isPopular ? pricingCardStyles.priceBoxPopular : ''}`}>
          <div className={pricingCardStyles.priceRow}>
            <span className={`${pricingCardStyles.currency} ${isPopular ? pricingCardStyles.currencyPopular : ''}`}>$</span>
            <span className={`${pricingCardStyles.price} ${isPopular ? pricingCardStyles.pricePopular : ''}`}>
              {price}
            </span>
            <span className={pricingCardStyles.period}>{period}</span>
          </div>
          <p className={`${pricingCardStyles.note} ${noteColor === 'primary' ? pricingCardStyles.notePrimary : ''}`}>
            {note}
          </p>
        </div>

        <div className={pricingCardStyles.features}>
          <p className={`${pricingCardStyles.featuresLabel} ${isPopular ? pricingCardStyles.featuresLabelPopular : ''}`}>
            {featuresLabel}
          </p>
          {features.map((feature, index) => (
            <div key={index} className={pricingCardStyles.featureItem}>
              <Icon name={featureIcon} size={20} className={pricingCardStyles.featureIcon} />
              <span className={pricingCardStyles.featureText}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={pricingCardStyles.footer}>
        <a
          className={`${pricingCardStyles.cta} ${isPopular ? pricingCardStyles.ctaPopular : ''}`}
          href={ctaHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          {ctaText}
          {isPopular && <Icon name="arrow_forward" size={18} />}
        </a>
        <p className={`${pricingCardStyles.footerNote} ${isPopular ? pricingCardStyles.footerNotePopular : ''}`}>
          {isPopular ? 'Cupos limitados por franja horaria' : noteColor === 'outline' ? 'Sujeto a agenda del entrenador' : 'Pago presencial o transferencia'}
        </p>
      </div>
    </div>
  );
};
