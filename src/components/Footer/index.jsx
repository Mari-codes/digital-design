import styles from './Footer.module.scss';
import Logo from '../../assets/images/logo.png';
import Facebook from '../../assets/icons/facebook.png';
import Twitter from '../../assets/icons/twitter.png';
import LinkedIn from '../../assets/icons/linkedin.png';
import Dribble from '../../assets/icons/dribble.png';
import Behance from '../../assets/icons/behance.png';
import Google from '../../assets/icons/google.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__brand}>
                    <img className={styles.footer__logo} src={Logo} alt="Logo" />
                    <p className={styles.footer__text}>
                        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                        ferramentas e tecnologias personalizadas
                    </p>
                </div>

                <div className={styles.footer__icons}>
                    <img src={Facebook} alt="Facebook logo" />
                    <img src={Twitter} alt="Twitter/X logo" />
                    <img src={LinkedIn} alt="LinkedIn logo" />
                    <img src={Dribble} alt="Dribble logo" />
                    <img src={Behance} alt="Behance logo" />
                    <img src={Google} alt="Google logo" />
                </div>
            </div>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__bottom}>
                <p className={styles.footer__bottom}>Copyright 2025 &copy;</p>
                <span>Mariana Borges</span>
            </div>
        </footer>
    );
}
