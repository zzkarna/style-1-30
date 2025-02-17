
import SkyShader from "@/components/SkyShader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center p-8">
        <img 
          src="/lovable-uploads/14840077-3b96-463d-9c8b-070733523f42.png" 
          alt="Frame"
          className="mb-8"
          onLoad={(e) => {
            // Log frame dimensions to help with sizing
            console.log('Frame dimensions:', e.currentTarget.width, e.currentTarget.height);
          }}
        />
      </div>
      <SkyShader />
    </div>
  );
};

export default Index;
