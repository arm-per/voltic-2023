import {ReactElement} from "react";
import style from './valuecard.module.css'

const ValueCardContainer = ({children}: any):ReactElement => {

    return (
        <section className={style.cardsContainer}>
            {
                children
            }
        </section>
    )
}

export {
    ValueCardContainer
}
