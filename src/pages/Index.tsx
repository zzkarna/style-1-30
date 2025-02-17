
import SkyShader from "@/components/SkyShader";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="border-2 border-black" style={{
        width: '400px',
        height: '300px'
      }}>
        <SkyShader />
      </div>
    </div>
  );
};

export default Index;
