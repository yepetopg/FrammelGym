
import serviceActionCardStyles from "./ServiceActionCard.module.css";

export const ServiceActionCard = ({ image, title, text }) => {
  return (
    <article className={serviceActionCardStyles.card}>
      <div className={serviceActionCardStyles.icon}>
        <img src={image} alt="" />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
