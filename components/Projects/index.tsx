import { Card } from './components/Card';
import { projetos } from './data/projects';

export const Projects = () => {
    return (<section id="sectionPortfolio" className="mb-2">
        <h3 className="text-3xl py-1 dark:text-white ">Projetos</h3>
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {projetos.map(item => {
                    return (
                        <Card
                            key={item.titulo}
                            titulo={item.titulo}
                            descricao={item.descricao}
                            tecnologias={item.tecnologias}
                            img={item.img}
                            id={item.id}
                            link={item.link}
                        />
                    )
                })}
            </div>
        </div>
    </section>);
}