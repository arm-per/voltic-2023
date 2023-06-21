import {ReactElement} from "react";
import {createPortal} from "react-dom";
import style from './mobilewrapper.module.css'

const MobileMenuWrapper = ({children, display}: any): ReactElement => {
    return createPortal(<div className={`${style.container} ${display ? style.show : style.hidden}`}>{children}</div>, document.getElementById('mobileMenu'))
}

export  {MobileMenuWrapper};
