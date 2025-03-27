import React from 'react';
import day from '../images/day.svg';
import night from '../images/night.svg';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`p-4 shadow-md transition-all ${darkMode ? "bg-gray-800 text-white" : "bg-blue-400 text-black"}`}>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-3xl font-bold'>My First Counter App</span>
        <ul className='text-2xl font-medium flex items-center gap-6'>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
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


