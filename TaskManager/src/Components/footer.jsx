import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`p-4 text-center transition-all ${darkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-white"}`}>
      © {new Date().getFullYear()} My Counter App. All Rights Reserved.
    </footer>
  );
};

export default Footer;
