import { GameButton } from "@/components/ui/game-button";
import { useNavigate } from "react-router-dom";

const SmileConfirmation = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/happy-ending");
  };

  return (
    <div className="game-container">
      <div className="romantic-card max-w-2xl w-full text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 glow-text">
            😊 Did this bring a smile to your face? 😊
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground leading-8">
            I hope the gift made you happy, Mam! 💝
          </p>
        </div>

        <div className="my-12">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="mt-12">
          <GameButton 
            variant="romantic" 
            size="lg" 
            onClick={handleYes} 
            className="animate-glow"
          >
            😊 Yes! 😊
          </GameButton>
        </div>
      </div>
      
      <div className="fixed top-4 right-4 animate-float">
        <span className="text-2xl">😊</span>
      </div>
      <div className="fixed bottom-4 left-4 animate-float" style={{
        animationDelay: '1s'
      }}>
        <span className="text-2xl">✨</span>
      </div>
    </div>
  );
};

export default SmileConfirmation; 