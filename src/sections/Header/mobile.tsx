import {ReactElement} from "react";
import {Link, MobileMenu} from "../../components/menu";

const Mobile = (): ReactElement => {
    return (
        <MobileMenu>
            <Link hash="nosotros" label="Nosotros"/>
            <Link hash="servicios" label="Servicios"/>
            <Link hash="proyectos" label="Proyectos"/>
            <Link hash="equipos" label="Equipos"/>
            <Link hash="galeria" label="Galería"/>
            <Link hash="contacto" label="Contacto"/>
        </MobileMenu>
    )

}

export {
    Mobile
}
