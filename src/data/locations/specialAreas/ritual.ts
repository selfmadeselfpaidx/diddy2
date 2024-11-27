import { GameState } from '../../../types/game';

export const ritualStates: Record<string, GameState> = {
  cultist_ceremony: {
    id: 'cultist_ceremony',
    text: "You discover robed figures performing a ritual. They're strengthening magical seals. Your crystal resonates with their chants. They haven't noticed you yet.",
    choices: [
      { text: "Join the ceremony", nextState: "join_cultists" },
      { text: "Disrupt the ritual", nextState: "ritual_sabotage" },
      { text: "Observe silently", nextState: "ritual_learning" }
    ]
  },
  ritual_learning: {
    id: 'ritual_learning',
    text: "Watching the ritual reveals crucial information. The cultists are maintaining ancient seals that contain a powerful entity. Your crystal seems to be a key component.",
    choices: [
      { text: "Reveal yourself", nextState: "cultist_alliance" },
      { text: "Learn more", nextState: "ritual_secrets" },
      { text: "Leave unnoticed", nextState: "stealth_escape" }
    ]
  }
};