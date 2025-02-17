
import SkyShader from "@/components/SkyShader";
import { Search, User, ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';
import EllaNav from "@/components/EllaNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-black px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-end pb-4">
          <div className="w-1/3 flex gap-6">
            <button className="text-sm text-white hover:text-gray-300">shop</button>
            <button className="text-sm text-white hover:text-gray-300">archive</button>
          </div>
          <div className="w-1/3 flex justify-center flex-col items-center">
            <img 
              src="/lovable-uploads/a5d84068-b2d2-428c-9771-6c6632ed32e5.png" 
              alt="Logo" 
              className="h-24 w-auto mb-2"
            />
            <EllaNav />
          </div>
          <div className="w-1/3 flex justify-end gap-6">
            <button className="text-sm text-white hover:text-gray-300">search</button>
            <button className="text-sm text-white hover:text-gray-300">account</button>
            <button className="text-sm text-white hover:text-gray-300">cart (0)</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative bg-white p-4 pb-16 shadow-xl" style={{ width: '440px' }}>
          <div className="relative w-[400px] h-[400px] overflow-hidden">
            <SkyShader />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-black p-8">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">never miss a drop</h2>
          <p className="text-white text-center mb-6">subscribe and get the latest news.</p>
          <div className="flex max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="enter your email address"
              className="flex-1 p-2 border border-gray-700 bg-black text-white"
            />
            <button className="px-4 py-2 bg-black border border-l-0 border-gray-700 text-white">
              →
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center space-x-4 text-sm text-white mb-8">
          <button className="hover:text-gray-400">size guide</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">privacy</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">terms</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">faq</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">terms of service</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">refund policy</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">do not sell my personal information</button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white hover:text-gray-400">instagram</a>
          <a href="#" className="text-white hover:text-gray-400">twitter</a>
          <a href="#" className="text-white hover:text-gray-400">facebook</a>
        </div>
        
        {/* Copyright */}
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-400 border-t border-gray-800 pt-8">
          <div>
            <p>copyright ©2024 nocta.</p>
            <p>all rights reserved.</p>
          </div>
          <button className="border border-gray-700 px-4 py-2 text-white">
            united states (usd)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
