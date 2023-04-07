let experiences = [
    {
        anoInicio: new Date(2020, 10, 1),
        anoFim: new Date(2021, 5, 1),
        funcao: "Bolsista de Iniciação Científica",
        empresa: "Instituto Metrópole Digital - IMD/UFRN",
        descricao: `Projeto de Pesquisa da Universidade Federal do Rio Grande do Norte, no laboratório de Inovação Tecnológica em Saúde.
        Nesta aplicação, produzimos um sistema para administrar oficinas de inovação (Hackathon) e, neste sistema, acompanhar os projetos desenvolvidos.
        No desenvolvimento da aplicação foi utilizado:`,
        items: [
            `1. Back-end: interface de Programação de Aplicações API em JavaScript (Node.JS), com Express;`,
            `2. Front-end: React e Styled Components; `,
            `3. Banco de dados: MySQL.`
        ]
    },
    {
        anoInicio: new Date(2021, 6, 1),
        anoFim: new Date(2022, 3, 1),
        funcao: "Desenvolvedor Full Stack",
        empresa: "Leve Tecnologia",
        descricao: `Atuando no desenvolvimento de E-commerces para operadoras de plano de saúde, implantando e mantendo sistemas.`,
        items: []
    },
    {
        anoInicio: new Date(2022, 4, 1),
        anoFim: null,
        funcao: "Desenvolvedor de software",
        empresa: "LIAX TI",
        descricao: `[Alocado na OdontoPrev]

        Análise, desenvolvimento e manutenção de sistemas, utilizando as tecnologias:`,
        items: [
            `- Java (Spring Boot, JSF e PrimeFaces);`,
            `- Banco de dados Oracle;`,
            `- Microsserviços;`,
            `- Jenkins;`,
            `- Git e GitLab.`
        ]
    }
];

const education = [
    {
        anoInicio: "2019",
        anoFim: "2023",
        instituicao: "Universidade Federal do Rio Grande do Norte",
        descricao: "Bacharelado em Tecnologia da Informação, Engenharia de Software"
    },
    {
        anoInicio: "2016",
        anoFim: "2019",
        instituicao: "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
        descricao: "Técnico em Informática"
    },

];

export const Resume = () => {
    function getDateFormat(date: Date | null) {
        if(date === null) {
            return 'Atualmente';
        }
        const month = date.toLocaleString('pt-BR', { month: 'short' }).toUpperCase();
        const year = date.getFullYear();
        return `${month}/${year}`;
    }

    experiences = experiences.sort((a,b) => b.anoInicio.getTime() - a.anoInicio.getTime());

    function monthsBetween(date1: Date, date2: Date | null) {
        if(date2 ==null ) {
            date2 = new Date();
        }
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        let months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        if (d2.getDate() < d1.getDate()) {
            months--;
        }
        return months + 1;
    }

    return (
        <>
            <section id="sectionResume">
                <h3 id="sectionExperiencias" className="text-3xl dark:text-white ">Experiência</h3>
                <div className="resumeSection">
                    <main className="resumeContentsRow">
                        <div className="resumeEvenColumn">
                            <div className="resumeContents">
                                {experiences.map(item => {
                                    return (
                                        <div className="box" key={item.funcao}>
                                            <h4 className="py-2 text-teal-600 dark:text-teal-400"> {getDateFormat(item.anoInicio)}
                                             - {getDateFormat(item.anoFim)} · {monthsBetween(item.anoInicio, item.anoFim)} meses </h4>
                                            <h3> <strong>{item.funcao}</strong> - {item.empresa}</h3>
                                            <p>{item.descricao}</p>
                                            {item.items.map(i =>
                                                (<p key={i}>{i}</p>)
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </main>
                </div>
            </section>
            <h3 id="sectionEducacao" className="text-3xl py-1 dark:text-white">Educação</h3>
            <section className="resumeSection">
                <main className="resumeContentsRow">
                    <div className="resumeEvenColumn">
                        <div className="resumeContents">
                            {education.map(item => {
                                return (
                                    <div className="box" key={item.instituicao}>
                                        <h4 className="py-2 text-teal-600 dark:text-teal-400">{item.anoInicio} - {item.anoFim}</h4>
                                        <h3>{item.instituicao}</h3>
                                        <p>{item.descricao}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </main>
            </section>
        </>);
}