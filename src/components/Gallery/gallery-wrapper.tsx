import {ReactElement, useState} from "react";
import style from './gallery.module.css'
import {GallerySlideshow} from "./gallery-slideshow";

const GalleryWrapper = ({images}:any): ReactElement => {

    const [slideShow, setSlideShow] = useState<Boolean>(false);
    const [index, setIndex] = useState<number>(0);

    return (
        <article className={style.galleryWrapper}>
            <h2>Galería</h2>
            <div className={style.galleryGrid}>
                {
                    images.map((image: any, index: any) => (
                        <img src={image} key={`gallery_${index}`} alt="" onClick={()=>{setSlideShow(true); setIndex(index)}}/>
                    ))
                }
            </div>
            {slideShow && <GallerySlideshow images={images} currentIndex={index} action={()=>setSlideShow(false)}/>}
        </article>
    )
}

export {
    GalleryWrapper
}
