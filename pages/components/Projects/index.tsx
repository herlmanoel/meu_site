import { Card } from './components/Card';


const projetos = [
    {
        titulo: 'API de Geolocalização',
        descricao: 'API para buscar localização de usuários',
        tecnologias: ['Python', 'MySQL']
    },
    {
        titulo: 'API de Mensagens',
        descricao: 'API para enviar e receber mensagens',
        tecnologias: ['PHP', 'MySQL']
    },
    {
        titulo: 'API de Login',
        descricao: 'API para autenticação de usuários',
        tecnologias: ['JavaScript', 'MySQL']
    },
    {
        titulo: 'API de Mapa',
        descricao: 'API para mostrar localização em um mapa',
        tecnologias: ['JavaScript', 'Node.js']
    },
    {
        titulo: 'API de Notificações',
        descricao: 'API para enviar notificações push para usuários',
        tecnologias: ['JavaScript', 'PHP']
    },
    {
        titulo: 'API de Mapa',
        descricao: 'API para mostrar localização em um mapa',
        tecnologias: ['JavaScript', 'Node.js']
    },
    {
        titulo: 'API de Notificações',
        descricao: 'API para enviar notificações push para usuários',
        tecnologias: ['JavaScript', 'PHP']
    }
];
export const Projects = () => {
    return (<section id="sectionPortfolio" className="mb-2">
        <h3 className="text-3xl py-1 dark:text-white ">Projetos</h3>
        {/* <div className="flex items-center flex-wrap">
            {projetos.map(item => {
                return (<Card key={item.titulo} titulo={item.titulo} descricao={item.descricao} tecnologias={item.tecnologias} />)
            })}
        </div> */}
        <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {projetos.map(item => {
                return (<Card key={item.titulo} titulo={item.titulo} descricao={item.descricao} tecnologias={item.tecnologias} />)
            })}
            </div>
        </div>
    </section>);
}