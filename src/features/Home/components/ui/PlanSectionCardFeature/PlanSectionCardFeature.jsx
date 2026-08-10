import planSectionCardFeatureStyle from './planSectionCardFeature.module.css'

export const PlanSectionCardFeature = ({feature}) => {
	return (
		<li className={planSectionCardFeatureStyle.planCardFeature}>
			<img src='/circle_check.svg' alt='Check para enumerar características' />
			<p className={planSectionCardFeatureStyle.feature}>{feature}</p>
		</li>
	)
}
