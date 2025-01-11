import React from 'react';
import IconButtonProps from './iconButtons';
import 'tailwindcss/tailwind.css';



const IconButton: React.FC<any> = ({ icon, onClick, ariaLabel }) => {
  return (
    // das ist ein Button mit einem Icon und einem onClick Event Handler, der eine Funktion ausführt 
    <button
      className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-300 transition-colors duration-300" 
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
