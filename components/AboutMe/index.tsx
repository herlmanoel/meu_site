import perfilImg from "../../public/perfil.jpg";
import Image from "next/image";
import { Info } from '../../pages';
import {
    Section,
    Container,
    ProfileImage,
    ProfileImageContainer,
    TextContainer,
    Heading,
    Paragraph
} from './styles';

type AboutMeProps = {
    info: Info;
}

export const AboutMe = ({ info }: AboutMeProps) => {
    return (
        <Section id="sectionAbout">
            <Container className="container-about-me">
                <div>
                    <ProfileImageContainer className="flex-img-perfil">
                        <ProfileImage>
                            <Image src={perfilImg} objectFit="cover" alt="Profile image" />
                        </ProfileImage>
                    </ProfileImageContainer>
                </div>
                <div className="div-texto-about-me">
                    <TextContainer>
                        <Heading>Olá, meu nome é <br /><strong>Herlmanoel</strong>,</Heading>
                        <br />
                        <Paragraph>
                            {info.biografia}
                        </Paragraph>
                    </TextContainer>
                </div>
            </Container>
        </Section>
    );
}