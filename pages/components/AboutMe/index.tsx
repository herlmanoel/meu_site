
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";

import perfilImg from "../../../public/perfil.jpg";
import Image from "next/image";

export const AboutMe = ({ info }) => {
    return (
        <>

            <section id='sectionHome' className="min-h-screen flex justify-center">
                <div className="text-center flex flex-col justify-center">
                    <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                        {info.nome}
                    </h2>
                    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                        {info.subtitulo}
                    </h3>
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                        <AiFillTwitterCircle />
                        <AiFillLinkedin />
                        <AiFillYoutube />
                    </div>
                </div>
            </section>
            
            <section id='sectionAbout' className="mb-48">
                <div className="w-full flex gap-6">
                    <div className="w-1/3 flex items-center max-h-full">
                        <div className='flex-1'>
                            <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden">
                                <Image src={perfilImg} layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-between items-center max-h-full">
                        <div className='flex-1'>
                        <h3 className="text-3xl dark:text-white ">Olá, meu nome é <br /> <strong>Herlmanoel</strong>,</h3>
                        <br />
                            <p className="text-sm leading-8 text-gray-800 dark:text-gray-200  md:text-xl">
                                {info.biografia}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}