import {ReactElement} from "react";
import {ProjectCardWrapper, ProjectCard} from "../../components/Cards";
import cabo from './cabo_villas.jpg';
import city from './city_express.jpg';
import toks from './toks.jpg';
import nissan from './nissan.jpeg';

const Proyectos = (): ReactElement => {
    return  <section id="proyectos" style={{paddingTop: '50px', paddingBottom: '50px', background: '#10232c99'}}>
        <ProjectCardWrapper title="Proyectos">
            <ProjectCard image={cabo}>
                Cabo Villas Beach Resort
            </ProjectCard>
            <ProjectCard image={city}>
                City Express
            </ProjectCard>
            <ProjectCard image={toks}>
                Toks
            </ProjectCard>
            <ProjectCard image={nissan}>
                Nissan Puerto Peñasco
            </ProjectCard>
        </ProjectCardWrapper>
    </section>
}

export {
    Proyectos
}
