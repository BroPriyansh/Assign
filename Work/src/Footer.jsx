// import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-orange-500 text-white'>
        <div className="mt-8 text-center sm:flex items-center justify-center space-x-8 py-2">
          <p className="">Email <a href="mailto:priyanshtyagi30@gmail.com" className="underline">priyanshtyagi30@gmail.com</a></p>

          <div className="sm:flex justify-center text-center items-center space-x-8">
            <a href="https://github.com/BroPriyansh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/brop1_2/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/priyansh-tyagi-715589347/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
