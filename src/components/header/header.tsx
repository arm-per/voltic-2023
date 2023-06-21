import type {ReactElement} from "react";
import styles from './header.module.css';
import logo from './logo-voltic.svg';

const Header = ({children}: any): ReactElement => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.logo} src={logo} alt="Identificador oficial de Voltic"/>
                {
                    children
                }
            </div>
        </header>
    )
}

export {
    Header
}
