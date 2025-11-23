import styles from './Card.module.scss';

export default function Card({ date, role, company, description }) {
    return (
        <section className={styles.card}>
            <div className={styles["card__header"]}>
                <span className={styles["card__date"]}>{date}</span>
                <h3 className={styles["card__role"]}>{role}</h3>
                <small className={styles["card__company"]}>{company}</small>
            </div>

            <p className={styles["card__description"]}>{description}</p>
        </section>
    );
}