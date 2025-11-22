import styles from './Header.module.scss';
import Logo from '../../assets/images/logo.png';
import Moon from '../../assets/icons/moon.png';


export default function Header() {
    return (
        <header className={styles.header}>
          <img src={Logo} alt='Logo' className={styles.header__left}/>

          <button className={styles.header__right}>
          <img src={Moon} alt='Dark Mode Icon'/>
          </button>
        </header>
    );
}