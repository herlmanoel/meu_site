import Image from "next/image";
import { ProjectType } from '../../data/projects';


export const Card = ({ id, titulo, descricao, tecnologias, img, link  }: ProjectType) => {
    descricao = descricao.substring(0, 134) + "...";
    return (
        <div key={id} className="card-div my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
            <article className="card-project-article overflow-hidden rounded-lg shadow-lg h-full">
                <div className="card-project-body flex flex-col justify-between">
                    <div className="img-card overflow-hidden">
                        <Image objectFit="cover" className="block h-auto w-full" src={img} alt={descricao} />
                    </div>
                    <header className="tamanho-titulo-card flex items-center justify-between leading-tight p-2 md:p-4 ">
                        <h1 className="text-lg">
                            <strong>
                                <a className="no-underline hover:underline text-black" href="#">
                                    {titulo}
                                </a>
                            </strong>
                        </h1>
                    </header>
                    <main className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <p className="ml-2 text-sm">
                                {descricao}
                            </p>
                        </a>
                    </main>
                    <footer className="flex justify-start items-center px-6 pt-4 pb-2">
                        <div>
                            {tecnologias.map(tec => {
                                return (<span key={8} className="inline-block bg-teal-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-teal-600 transition delay-50 duration-300 ease-in-out">{tec}</span>)
                            })}
                        </div>
                    </footer>
                </div>
                <a className="button-card-project-open-modal shadow-lg" target="_blank" href={link} >
                    Ver mais
                </a>
            </article>

        </div>

    );
}