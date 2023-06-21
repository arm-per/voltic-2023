import {ReactElement} from "react";
import style from './valuecard.module.css';

interface ValueCard {
    title: string;
    children: any;
}
const ValueCard = ({title, children}: ValueCard): ReactElement => {

    return (
        <article className={style.valueCard}>
            <h2>
                {
                    title
                }
            </h2>
            <p>
                {
                    children
                }
            </p>
        </article>
    )
}

export {
    ValueCard
}
