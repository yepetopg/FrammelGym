import { Icon } from '../../ui/Icon/Icon';
import tableStyles from './comparisonTable.module.css';

const rows = [
  { feature: 'Acceso libre a máquinas de fuerza y zona de peso libre', basic: true, custom: true, vip: true },
  { feature: 'Zona cardiovascular profesional (caminadoras, elípticas, bicicletas)', basic: true, custom: true, vip: true },
  { feature: 'Vestidores con casilleros individuales y duchas', basic: true, custom: true, vip: true },
  { feature: 'Valoración biomecánica y test postural inicial', basic: false, custom: true, vip: true },
  { feature: 'Prescripción de rutina individualizada por microciclos', basic: false, custom: true, vip: true },
  { feature: 'Acompañamiento presencial y corrección técnica en cada serie', basic: false, custom: true, vip: true },
  { feature: 'Asesoría de hábitos nutricionales y recomposición corporal', basic: false, custom: true, vip: true },
  { feature: 'Entrenador dedicado 1 a 1 de forma exclusiva por sesión', basic: false, custom: false, vip: true },
  { feature: 'Congelación de plan por incapacidad o viaje justificado', basic: 'Hasta 5 días', custom: 'Hasta 15 días', vip: 'Hasta 30 días' },
];

const renderCell = (value, isHighlight = false) => {
  if (value === true) {
    return <Icon name="check_circle" size={22} className={tableStyles.checkIcon} />;
  }
  if (value === false) {
    return <span className={tableStyles.dash}>—</span>;
  }
  return (
    <span className={`${tableStyles.textCell} ${isHighlight ? tableStyles.textCellHighlight : ''}`}>{value}</span>
  );
};

export const ComparisonTable = () => {
  return (
    <section className={tableStyles.section}>
      <div className={tableStyles.container}>
        <div className={tableStyles.header}>
          <span className={tableStyles.label}>TRANSPARENCIA TOTAL</span>
          <h2 className={tableStyles.title}>Tabla comparativa de beneficios</h2>
          <p className={tableStyles.description}>
            Revisa a detalle qué incluye cada modalidad para tomar la decisión ideal según tu nivel de
            experiencia y ritmo de vida.
          </p>
        </div>
        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr className={tableStyles.theadRow}>
                <th className={`${tableStyles.th} ${tableStyles.thFirst}`}>Beneficio / Característica</th>
                <th className={`${tableStyles.th} ${tableStyles.thCenter}`}>Plan Básico</th>
                <th className={`${tableStyles.th} ${tableStyles.thCenter} ${tableStyles.thHighlight}`}>Plan Personalizado</th>
                <th className={`${tableStyles.th} ${tableStyles.thCenter}`}>Plan Élite VIP</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={tableStyles.tbodyRow}>
                  <td className={`${tableStyles.td} ${tableStyles.tdFeature}`}>{row.feature}</td>
                  <td className={`${tableStyles.td} ${tableStyles.tdCenter}`}>{renderCell(row.basic)}</td>
                  <td className={`${tableStyles.td} ${tableStyles.tdCenter} ${tableStyles.tdHighlight}`}>
                    {renderCell(row.custom, true)}
                  </td>
                  <td className={`${tableStyles.td} ${tableStyles.tdCenter}`}>{renderCell(row.vip)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
