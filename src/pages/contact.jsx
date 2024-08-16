import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "../components/ContactForm";
import ShaderBackground from "../components/ShaderBackground";

export default function Contact(){

    return(
        <div>
            <ShaderBackground />
            <Link className='' to="/">
                <FontAwesomeIcon icon={faTimes} />
            </Link>
            <ContactForm />
        </div> 
    )
}