import { AiFillLinkedin } from "react-icons/ai";
import { Info } from '../../pages';
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";
import { Section, Container, IconContainer } from './styles';

type AboutMeProps = {
    info: Info;
}

export const Header = ({ info }: AboutMeProps) => {
    return (
        <Section id="sectionHome">
            <Container>
                <Title>{info.nome}</Title>
                <Subtitle>{info.subtitulo}</Subtitle>
                <IconContainer>
                    <a href="https://www.linkedin.com/in/herlmanoel/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin />
                    </a>
                </IconContainer>
            </Container>
        </Section>
    );
}