import styles from './Header.module.css';
import logo from "../assets/logo.svg"

export function Header(){
    return (
        <header className={styles.wrapper}>
            <img className={styles.logo} alt="To-Do List" src={logo}></img>
        </header>
    )
}