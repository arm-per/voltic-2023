import {ReactElement} from "react";
import style from './projectcard.module.css';

const ProjectCard = ({children, image}: any): ReactElement => {

    const bgImage = {
        backgroundImage: `url("${image}")`
    }

    return (
        <div className={style.projectCard}>
            <div style={bgImage} className={style.project}>

            </div>
            <div className={style.projectTitle}>
                <h3>
                    {children}
                </h3>
            </div>
        </div>
    )
}

export {
    ProjectCard
}

