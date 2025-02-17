
import SkyShader from "@/components/SkyShader";
import { Search, User, ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';
import EllaNav from "@/components/EllaNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-black p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <EllaNav />
          <div className="flex gap-6">
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
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
          {/* Explore Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4 text-white">EXPLORE</h2>
            <div className="space-y-2 text-sm">
              <button className="block text-white hover:text-blue-400 transition-colors">Size Guide</button>
              <button className="block text-white hover:text-blue-400 transition-colors">Contact Us</button>
              <button className="block text-white hover:text-blue-400 transition-colors">Store Locations</button>
              <button className="block text-white hover:text-blue-400 transition-colors">Policy</button>
              <button className="block text-white hover:text-blue-400 transition-colors">Refund policy</button>
              <button className="block text-white hover:text-blue-400 transition-colors">FAQ</button>
            </div>
          </div>

          {/* Connect With Us Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4 text-white">CONNECT WITH US</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Join our mailing list"
                  className="flex-1 p-2 border border-gray-700 bg-black text-white rounded-l"
                />
                <button className="px-4 py-2 bg-white text-black rounded-r hover:bg-gray-200">
                  JOIN
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-gray-800 flex justify-between items-center text-sm text-white">
          <p>© 2025 us.bape.com</p>
          <button className="flex items-center gap-2">
            🇺🇸 USD $
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
