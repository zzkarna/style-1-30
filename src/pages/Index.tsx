
import SkyShader from "@/components/SkyShader";
import { Search, User, ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';
import EllaNav from "@/components/EllaNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-black p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-1/3">
            <EllaNav />
          </div>
          <div className="w-1/3 flex justify-center">
            <img 
              src="/lovable-uploads/a5d84068-b2d2-428c-9771-6c6632ed32e5.png" 
              alt="Logo" 
              className="h-24 w-auto" // Increased from h-16 to h-24
            />
          </div>
          <div className="w-1/3 flex justify-end gap-6">
            <button className="p-2 hover:bg-gray-800 rounded-md">
              <Search size={24} className="text-white" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-md">
              <User size={24} className="text-white" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-md">
              <ShoppingBag size={24} className="text-white" />
            </button>
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
          <h2 className="text-2xl font-bold text-white text-center mb-2">NEVER MISS A DROP</h2>
          <p className="text-white text-center mb-6">Subscribe and get the latest news.</p>
          <div className="flex max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 p-2 border border-gray-700 bg-black text-white"
            />
            <button className="px-4 py-2 bg-black border border-l-0 border-gray-700 text-white">
              →
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center space-x-4 text-sm text-white mb-8">
          <button className="hover:text-gray-400">SIZE GUIDE</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">PRIVACY</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">TERMS</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">FAQ</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">TERMS OF SERVICE</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">REFUND POLICY</button>
          <span className="text-gray-600">•</span>
          <button className="hover:text-gray-400">DO NOT SELL MY PERSONAL INFORMATION</button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white hover:text-gray-400">INSTAGRAM</a>
          <a href="#" className="text-white hover:text-gray-400">TWITTER</a>
          <a href="#" className="text-white hover:text-gray-400">FACEBOOK</a>
        </div>
        
        {/* Copyright */}
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-400 border-t border-gray-800 pt-8">
          <div>
            <p>Copyright ©2024 NOCTA.</p>
            <p>All rights reserved.</p>
          </div>
          <button className="border border-gray-700 px-4 py-2 text-white">
            United States (USD)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
