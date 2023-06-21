import {ReactElement} from "react";
import bgImage from './bgImage.jpeg';
import {ServiceCard} from "../../components/Cards";
import bullet from './bullet.svg'

const Equipos = (): ReactElement => {
    return (
        <section id="equipos">
            <ServiceCard
                title="Venta e instalación de equipos"
                image={bgImage}
                bullet={bullet}
                description="En Voltic también contamos con un amplio mercado de material eléctrico de las mejores marcas"
            >
                <li>Transformadores</li>
                <li>Plantas de Emergencia</li>
                <li>Cable (Baja y Media Tensión)</li>
                <li>Canalizaciones (Baja y Media Tensión)</li>
                <li>Mediciones</li>
                <li>Luminarias</li>
                <li>Accesorios</li>
                <li>Sistemas Pararrayos</li>
                <li>UP'S</li>
            </ServiceCard>
        </section>
    )
}

export {
    Equipos
}
