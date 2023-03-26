import perfilImg from "../../public/perfil.jpg";
import Image from "next/image";
import { Info } from '../../pages';


type AboutMeProps = {
    info: Info;
}

export const AboutMe = ({ info }: AboutMeProps) => {
    return (
        <section id="sectionAbout" className="min-h-screen flex justify-center">
            <div className="w-full container-about-me">
                <div>
                    <div className="flex-1">
                        <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden">
                            <Image src={perfilImg} layout="fill" objectFit="cover" alt="Descrição da imagem" />
                        </div>
                    </div>
                </div>
                <div className="div-texto-about-me">
                    <div className="flex-1">
                        <h3 className="text-3xl dark:text-white ">Olá, meu nome é <br /> <strong>Herlmanoel</strong>,</h3>
                        <br />
                        <p className="text-sm leading-8 text-gray-800 dark:text-gray-200  md:text-xl">
                            {info.biografia}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}