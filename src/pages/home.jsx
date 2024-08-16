import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Gallery from '../components/Gallery';
import ShaderBackground from '../components/ShaderBackground';
import Title from '/title.png';
function Home() {

  return (
    <div className='w-screen h-screen flex'>
      <ShaderBackground />
      <div className='sm:absolute self-center bg-white w-full'>
        <div className='flex sm:flex-row flex-col justify-evenly'>
          <div className="flex-1 flex justify-center items-center">
            <img src={Title} alt="Art By Ben" />
          </div>
          <div className="flex-1">
            <Gallery /> 
          </div>
          <div className="flex-1 flex justify-end">
            <div className="text-4xl self-center -rotate-90">
                <a className="text-2xl" href="https://www.instagram.com/__artbyben/" target='_blank' aria-label="Instagram Link">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <Link to="/contact">CONTACT</Link>   
            </div>
            
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default Home