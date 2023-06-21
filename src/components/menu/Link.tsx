import {ReactElement} from "react";
import {linkProps} from "./link.interface";
import style from './link.module.css'


const Link = ({hash, label, onClick}: any): ReactElement => {

    return (
        <a href={`#${hash}`} className={style.link} onClick={onClick}>{label}</a>
    )
}

export {
    Link
}
