import { useNavigate } from "react-router-dom";
import { GameButton } from "@/components/ui/game-button";

const FailHint = () => {
  const navigate = useNavigate();

  return (
    <div className="game-container">
      <div className="romantic-card max-w-lg w-full text-center animate-fade-in">
        <div className="mb-8">
          <div className="text-4xl mb-4">🤔</div>
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Not quite there yet...
          </h2>
          <p className="text-lg text-muted-foreground">
            But you're closer than you think! 💭
          </p>
        </div>

        <div className="space-y-6 text-left">
          <div className="bg-accent/20 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">💡 Gentle Hints:</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Think about feelings, not genres</li>
              <li>• What emotion does this melody carry?</li>
              <li>• It's something people say about deep feelings</li>
              <li>• Four words that capture a beautiful sentiment</li>
            </ul>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Sometimes the heart knows before the mind catches up ✨</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <GameButton
            variant="romantic"
            onClick={() => navigate("/answer-guess")}
          >
            Try Again 🎯
          </GameButton>
          
          <GameButton
            variant="ghost"
            onClick={() => navigate("/music-reveal")}
            className="text-muted-foreground"
          >
            ← Listen Once More
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default FailHint;