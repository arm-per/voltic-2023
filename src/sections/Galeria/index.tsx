import {ReactElement} from "react";
import {GalleryWrapper} from "../../components/Gallery";

import gallery_00 from './resource_00010.jpg';
import gallery_01 from './resource_00014.jpg';
import gallery_02 from './resource_00015.jpg';
import gallery_0 from './gallery_00000.jpeg';
import gallery_1 from './gallery_00001.jpeg';
import gallery_3 from './gallery_00003.jpeg';
import gallery_4 from './gallery_00004.jpeg';
import gallery_5 from './gallery_00005.jpeg';
import gallery_6 from './gallery_00006.jpeg';
import gallery_7 from './gallery_00007.jpeg';
import gallery_9 from './gallery_00009.jpeg';
import gallery_11 from './gallery_00011.jpeg';
import gallery_12 from './gallery_00012.jpeg';
import gallery_13 from './gallery_00013.jpeg';
import gallery_15 from './gallery_00015.jpeg';
import gallery_16 from './gallery_00016.jpeg';
import gallery_18 from './gallery_00018.jpeg';
import gallery_20 from './gallery_00020.jpeg';

const Galeria = (): ReactElement => {

    const galleryImages = [
        gallery_00, gallery_01, gallery_02,
        gallery_0,
        gallery_4,
        gallery_1,
        gallery_3,
        gallery_5,
        gallery_6,
        gallery_7,
        gallery_9,
        gallery_11,
        gallery_12,
        gallery_13,
        gallery_15,
        gallery_16,
        gallery_18,
        gallery_20
    ];

    return (
        <section id="galeria" style={{paddingTop: '50px', paddingBottom: '50px', background: '#10232c99'}}>
            <GalleryWrapper title="Galería" images={galleryImages}/>
        </section>
    )
}

export {
    Galeria
}
