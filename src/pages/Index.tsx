
import SkyShader from "@/components/SkyShader";
import { Info, Image, Settings, Share2, Download, HelpCircle, Copyright } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-gray-100 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'Bebas Neue Bitter' }}>ella</h1>
          <div className="flex gap-6">
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <Info size={24} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <Image size={24} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <Settings size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="border-[10px] border-black" style={{
          width: '400px',
          height: '300px'
        }}>
          <SkyShader />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-gray-100 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <Share2 size={24} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <Download size={24} />
            </button>
          </div>
          <div className="flex gap-6">
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <HelpCircle size={24} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-md">
              <Copyright size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
