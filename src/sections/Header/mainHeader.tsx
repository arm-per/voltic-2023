import {Header} from "../../components/header";
import {MobileMenu, Link, Menu} from "../../components/menu";
import {ReactElement} from "react";
import {useResizeWindow} from "./hooks/useResizewindow";
import {useMobileMenuHandler} from "../../components/menu/utils/useMobileMenuHandler";

const MainHeader = (): ReactElement => {

    const viewport = useResizeWindow();
    const {display, delayMenuHandler, menuHandler} = useMobileMenuHandler()
    return (
        <Header>
            {(viewport === 'mobile' || viewport === 'tablet')  &&
                <MobileMenu display={display} onClick={menuHandler}>
                    <Link hash="nosotros" label="Nosotros" onClick={delayMenuHandler}/>
                    <Link hash="servicios" label="Servicios" onClick={delayMenuHandler}/>
                    <Link hash="proyectos" label="Proyectos" onClick={delayMenuHandler}/>
                    <Link hash="equipos" label="Equipos" onClick={delayMenuHandler}/>
                    <Link hash="galeria" label="Galería" onClick={delayMenuHandler}/>
                    <Link hash="contacto" label="Contacto" onClick={delayMenuHandler}/>
                </MobileMenu>
            }
            {viewport === 'desktop' &&
                <Menu>
                    <Link hash="nosotros" label="Nosotros"/>
                    <Link hash="servicios" label="Servicios"/>
                    <Link hash="proyectos" label="Proyectos"/>
                    <Link hash="equipos" label="Equipos"/>
                    <Link hash="galeria" label="Galería"/>
                    <Link hash="contacto" label="Contacto"/>
                </Menu>
            }
        </Header>
    )
}

export {MainHeader}
