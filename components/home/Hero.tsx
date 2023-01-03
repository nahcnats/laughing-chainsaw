import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-row justify-center">
            <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-3">
                <div className="flex justify-center">
                    <div className="block relative rounded-full overflow-clip w-72 h-72 border-2 border-amber-500">
                        <Image
                            className="absolute overflow-hidden"
                            src="https://avatars.githubusercontent.com/u/18158421?v=4"
                            alt="profile image"
                            fill
                        />
                    </div>
                </div>
                
                <div className="ml-6 col-span-2">
                    <h1 className="text-2xl text-amber-400 tracking-wide mb-6">Welcome to <span className="text-amber-600">nahcnats</span> Portfolio</h1>
                    <p>
                        My name is Stanley Chan. I am a programmer from Malaysia with the focus on ReactJS, React Native, NodeJS and ExpressJs. Yeah, I know I look more like a musician in a rock band or something. Seriously, I'm a programmer. I am mostly self-taught and have been active since 2018.
                    </p>
                    <a
                        href="/pdf/kinbengchan_resume_20220708a.pdf"
                        download
                        className="primary-button w-[120px] flex justify-center gap-2 py-6 px-2 items-center mt-8"
                    >
                        <FaCloudDownloadAlt size={20} />Resume
                    </a>
                </div>
            </div>
        </section>
    );
}