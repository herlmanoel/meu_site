import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";
import { Info } from "../../index";

type AboutMeProps = {
    info: Info;
}

export const Header = ({ info }: AboutMeProps) => {
    return (<section id="sectionHome" className="min-h-screen flex justify-center">
        <div className="text-center flex flex-col justify-center">
            <Title>{info.nome}</Title>
            <Subtitle>{info.subtitulo}</Subtitle>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>
        </div>
    </section>);
}