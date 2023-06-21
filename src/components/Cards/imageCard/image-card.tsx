import {ReactElement} from "react";
import style from './imagecard.module.css'

interface ImageCardProps {
    title: string;
    children: string;
    image: string;
}

const ImageCard = ({title, children, image}: ImageCardProps): ReactElement => {

    const bgImage = {
        backgroundImage: `url("${image}")`
    }

    return (
        <article className={style.imageCard}>
            <div className={style.bgImage} style={bgImage}>
                <div className={style.textZone}>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {
                            children
                        }
                    </p>
                </div>
            </div>
        </article>
    )
}

export {
    ImageCard
}
