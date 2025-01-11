
import React, { ReactNode } from 'react';



interface ButtonProps {

  onClick: () => void;

  children: ReactNode;

}



const PrimaryButton: React.FC<ButtonProps> = ({ onClick, children }) => {

  return (

    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">

      {children}

    </button>

  );

};



export default PrimaryButton;