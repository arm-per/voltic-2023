import {ReactElement} from "react";
import {ServiceCard} from "../../components/Cards";
import bgImage from './services.jpeg'
import bullet from './bullet.svg'

const Servicios = (): ReactElement => {
    return (
        <section id="servicios">
            <ServiceCard image={bgImage} title="Servicios" bullet={bullet}>
                <li>Instalaciones eléctricas en Baja Tensión </li>
                <li>Instalación de Pararrayos y sistemas de tierras</li>
                <li>Construcción y mantenimiento a subestaciones eléctricas</li>
                <li>Lineas en Media Tensión aérea/subterránea </li>
                <li>Instalación de sistemas solares fotovoltaicos (Páneles solares)</li>
                <li>Proyectos eléctricos / memorias de cálculo</li>
                <li>Trámites ante CFE</li>
                <li>Dictámenes de UVIE</li>
                <li>Consultoría en proyectos eléctricos</li>
                <li>Mantenimiento preventivo, correctivo a instalaciones y equipos eléctricos</li>
                <li>Medición de resistencia del terreno y resistencia de aislamiento</li>
            </ServiceCard>
        </section>
    )
}

export {
    Servicios
}
