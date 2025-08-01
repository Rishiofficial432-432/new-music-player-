import { useNavigate } from "react-router-dom";
import { GameButton } from "@/components/ui/game-button";
import Waves from "@/components/ui/Waves";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="game-container relative">
      <Waves 
        lineColor="hsl(var(--primary-glow) / 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="romantic-card max-w-md w-full text-center animate-fade-in relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 glow-text animate-float">
            Decode the Vibe
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ma'am, today I made a game for you.
          </p>
          <p className="text-xl font-medium text-foreground">
            Let's see if you can win it.
          </p>
        </div>

        <div className="mt-10">
          <GameButton
            variant="romantic"
            size="xl"
            onClick={() => navigate("/guess-number")}
            className="animate-glow"
          >
            Start Game ▶
          </GameButton>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>The game you never assigned, but deserved ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Home;