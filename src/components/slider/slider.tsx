import {ReactElement} from "react";
import style from './slider.module.css';

const Slider = ({images}: any): ReactElement => {

    return (
        <div className={style.container}>
            <div className={style.carrousel}>
                <div className={style.banners}>
                    {
                        images.map((img: any, index: any)=>{
                        return (
                            <div className={style.bannerContainer} key={index}>
                                <img src={img} alt=""/>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export {
    Slider
}
