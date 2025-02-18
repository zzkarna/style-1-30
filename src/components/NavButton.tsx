
import React from 'react';
import { Triangle } from 'lucide-react';

interface NavButtonProps {
  children: React.ReactNode;
}

const NavButton = ({ children }: NavButtonProps) => {
  return (
    <button className="group flex items-center gap-2 text-sm text-white">
      <Triangle 
        size={8}
        className="transition-colors duration-200 stroke-[3px] text-white group-hover:fill-white" 
      />
      <span className="hover:text-gray-300 transition-colors duration-200">{children}</span>
    </button>
  );
};

export default NavButton;
