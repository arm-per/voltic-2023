import {ReactElement} from "react";
import style from './projectcard.module.css';

const ProjectCardWrapper = ({children, title}: any):ReactElement => {
    return <article className={style.projectContainer}>
        <h2>{title}</h2>
        <div className={style.projectGrid}>
            {children}
        </div>
    </article>
}

export{
    ProjectCardWrapper
}
