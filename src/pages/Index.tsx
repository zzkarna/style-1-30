
import SkyShader from "@/components/SkyShader";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-gray-100 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Dreamy Sky Shader</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 hover:bg-gray-200 rounded-md">About</button>
            <button className="px-4 py-2 hover:bg-gray-200 rounded-md">Gallery</button>
            <button className="px-4 py-2 hover:bg-gray-200 rounded-md">Settings</button>
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
          <div className="flex gap-4">
            <button className="px-4 py-2 hover:bg-gray-200 rounded-md">Share</button>
            <button className="px-4 py-2 hover:bg-gray-200 rounded-md">Download</button>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 hover:bg-gray-200 rounded-md">Help</button>
            <button className="px-4 py-2 hover:bg-gray-200 rounded-md">Credits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
