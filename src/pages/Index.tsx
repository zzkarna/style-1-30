
import SkyShader from "@/components/SkyShader";
import { Search, User, ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';
import EllaNav from "@/components/EllaNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-black px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end pb-4" style={{ fontFamily: 'Bitter' }}>
          <div className="hidden md:flex w-1/3 justify-start gap-6">
            <button className="text-sm text-white hover:text-gray-300">shop</button>
            <button className="text-sm text-white hover:text-gray-300">gallery</button>
          </div>
          <div className="w-full md:w-1/3 flex justify-center flex-col items-center mb-4 md:mb-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/a5d84068-b2d2-428c-9771-6c6632ed32e5.png" 
                alt="Logo" 
                className="h-16 md:h-24 w-auto mb-2"
              />
              <span className="absolute bottom-0 right-0 text-white text-xs -mb-1 mr-0">®</span>
            </div>
            <EllaNav />
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-6">
            <div className="md:hidden flex gap-6">
              <button className="text-sm text-white hover:text-gray-300">shop</button>
              <button className="text-sm text-white hover:text-gray-300">gallery</button>
            </div>
            <button className="text-sm text-white hover:text-gray-300">search</button>
            <button className="text-sm text-white hover:text-gray-300">profile</button>
            <button className="text-sm text-white hover:text-gray-300">bag (0)</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-[200px] h-[200px] overflow-hidden">
          <SkyShader />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-black p-4 md:p-8">
        <div className="max-w-7xl mx-auto mb-8 md:mb-12">
          <div className="flex max-w-lg mx-auto items-center px-4 md:px-0 gap-4">
            <p className="text-sm md:text-base text-white whitespace-nowrap" style={{ fontFamily: 'Bitter' }}>subscribe</p>
            <div className="flex flex-1">
              <input 
                type="email" 
                placeholder="enter email here"
                className="flex-1 p-2 border border-gray-700 bg-black text-white text-sm md:text-base"
                style={{ fontFamily: 'Bitter' }}
              />
              <button className="px-4 py-2 bg-black border border-l-0 border-gray-700 text-white">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-white mb-8 px-4" style={{ fontFamily: 'Bitter' }}>
          <button className="hover:text-gray-400">size guide</button>
          <span className="text-gray-600 hidden md:inline">•</span>
          <button className="hover:text-gray-400">privacy</button>
          <span className="text-gray-600 hidden md:inline">•</span>
          <button className="hover:text-gray-400">terms</button>
          <span className="text-gray-600 hidden md:inline">•</span>
          <button className="hover:text-gray-400">faq</button>
          <span className="text-gray-600 hidden md:inline">•</span>
          <button className="hover:text-gray-400 text-center">do not sell my personal information</button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8" style={{ fontFamily: 'Bitter' }}>
          <a href="#" className="text-white hover:text-gray-400">instagram</a>
          <a href="#" className="text-white hover:text-gray-400">twitter</a>
          <a href="#" className="text-white hover:text-gray-400">facebook</a>
        </div>
        
        {/* Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-800 pt-8 px-4 gap-4 md:gap-0" style={{ fontFamily: 'Bitter' }}>
          <div className="text-center md:text-left">
            <p>copyright ©2025 project ella.</p>
            <p>all rights reserved.</p>
          </div>
          <button className="border border-gray-700 px-4 py-2 text-white w-full md:w-auto">
            united states (usd)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
