import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

export default function Footer() {
    return (
        <footer className="sticky top-[100vh] mt-12 mb-6 mx-12">
            <SectionTitle title="Contact Me" />
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col mb-6 md:mb-0">
                    <div className="mb-4">For further enquiries.</div>
                    <div className="flex flex-row gap-2 items-center mb-2">
                        <FaEnvelope size={16} />nahcnats@gmail.com
                    </div>  
                    <div className="flex flex-row gap-2 items-center mb-2">
                        <FaWhatsapp size={16} />+(60)12 395 7358
                    </div>  
                    <div className="flex flex-row gap-5 mt-4">
                        <a href="https://github.com/nahcnats" className="hover:text-amber-500"><FaGithub size={30} /></a>
                        <a href="https://www.linkedin.com/in/stanley-chan-5304ab258/" className="hover:text-amber-500"><FaLinkedin size={30} /></a>
                    </div>
                </div>
                <div className="flex flex-col items-center col-span-2">
                    Contact form
                </div>
            </div>
        </footer>
    );
}