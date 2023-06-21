import {ReactElement} from "react";
import {MainHeader} from "./Header";
import {BannerSlider} from "./slider";
import {WhatsappButton} from "../components/WhatsappButton/whatsapp-button";
import {Nosotros} from "./Nosotros";
import {Servicios} from "./Servicios";
import {Equipos} from "./Equipos";
import {Proyectos} from "./Proyectos";
import {Galeria} from "./Galeria";
import Contacto from "./Contacto";
import {Clientes} from './Clientes';
import {Signature} from "../components/Signature/Signature";

const OnePage = (): ReactElement => {
    return (
        <>
            <MainHeader/>
            <BannerSlider/>
            <Nosotros/>
            <Servicios/>
            <Proyectos/>
            <Equipos/>
            <Galeria/>
            <Contacto/>
            <Clientes/>
            <WhatsappButton/>
            <Signature/>
        </>
    )
}

export default OnePage;
