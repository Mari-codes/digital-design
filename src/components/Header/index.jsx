import { useState, useEffect } from "react";
import styles from './Header.module.scss';
import Logo from '../../assets/images/logo.png';
import Moon from '../../assets/icons/moon.png';
import Sun from "../../assets/icons/sun.png";


export default function Header() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <header className={styles.header}>
            <img src={Logo} alt='Logo' className={styles.header__left} />

            <button className={styles.header__right} onClick={toggleTheme}>
                <img src={theme === "light" ? Moon : Sun} alt='Dark Mode Icon' />
            </button>
        </header>
    );
}