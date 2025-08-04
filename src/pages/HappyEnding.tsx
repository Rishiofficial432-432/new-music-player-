import { useEffect, useRef, useState } from "react";
import { GameButton } from "@/components/ui/game-button";
import { useNavigate } from "react-router-dom";

const HappyEnding = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playCount, setPlayCount] = useState(0);
  const maxPlays = 5;

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch(console.error);

      const handleEnded = () => {
        if (playCount < maxPlays - 1) {
          setPlayCount(prev => prev + 1);
          audio.currentTime = 0;
          audio.play().catch(console.error);
        }
      };

      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [playCount]);

  const handlePlayAgain = () => {
    navigate("/");
  };

  return (
    <div className="game-container">
      <audio 
        ref={audioRef} 
        src="/assets/happy-bgm.mp3" 
        preload="auto"
        onError={(e) => {
          console.log("Audio file not found, continuing without background music");
        }}
      />
      
      <div className="romantic-card max-w-2xl w-full text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 glow-text">
            🎉 Happy Happy Happy! 🎉
          </h1>
        </div>

        <div className="space-y-6">
          <div className="happy-gif-container">
            <img 
              src="/assets/happy-gif.gif" 
              alt="Happy Celebration" 
              className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
              style={{ maxHeight: "300px" }}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
                e.currentTarget.alt = "Happy GIF Placeholder";
              }}
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground leading-8">
              Because it made you smile, I'm... <br/>
              <span className="text-3xl font-bold text-primary glow-text">
                HAPPY HAPPY HAPPY! 🎉
              </span>
            </p>
          </div>

          <div className="my-12">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="mt-12 space-y-4">
            <GameButton 
              variant="romantic" 
              size="lg" 
              onClick={handlePlayAgain} 
              className="animate-glow"
            >
              ✨ Play Again ✨
            </GameButton>
            
            <div className="text-sm text-muted-foreground">
              <p>Thank you for playing "Decode the Vibe" 🎮💕</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed top-4 right-4 animate-float">
        <span className="text-2xl">🎉</span>
      </div>
      <div className="fixed bottom-4 left-4 animate-float" style={{
        animationDelay: '1s'
      }}>
        <span className="text-2xl">✨</span>
      </div>
      <div className="fixed top-4 left-4 animate-float" style={{
        animationDelay: '2s'
      }}>
        <span className="text-2xl">😊</span>
      </div>
      <div className="fixed bottom-4 right-4 animate-float" style={{
        animationDelay: '3s'
      }}>
        <span className="text-2xl">💝</span>
      </div>
    </div>
  );
};

export default HappyEnding; 