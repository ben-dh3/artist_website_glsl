import Gallery from './components/Gallery';
import ShaderBackground from './components/ShaderBackground';
import Title from '/title.png';
function App() {

  return (
    <div className='w-screen h-screen flex'>
      <ShaderBackground />
      <div className='absolute self-center bg-white w-full h-1/2'>
        <div className='flex flex-row justify-evenly'>
          <div className="flex-1 flex justify-center items-center">
            <img src={Title} alt="Art By Ben" />
          </div>
          <div className="flex-1 mx-auto">
            <Gallery /> 
          </div>
          <div className="flex-1">
            <div>CONTACT</div>
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default App
