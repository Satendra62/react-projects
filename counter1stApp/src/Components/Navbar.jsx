import React, { useState } from 'react';
import day from '../images/day.svg';
import night from '../images/night.svg';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`p-4 shadow-md transition-all ${darkMode ? "bg-gray-800 text-white" : "bg-blue-400 text-black"}`}>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-2xl md:text-3xl font-bold'>Task Manager App</span>
        
        
        <button className='md:hidden text-3xl' onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        
        
        <ul className={` font-bold absolute md:static top-16 left-0 w-full md:w-auto bg-blue-400 md:bg-transparent flex flex-col md:flex-row items-center gap-6 p-4 md:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden md:flex"}`}>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Contact Us</li>
          <li className='cursor-pointer'>About</li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              <img src={darkMode ? night : day} alt={darkMode ? "Night Mode" : "Day Mode"} className="h-9 w-auto" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
