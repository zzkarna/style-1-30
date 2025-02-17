
import React, { useState } from 'react';

const EllaNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {/* Ella Text */}
      <h1 className="text-3xl font-light text-white" style={{ fontFamily: 'Bebas Neue' }}>
        ella
      </h1>
      {/* Triangle */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          absolute top-8 -left-0.5 cursor-pointer
          text-blue-400 text-2xl leading-none
          transform transition-transform duration-300
          animate-pulse text-white
          ${isOpen ? 'rotate-180' : ''}
        `}
      >
        ▲
      </div>
      {/* Clean Dropdown Menu */}
      <div className={`
        absolute left-0 w-48 mt-8
        transition-all duration-300 z-50
        ${isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2 pointer-events-none'}
      `}>
        <div className="space-y-2">
          <button className="w-full px-4 py-1 text-left text-white hover:text-blue-500 transition-colors">
            Shop Page
          </button>
          <button className="w-full px-4 py-1 text-left text-white hover:text-blue-500 transition-colors">
            Product Page
          </button>
          <button className="w-full px-4 py-1 text-left text-white hover:text-blue-500 transition-colors">
            Button
          </button>
          <button className="w-full px-4 py-1 text-left text-white hover:text-blue-500 transition-colors">
            Button
          </button>
          <button className="w-full px-4 py-1 text-left text-white hover:text-blue-500 transition-colors">
            Button
          </button>
          <button className="w-full px-4 py-1 text-left text-white hover:text-blue-500 transition-colors">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default EllaNav;
