import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "../components/ContactForm";
import ShaderBackground from "../components/ShaderBackground";

export default function Contact(){

    return(
        <div className="w-screen h-screen flex flex-row-reverse justify-center">
            <ShaderBackground />
            <div className="flex overflow-scroll xl:overflow-hidden bg-white p-4 h-full">
                <Link className="absolute top-2 left-2" to="/">
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </Link>
                <ContactForm />
            </div>
            
        </div> 
    )
}