# Music Folder for "Decode the Vibe" Game

This folder is where you should place your music files for the game.

## Supported Audio Formats:
- **MP3** (recommended) - `romantic-track.mp3`
- **OGG** - `romantic-track.ogg` (for better browser compatibility)
- **WAV** - `romantic-track.wav` (larger file size but high quality)

## How to Add Your Music:

1. **Place your romantic instrumental track** in this folder
2. **Name it exactly**: `romantic-track.mp3` (or the format you prefer)
3. **The game will automatically play it** when users reach the Music Reveal page

## Current Setup:

The `MusicReveal.tsx` component is configured to look for:
- Primary: `/music/romantic-track.mp3`
- Fallback: `/music/romantic-track.ogg`

## Recommended Song:

For the intended experience, use a romantic instrumental that matches the answer: **"I think they call this love"**

Some suggestions:
- A beautiful piano piece
- Soft acoustic guitar melody
- Orchestral romantic theme
- Lo-fi romantic instrumental

## File Size Recommendations:

- Keep files under 10MB for faster loading
- 2-3 minutes duration is ideal for the game experience
- Quality: 128kbps MP3 is sufficient for web playback

## Testing:

After adding your music file, test the game by:
1. Going to the home page
2. Choosing number "3" (the correct number)
3. Verifying the audio plays automatically on the Music Reveal page

---

**Note**: The game is designed to work with local audio files for a smooth, offline-capable experience.