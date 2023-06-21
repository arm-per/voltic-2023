import {ReactElement} from "react";
import style from './menu.module.css'
const Menu = ({children}: any): ReactElement => {

    return (
        <nav className={style.desktopNav}>
            {children}
        </nav>
    )
}

export {
    Menu
}
