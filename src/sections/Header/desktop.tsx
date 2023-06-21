import {ReactElement} from "react";
import {Link, Menu} from '../../components/menu';

const Desktop = ():ReactElement => {
    return (
        <Menu>
            <Link hash="nosotros" label="Nosotros"/>
            <Link hash="servicios" label="Servicios"/>
            <Link hash="proyectos" label="Proyectos"/>
            <Link hash="equipos" label="Equipos"/>
            <Link hash="galeria" label="Galería"/>
            <Link hash="contacto" label="Contacto"/>
        </Menu>
    )
}
