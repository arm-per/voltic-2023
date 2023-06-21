import {ReactElement} from "react";
import {ValueCardContainer, ValueCard, ImageCard} from "../../components/Cards";
import bgImage from './bgImage.jpg';
import bgImage_02 from './bgImage_02.jpg'

const Nosotros = ():ReactElement => {

    return (
        <section id="nosotros" style={{paddingTop: '50px', paddingBottom: '50px', background: '#10232c99'}}>
            <ImageCard
                title="Nosotros"
                image={bgImage_02}
            >
                Somos una empresa creada por profesionistas, que contamos con amplia experiencia en mantenimiento eléctrico, ejecución de proyectos en media y baja tensión, tenemos personal capaz y capacitado para cada proyecto.
            </ImageCard>
            <ValueCardContainer>
                <ValueCard title="Misión">
                    La total satisfacción de nuestros clientes, ejecutando sus proyectos con la mejor calidad, siempre optimizando los recursos, usando lo mejores materiales, entregando las obras en tiempo y forma.
                </ValueCard>
                <ValueCard title="Visión">
                    Ser una empresa líder a nivel nacional en obras y construcción eléctrico, ejecutando nuestras obras y mantenimientos con rapidez, garantizando nuestro trabajo, de tal manera que nuestros clientes se conviertan en nuestra fortaleza.
                </ValueCard>
                <ValueCard title="Valores">
                    <ul>
                        <li>Calidad</li>
                        <li>Puntualidad</li>
                        <li>Diferencia</li>
                        <li>Competitividad</li>
                        <li>Excelencia</li>
                        <li>Trabajo en equipo</li>
                        <li>Pasión</li>
                        <li>Lealtad</li>
                        <li>Orientación al cliente</li>
                        <li>Responsabilidad social</li>
                        <li>Resolución de problemas</li>
                    </ul>
                </ValueCard>
            </ValueCardContainer>

        </section>
    )
}

export {
    Nosotros
}
