import {ReactElement} from "react";
import {Slider} from "../../components/slider";

import Banner_01 from './banner_01.jpg';
import Banner_02 from './banner_02.jpg';
import Banner_03 from './banner_03.jpg';
import Banner_04 from './banner_04.jpg';

const BannerSlider = ():ReactElement => {

    const Banners = [
        Banner_01, Banner_02, Banner_03, Banner_04
    ]

    return (
        <>
            <Slider
                images={Banners}
            />
        </>
    )
}

export {
    BannerSlider
}
