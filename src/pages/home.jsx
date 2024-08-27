import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Gallery from '../components/Gallery';
import ShaderBackground from '../components/ShaderBackground';
import Title from '/title.webp';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Home() {

  return (
    <div className='w-screen h-screen flex flex-row-reverse'>
      <ShaderBackground />
      <div className='flex self-center bg-white h-full w-auto'>
        <div className='flex flex-col items-center'>
          <div className="flex-1 flex">
            <img className="h-40 w-auto self-center" src={Title} alt="Art By Ben" />
          </div>
          <div className="flex-1 flex mx-10">
            <Gallery /> 
          </div>
          <div className="flex-1 flex">
            <div className="title-colour text-2xl self-center space-x-5">
                <a href="https://www.instagram.com/ben.d_h/" target='_blank' aria-label="Instagram Link">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <Link to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
                </Link>   
            </div>
            
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default Home