import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameButton } from "@/components/ui/game-button";
import { useToast } from "@/hooks/use-toast";

const AnswerGuess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [guess, setGuess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const correctAnswer = "I think they call this love";

  const handleSubmit = () => {
    if (!guess.trim()) {
      toast({
        title: "Empty guess",
        description: "Type your guess first! 💭",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (guess.toLowerCase().trim() === correctAnswer.toLowerCase()) {
        navigate("/success");
      } else {
        toast({
          title: "Close… but no valhalla yet 🏛️",
          description: "Feel the music deeper... What emotion does it carry?",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="game-container">
      <div className="romantic-card max-w-lg w-full text-center animate-fade-in">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            📝 What's This Song Called?
          </h2>
          <p className="text-lg text-muted-foreground">
            Type the title that captures this feeling...
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-left">
            <label htmlFor="song-guess" className="block text-sm font-medium text-foreground mb-2">
              Your guess:
            </label>
            <input
              id="song-guess"
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your guess here..."
              className="romantic-input"
              disabled={isSubmitting}
              autoComplete="off"
            />
          </div>

          <GameButton
            variant="romantic"
            size="lg"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin mr-2">⏳</span>
                Checking...
              </span>
            ) : (
              "Submit Answer"
            )}
          </GameButton>
        </div>

        <div className="mt-8 space-y-4">
          <div className="text-sm text-muted-foreground">
            <p>💡 Hint: Think about emotions, not just music genres</p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <GameButton
              variant="ghost"
              onClick={() => navigate("/music-reveal")}
              className="text-muted-foreground"
            >
              ← Listen Again
            </GameButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerGuess;