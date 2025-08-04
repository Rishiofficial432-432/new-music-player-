import { useState } from "react";
import { GameButton } from "@/components/ui/game-button";
import { useNavigate } from "react-router-dom";

const GiftReveal = () => {
  const [showGift, setShowGift] = useState(false);
  const navigate = useNavigate();

  const handleRevealGift = () => {
    setShowGift(true);
  };

  const handleNext = () => {
    navigate("/smile-confirmation");
  };

  return (
    <div className="game-container">
      <div className="romantic-card max-w-2xl w-full text-center animate-fade-in">
        {!showGift ? (
          <>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-6 glow-text">
                🎁 Special Surprise! 🎁
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground leading-8">
                Because Mam, you won this game, there's a special gift for you! 💝
              </p>
            </div>

            <div className="my-12">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="mt-12">
              <GameButton 
                variant="romantic" 
                size="lg" 
                onClick={handleRevealGift} 
                className="animate-glow"
              >
                🎁 Reveal Gift 🎁
              </GameButton>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-6 glow-text">
                🎁 Your Gift! 🎁
              </h1>
            </div>

            <div className="space-y-6">
              <div className="gift-image-container">
                <img 
                  src="/assets/gift-image.jpg" 
                  alt="Special Gift" 
                  className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                  style={{ maxHeight: "400px" }}
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.alt = "Gift Image Placeholder";
                  }}
                />
              </div>

              <div className="my-8">
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full opacity-50"></div>
              </div>

              <GameButton 
                variant="romantic" 
                size="lg" 
                onClick={handleNext} 
                className="animate-glow"
              >
                Next ➡️
              </GameButton>
            </div>
          </>
        )}
      </div>
      
      <div className="fixed top-4 right-4 animate-float">
        <span className="text-2xl">🎁</span>
      </div>
      <div className="fixed bottom-4 left-4 animate-float" style={{
        animationDelay: '1s'
      }}>
        <span className="text-2xl">✨</span>
      </div>
    </div>
  );
};

export default GiftReveal; 