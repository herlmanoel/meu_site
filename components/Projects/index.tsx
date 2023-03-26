import { Card } from './components/Card';

import ecoletaImg from "../../public/ecoleta-img.png";
import concordoImg from "../../public/concordoImg.jpg";
import corridaImg from "../../public/corridaImg.jpg";
import concorrenciaImg from "../../public/concorrenciaImg.jpg";
import programmingImg from "../../public/programmingImg.png";

const projetos = [
    {
        titulo: 'Simulação Epidemiológica',
        img: programmingImg,
        descricao: 'Projeto proposto pela disciplina de Introdução às Técnicas de Programação para compor a última nota da unidade, desenvolvido por Herlmanoel Fernandes Barbosa com a orientação do professor Júlio Cesar Paulino de Melo. O trabalho tem como objetivo utilizar o Modelo Epidemiológico Computacional (MEC) Suscetível-Infectado-Removido (SIR) utilizado para observar a interação entre essas populações dos indivíduos Suscetíveis, Infectados e Removidos e, a partir delas, propor políticas públicas para combate e prevenção de doenças infeciosas.',
        tecnologias: ['C']
    },
    {
        titulo: 'Ecoleta',
        img: ecoletaImg,
        descricao: 'Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.',
        tecnologias: ['PHP', 'MySQL']
    },
    {
        titulo: 'Concordo',
        img: concordoImg,
        descricao: 'O projeto tem como objetivo colocar em prática os conteúdos repassados em aula desenvolvendo o "clone do Discord, para humanos mais civilizados". Com isso, produzimos um sistema chamado "Concordo" com recursos similares ao Discord, porém vai funcionar somente em modo texto e sem recursos de rede.',
        tecnologias: ['C++', 'Makefile']
    },
    {
        titulo: 'Corrida de Revezamento',
        img: corridaImg,
        descricao: 'Este projeto em Go simulará uma corrida de revezamento entre várias equipes participantes. O objetivo é simular o que aconteceria se os atletas realmente participassem de uma corrida de revezamento.',
        tecnologias: ['Go']
    },
    {
        titulo: 'Um estudo empírico sobre programação concorrente',
        img: concorrenciaImg,
        descricao: 'Este projeto tem como objetivo realizar uma análise a respeito da performance de execução entre suas soluções de implementação diferentes: concorrente, utilizando threads, e sequencial.',
        tecnologias: ['Java', 'Programação Concorrente']
    },
];
export const Projects = () => {
    return (<section id="sectionPortfolio" className="mb-2">
        <h3 className="text-3xl py-1 dark:text-white ">Projetos</h3>
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {projetos.map(item => {
                return (<Card key={item.titulo} titulo={item.titulo} descricao={item.descricao} tecnologias={item.tecnologias} img={item.img} />)
            })}
            </div>
        </div>
    </section>);
}