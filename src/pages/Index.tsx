
import SkyShader from "@/components/SkyShader";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative">
        <img 
          src="/lovable-uploads/cfe41e72-0d24-4455-b505-f79b6fbfa6c4.png"
          alt="Ornate frame"
          className="w-[600px] h-auto" // Reduced from 1000px to 600px
        />
        <div className="absolute" style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px', // Reduced from 800px to 400px
          height: '300px' // Reduced from 600px to 300px
        }}>
          <SkyShader />
        </div>
      </div>
    </div>
  );
};

export default Index;
