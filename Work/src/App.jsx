// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import bg from './header-background.webp'

function App() {

  return (
    <>
    <header className="flex justify-center space-x-4 bg-gray-800 text-white p-4">
      <p className="hover:text-orange-500 cursor-pointer hover:delay-150">About</p>
      <p className="hover:text-orange-500 cursor-pointer hover:delay-150">Resume</p>
      <p className="hover:text-orange-500 cursor-pointer hover:delay-150">Portfolio</p>
      <p className="hover:text-orange-500 cursor-pointer hover:delay-150">Testimonials</p>
      <p className="hover:text-orange-500 cursor-pointer hover:delay-150">Contact</p>
    </header>
      {/* <h1>React App</h1> */}

    {/* <body> */}
      <div className="text-center text-white bg-cover bg-center h-screen" style={{backgroundImage: `url(${bg})`}}> 
        <div className="text-center text-white bg-[#224b69] bg-opacity-70 p-4 rounded-lg">
          <h1 className=''>I'm Priyansh Tyagi.</h1>
          <p></p>
        </div>
      </div>
    {/* </body> */}
    </>
  )
}

export default App
