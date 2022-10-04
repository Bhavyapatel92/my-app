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

      <div className="flex justify-center m-5 text-violet-500 font-mono text-3xl mb-0">
        <p>Download Our Prototype APK Form Given Link Below</p>
      </div>
      <div className='m-1 flex justify-center'>
            <a  href="https://drive.google.com/file/d/1x9cOBbCAkbS4BVaHN3YsaDMqjsJslgET/view?usp=sharing" download className="inline-flex items-center py-3 px-6 mt-10 text-xs sm:text-sm font-medium text-white  bg-violet-700 rounded-md border border-gray-200  hover:bg-violet-500 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Download APK</a>
      </div>
        <div className="flex justify-center text-violet-600 text-4xl m-6">
          Thank - You 
        </div>
  </div>
  </>
  );
}

export default App;
