import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AudioProvider } from "@/components/AudioPlayer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuessNumber from "./pages/GuessNumber";
import MusicReveal from "./pages/MusicReveal";
import AnswerGuess from "./pages/AnswerGuess";
import Success from "./pages/Success";
import FailHint from "./pages/FailHint";
import GiftReveal from "./pages/GiftReveal";
import SmileConfirmation from "./pages/SmileConfirmation";
import HappyEnding from "./pages/HappyEnding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AudioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guess-number" element={<GuessNumber />} />
            <Route path="/music-reveal" element={<MusicReveal />} />
            <Route path="/answer-guess" element={<AnswerGuess />} />
            <Route path="/success" element={<Success />} />
            <Route path="/fail-hint" element={<FailHint />} />
            <Route path="/gift-reveal" element={<GiftReveal />} />
            <Route path="/smile-confirmation" element={<SmileConfirmation />} />
            <Route path="/happy-ending" element={<HappyEnding />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AudioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
