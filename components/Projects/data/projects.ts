import ecoletaImg from "../../../public/ecoleta-img.png";
import concordoImg from "../../../public/concordoImg.jpg";
import corridaImg from "../../../public/corridaImg.jpg";
import concorrenciaImg from "../../../public/concorrenciaImg.jpg";
import programmingImg from "../../../public/programmingImg.png";
import { StaticImageData } from 'next/image';

export const projetos: ProjectType[] = [
  {
    id: 1,
    titulo: "Simulação Epidemiológica",
    img: programmingImg,
    descricao:
      "Projeto proposto pela disciplina de Introdução às Técnicas de Programação para compor a última nota da unidade, desenvolvido por Herlmanoel Fernandes Barbosa com a orientação do professor Júlio Cesar Paulino de Melo. O trabalho tem como objetivo utilizar o Modelo Epidemiológico Computacional (MEC) Suscetível-Infectado-Removido (SIR) utilizado para observar a interação entre essas populações dos indivíduos Suscetíveis, Infectados e Removidos e, a partir delas, propor políticas públicas para combate e prevenção de doenças infeciosas.",
    tecnologias: ["C"],
    link: 'https://github.com/herlmanoel/simulacao_epidemiologica_projeto_itp',
  },
  {
    id: 2,
    titulo: "Ecoleta",
    img: ecoletaImg,
    descricao:
      "Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.",
    tecnologias: ["PHP", "MySQL"],
    link: 'https://github.com/herlmanoel/ecoleta',
  },
  {
    id: 3,
    titulo: "Concordo",
    img: concordoImg,
    descricao:
      'O projeto tem como objetivo colocar em prática os conteúdos repassados em aula desenvolvendo o "clone do Discord, para humanos mais civilizados". Com isso, produzimos um sistema chamado "Concordo" com recursos similares ao Discord, porém vai funcionar somente em modo texto e sem recursos de rede.',
    tecnologias: ["C++", "Makefile"],
    link: 'https://github.com/herlmanoel/concordo',
  },
  {
    id: 4,
    titulo: "Corrida de Revezamento",
    img: corridaImg,
    descricao:
      "Este projeto em Go simulará uma corrida de revezamento entre várias equipes participantes. O objetivo é simular o que aconteceria se os atletas realmente participassem de uma corrida de revezamento.",
    tecnologias: ["Go"],
    link: 'https://github.com/herlmanoel/corrida-de-revezamento-concorrente',
  },
  {
    id: 5,
    titulo: "Um estudo empírico sobre programação concorrente",
    img: concorrenciaImg,
    descricao:
      "Este projeto tem como objetivo realizar uma análise a respeito da performance de execução entre suas soluções de implementação diferentes: concorrente, utilizando threads, e sequencial.",
    tecnologias: ["Java", "Programação Concorrente"],
    link: 'https://drive.google.com/file/d/1cu0IofFF3EvQgBmW_PgHxChmrf6QjEDA/view',
  },
];

export type ProjectType = {
  id: number;
  titulo: string;
  img: StaticImageData;
  descricao: string;
  tecnologias: string[];
  link: string;
};
