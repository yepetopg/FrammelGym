import plansSectionStyle from './plansSection.module.css';
import { PlanSectionCard } from '../../ui/PlanSectionCard/PlanSectionCard';

export const PlansSection = () => {
	return (
		<section>
			<div className={plansSectionStyle.title}>
				<h2>Planes de membresía</h2>
				<p>Elige el camano que mejor se adapte a tus objetivos</p>
			</div>
			<div className={plansSectionStyle.plans}>
				<PlanSectionCard title={'Plan Básico'} description={'Acceso libre a máquinas y zonas de cardio.'} features={['Acceso a máquinas', 'Evaluación inicial']} href={'/'} linkTitle={'Consultar precio'} isPopular={false} />
				<PlanSectionCard title={'Plan Personalizado'} description={'Entrenamiento acompañado todos los días.'} features={['Entrenador permanente', 'Plan de nutrición', 'Todas las clases grupales', 'Acceso total 24/7 (según horario)']} href={'/'} linkTitle={'Consultar precio'} isPopular={true} />	
				<PlanSectionCard title={'Plan Estudiantil'} description={'Especial para jóvenes hasta los 22 años.'} features={['Horario flexible', 'Carné institucional', 'Seguimiento mensual']} href={'/'} linkTitle={'Consultar precio'} isPopular={false} />	
			</div>
		</section>
	)
}
