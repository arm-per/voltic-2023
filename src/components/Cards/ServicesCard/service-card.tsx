import {ReactElement} from "react";
import style from './servicecard.module.css'

interface ServiceCardProps {
    children: any;
    image: string;
    title: string;
    bullet?: string;
    description?: string
}
const ServiceCard = ({children, image, title, bullet, description}: ServiceCardProps): ReactElement => {

    const bulletStyle = bullet ? {
        listStyle: `url("${bullet}")`
    } : {listStyle: 'square'};
    return (
        <article className={style.serviceCard}>
            <div className={style.serviceCardContainer}>
                <div className={style.illustration}>
                    <img src={image} alt=""/>
                </div>
                <div className={style.content}>
                    <h2>
                        {title}
                    </h2>
                    <p>{description}</p>
                    <ul style={bulletStyle}>
                        {children}
                    </ul>
                </div>
            </div>
        </article>
    )
}

export {
    ServiceCard
}
