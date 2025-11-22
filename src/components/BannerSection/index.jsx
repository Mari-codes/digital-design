import styles from './BannerSection.module.scss';
import BannerImage from '../../assets/images/banner.jpg'

export default function BannerSection() {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__image}>
                <img src={BannerImage} alt='Banner' />
            </div>

            <div className={styles.banner__content}>
                <p className={styles['banner__content-subtitle']}>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2 className={styles['banner__content-title']}>Agência de Branding</h2>
                <span className={styles['banner__content-extra']}>e design digital</span>
            </div>

        </section>
    )
}