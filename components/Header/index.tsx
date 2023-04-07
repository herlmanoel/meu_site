import { AiFillLinkedin } from "react-icons/ai";
import { Info } from '../../pages';
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";

type AboutMeProps = {
    info: Info;
}

export const Header = ({ info }: AboutMeProps) => {
    return (<section id="sectionHome" className="min-h-screen flex justify-center">
        <div className="text-center flex flex-col justify-center">
            <Title>{info.nome}</Title>
            <Subtitle>{info.subtitulo}</Subtitle>
            <div className="text-5xl flex justify-center gap-6 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/herlmanoel/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>
            </div>
        </div>
    </section>);
}