import { Icon } from '../Icon/Icon';
import benefitCardStyles from './benefitCard.module.css';

export const BenefitCard = ({ icon, title, description, tag }) => {
  return (
    <div className={benefitCardStyles.card}>
      <div>
        <div className={benefitCardStyles.iconBox}>
          <Icon name={icon} size={26} />
        </div>
        <h3 className={benefitCardStyles.title}>{title}</h3>
        <p className={benefitCardStyles.description}>{description}</p>
      </div>
      <div className={benefitCardStyles.tagBox}>
        <span className={benefitCardStyles.tag}>{tag}</span>
      </div>
    </div>
  );
};
