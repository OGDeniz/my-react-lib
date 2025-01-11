import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const SecondaryButton: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed mb-2"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
