import { Link } from 'react-router';
import { PlanSectionCardFeature } from '../PlanSectionCardFeature/PlanSectionCardFeature';
import planSectionCardStyle from './planSectionCard.module.css';

export const PlanSectionCard = ({title, description, features, href, linkTitle, isPopular}) => {
	return (
		<div className={`${planSectionCardStyle.planCard} ${isPopular ? planSectionCardStyle.active : planSectionCardStyle.inactive}`}>
			<span>Más popular</span>
			<div className={planSectionCardStyle.header}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className={planSectionCardStyle.features}>
				<ul>
					{features.map(feature => {return (<PlanSectionCardFeature key={feature} feature={feature} />)})}
				</ul>
			</div>
			<div className={planSectionCardStyle.more}>
				<Link to={href}>{linkTitle}</Link>
			</div>
		</div>
	)
}
