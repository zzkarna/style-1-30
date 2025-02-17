
import SkyShader from "@/components/SkyShader";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <img 
          src="/lovable-uploads/cfe41e72-0d24-4455-b505-f79b6fbfa6c4.png"
          alt="Ornate frame"
          className="w-[1000px] h-auto"
        />
        <div className="absolute" style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', // Adjusted to fit frame's inner dimensions
          height: '600px' // Adjusted to fit frame's inner dimensions
        }}>
          <SkyShader />
        </div>
      </div>
    </div>
  );
};

export default Index;
