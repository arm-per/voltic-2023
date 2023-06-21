import {ReactElement} from "react";
import style from './mobile.module.css';
import {MobileMenuWrapper} from "./mobile-menu-wrapper";

const MobileMenu = ({children, display, onClick}: any): ReactElement => {
    return (
        <nav className={style.mobileMenu}>
            <button className={style.mobileMenu_button} onClick={onClick}>
                <svg className={style.mobileMenu_button_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="rgba(255,255,255,1)"></path></svg>
                <span className={style.mobileMenu_button_label}>
                    Menu
                </span>
                <MobileMenuWrapper display={display}>
                    {children}
                </MobileMenuWrapper>
            </button>

        </nav>
    )
}

export {
    MobileMenu
}
