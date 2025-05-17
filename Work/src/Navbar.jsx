// import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-center sm:space-x-16 space-x-4 bg-gray-800 bg-opacity-60 z-10 fixed w-full text-white p-4">
         <a href="#about" className="hover:text-orange-500 font-medium text-lg cursor-pointer hover:delay-150">About</a>
         <a href="#skills" className="hover:text-orange-500 cursor-pointer text-lg font-medium hover:delay-150">Skills</a>
         <a href="#portfolio" className="hover:text-orange-500 text-lg font-medium cursor-pointer hover:delay-150">Portfolio</a>
         <a href="#contact" className="hover:text-orange-500 text-lg font-medium cursor-pointer hover:delay-150">Contact</a>
    </header>
  );
};

export default Navbar;
