import { GameState } from '../types/game';

export const endings: Record<string, GameState> = {
  ending_early_escape: {
    id: 'ending_early_escape',
    text: "You decide some mysteries are better left unexplored. Later, you learn that three more students disappeared in the tunnels that night. The guilt will haunt you forever.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  },
  ending_with_knowledge: {
    id: 'ending_with_knowledge',
    text: "You escape with the journal, exposing the truth about the tunnels. But your revelations draw unwanted attention. Dark-robed figures now follow you everywhere.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  },
  ending_with_evidence: {
    id: 'ending_with_evidence',
    text: "The documents reveal a century-old conspiracy. Your evidence forces the university to seal the tunnels permanently. But the sounds of breaking stone can still be heard at night.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  },
  ending_narrow_escape: {
    id: 'ending_narrow_escape',
    text: "You barely escape with your life. Your hair has turned white from fear, and you swear you can still hear the creatures' whispers in your dreams.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  },
  ending_hero: {
    id: 'ending_hero',
    text: "Using the crystal and ancient machines, you strengthen the seals. The entity remains contained, but you're now bound to the tunnels as their eternal guardian.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  },
  ending_catastrophe: {
    id: 'ending_catastrophe',
    text: "The sarcophagus opens, releasing an ancient horror. The world will never be the same, and the sky will never again know daylight.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  },
  ending_chaos: {
    id: 'ending_chaos',
    text: "The machines explode, taking the ancient chamber with them. The entity is neither contained nor released - its fate unknown. The tunnels collapse behind you as you run.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  },
  ending_with_proof: {
    id: 'ending_with_proof',
    text: "The security footage provides undeniable evidence of supernatural forces. But as you try to leave, you realize you've become part of the footage - eternally looping in digital form.",
    choices: [{ text: "Play Again", nextState: "start" }],
    isEnding: true
  }
};