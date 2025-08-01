import React, { createContext, useContext, useRef, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  startPlaying: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    audioRef.current = new Audio('/music/romantic-track.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const startPlaying = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, startPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
