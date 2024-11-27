import { GameState } from '../../../types/game';

export const tunnelStates: Record<string, GameState> = {
  deep_tunnel: {
    id: 'deep_tunnel',
    text: "The tunnel descends sharply. Temperature drops significantly. Your crystal pulses with increasing intensity. Fresh claw marks line the walls and distant chanting echoes.",
    choices: [
      { text: "Follow the chanting", nextState: "cultist_ceremony" },
      { text: "Track the claw marks", nextState: "monster_den" },
      { text: "Find another route", nextState: "hidden_passage" }
    ]
  },
  dark_tunnel: {
    id: 'dark_tunnel',
    text: "In the weak light, you stumble through darkness. Suddenly, your flashlight reveals multiple pairs of reflective eyes. Your crystal vibrates violently.",
    choices: [
      { text: "Run away", nextState: "ending_narrow_escape" },
      { text: "Use the crystal", nextState: "crystal_defense" },
      { text: "Hide quietly", nextState: "stealth_route" }
    ]
  },
  hidden_passage: {
    id: 'hidden_passage',
    text: "You discover a narrow passage behind loose stones. Ancient technology lines the walls, still humming with power. Your crystal resonates with the machinery.",
    choices: [
      { text: "Activate technology", nextState: "ancient_activation" },
      { text: "Follow the passage", nextState: "secret_chamber" },
      { text: "Study the machinery", nextState: "tech_analysis" }
    ]
  }
};