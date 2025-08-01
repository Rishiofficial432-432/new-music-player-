import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameButton } from "@/components/ui/game-button";

const GuessNumber = () => {
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const correctNumber = 3; // The magic number

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
    setShowResult(true);
    
    if (number === correctNumber) {
      setIsCorrect(true);
      setTimeout(() => {
        navigate("/music-reveal");
      }, 2000);
    } else {
      setIsCorrect(false);
      setTimeout(() => {
        setShowResult(false);
        setSelectedNumber(null);
      }, 2500);
    }
  };

  return (
    <div className="game-container">
      <div className="romantic-card max-w-lg w-full text-center animate-fade-in">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Choose Your Number
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick a number from 1 to 5. Only one unlocks the music 🎧
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {[1, 2, 3, 4, 5].map((number) => (
            <GameButton
              key={number}
              variant="number"
              onClick={() => handleNumberClick(number)}
              disabled={showResult}
              className={`
                ${selectedNumber === number ? 'bg-primary text-primary-foreground scale-110' : ''}
                ${showResult && selectedNumber === number && isCorrect ? 'animate-glow' : ''}
                transition-all duration-300
              `}
            >
              {number}
            </GameButton>
          ))}
        </div>

        {showResult && (
          <div className="animate-fade-in">
            {isCorrect ? (
              <div className="text-center">
                <p className="text-xl font-medium text-primary mb-2">
                  ✨ Perfect choice! ✨
                </p>
                <p className="text-muted-foreground">
                  Unlocking your musical surprise...
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-lg font-medium text-destructive mb-2">
                  Nope 😛 try again.
                </p>
                <p className="text-muted-foreground">
                  Even Sherlock would guess it faster.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <GameButton
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground"
          >
            ← Back to Home
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default GuessNumber;