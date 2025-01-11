import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { IconButton, PrimaryButton, SecondaryButton } from '../Buttons';
import '../../styles/global.module.css';
//import iconButtons from '../Buttons/iconButtons'; // Removed as it is not used



const MyNavbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4 md:flex md:justify-between md:items-center"> 
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My App</h1>
        <div className="hidden md:flex space-x-4">
          <IconButton className=" text-white" icon="🏠" onClick={() => alert('Home clicked')} />
          <PrimaryButton onClick={() => console.log('Primary Button clicked')}>
            Primary Button
          </PrimaryButton>
          <SecondaryButton
            label="Secondary Button"
            onClick={() => console.log('Secondary Button clicked')}
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white">
            {isDropdownOpen ? 'Close' : 'Open'}
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2">
          <PrimaryButton onClick={() => console.log('Primary Button clicked')}>
            Primary Button
          </PrimaryButton>
          <SecondaryButton
            label="Secondary Button"
            onClick={() => console.log('Secondary Button clicked')}
          />
        </div>
      )}
    </nav>
  );
};

export default MyNavbar;