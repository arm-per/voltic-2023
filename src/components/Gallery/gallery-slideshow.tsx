import {ReactElement, useState} from "react";
import {createPortal} from "react-dom";
import style from './gallery.module.css'

const GallerySlideshow = ({images, currentIndex, action}: any):ReactElement => {

    const totalSlides = images.length;
    const [image, setImage] = useState<string>(images[currentIndex])
    const [index, setIndex] = useState<number>(currentIndex);

    const nextHandler = (): void => {
        if(index <= totalSlides - 2){
            setIndex(index +1)
            setImage(images[index])
        }else{
            setIndex(0)
            setImage(images[index])
        }
    }

    const prevHandler = (): void => {
        if(index >= 1){
            setIndex(index - 1)
            setImage(images[index])
        }else{
            setIndex(totalSlides - 1)
            setImage(images[index])
        }
    }

    console.log(index, images[index])

    return (
        createPortal(<div className={style.slideshow}>
            <button onClick={action} className={style.close}>×</button>
            <img src={image} alt=""/>
            <div className={style.navigationButton}>
                <button onClick={prevHandler}> Anterior </button>
                <button onClick={nextHandler}> Siguiente </button>
            </div>
            {/* @ts-nocheck */}
        </div>, document.getElementById('gallery'))
    )
}

export {
    GallerySlideshow
}
