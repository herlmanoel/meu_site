export const Menu = () => {
    return (<nav className="primaryMenu stickyMenuBar bg-white ">
        <div className="logo">
            <strong>Dev</strong>
        </div>
        <ul>
            <li><a href="#sectionHome">Home</a></li>
            <li><a href="#sectionAbout">Sobre mim</a></li>
            <li><a href="#sectionExperiencias">Experiência</a></li>
            <li><a href="#sectionEducacao">Formação</a></li>
            <li><a href="#sectionPortfolio">Projetos</a></li>
        </ul>
        <div id="primaryMenuBtn">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </nav>);
}