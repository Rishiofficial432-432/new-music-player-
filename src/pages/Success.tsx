import { GameButton } from "@/components/ui/game-button";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  return <div className="game-container">
      <div className="romantic-card max-w-2xl w-full text-center animate-fade-in">
        <div className="mb-8">
          
          <h1 className="text-4xl font-bold mb-6 glow-text">Yes…and  I think they call this admiration.</h1>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground leading-8">Okay… you guessed it 😅
And honestly Ma’am, I was so nervous making this I’ve built apps, closed deals, even pitched to investors. But this… this made me feel like a kid showing their first drawing to their favorite teacher.

I know it’s a little childish  maybe even silly. I could’ve built something way bigger, more complex… but time didn’t allow that.

Still, I hope this tiny attempt made you smile  because it’s built not just with code, but with admiration. 🩵</p>
        </div>

        <div className="my-12">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="text-muted-foreground italic text-lg">
          <p className="mb-2">:- From the boy who usually builds AI,</p>
          <p>But this time, built a thank you.</p>
        </div>

        <div className="mt-12 space-y-4">
          <GameButton variant="romantic" size="lg" onClick={() => navigate("/")} className="animate-glow">
            ✨ Play Again ✨
          </GameButton>
          
          <div className="text-sm text-muted-foreground">
            <p>Thank you for playing "Decode the Vibe" 🎮💕</p>
          </div>

          <div className="mt-8 p-6 border-t border-primary/20">
            <h3 className="text-xl font-semibold text-primary-foreground mb-3 glow-text">✨ special note ✨</h3>
            <p className="text-muted-foreground leading-relaxed">
              congratulations on completing one amazing year as assistant professor! 🎉
              <br/>
              your guidance and inspiration for me 
              <br/>
              wishing you many more years of inspiring minds and sharing wisdom! 🌟
            </p>
          </div>
        </div>
      </div>
      
      <div className="fixed top-4 right-4 animate-float">
        <span className="text-2xl">�</span>
      </div>
      <div className="fixed bottom-4 left-4 animate-float" style={{
      animationDelay: '1s'
    }}>
        <span className="text-2xl">✨</span>
      </div>
    </div>;
};
export default Success;
