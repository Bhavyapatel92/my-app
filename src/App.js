import './App.css';
import './index.css';
import svg from './icons/Landing.svg'
function App() {
  return (
  <>
  <div style={{backgroundImage : `url(${svg})` }} className='w-full m-0 p-0 relative h-screen'>
      <div className='flex justify-center m-10'>
        <p className="text-violet-500 font-mono text-5xl font-bold">
        NEXT BIG THING - HACKATHON
        <div className="flex justify-center text-violet-700">
          Presented by google cloud
        </div>
        <div className="flex justify-center text-violet-600">
          Team - MeDoV
        </div>
        </p>
        
      </div>
  </div>
  </>
  );
}

export default App;
