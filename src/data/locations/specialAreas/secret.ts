import { GameState } from '../../../types/game';

export const secretStates: Record<string, GameState> = {
  ancient_chamber: {
    id: 'ancient_chamber',
    text: "You enter a vast chamber with a sealed sarcophagus. Your crystal pulls toward it. Ancient machines hum with power. A control panel shows critical containment levels.",
    choices: [
      { text: "Strengthen seals", nextState: "ending_hero" },
      { text: "Open sarcophagus", nextState: "ending_catastrophe" },
      { text: "Destroy machines", nextState: "ending_chaos" }
    ]
  },
  crystal_defense: {
    id: 'crystal_defense',
    text: "The crystal blazes with brilliant light! Creatures shriek and retreat, but the crystal's power drains quickly. A sealed door stands where the creatures were.",
    choices: [
      { text: "Enter the door", nextState: "ancient_chamber" },
      { text: "Chase creatures", nextState: "creature_lair" },
      { text: "Retreat safely", nextState: "tactical_retreat" }
    ]
  }
};