import styles from "./ServiceActionCard.module.css";

function ServiceActionCard({ image, title, text }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <img src={image} alt="image" />
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

export default ServiceActionCard;