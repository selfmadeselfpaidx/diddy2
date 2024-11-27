import { GameState } from '../../../types/game';

export const railwayStates: Record<string, GameState> = {
  railway: {
    id: 'railway',
    text: "The railway tracks lead to an old station platform. A powered control panel shows a network of tunnel routes. You hear mechanical sounds from one tunnel and scratching from another.",
    choices: [
      { text: "Check mechanical sounds", nextState: "mechanical_room" },
      { text: "Investigate scratching", nextState: "creature_lair" },
      { text: "Power up the rails", nextState: "power_attempt" }
    ]
  },
  power_attempt: {
    id: 'power_attempt',
    text: "You restore power to the rails. Ancient machinery whirs to life. A maintenance cart starts moving on its own, revealing a hidden passage beneath the platform.",
    choices: [
      { text: "Follow the cart", nextState: "cart_pursuit" },
      { text: "Explore passage", nextState: "hidden_tunnel" },
      { text: "Check control panel", nextState: "panel_investigation" }
    ]
  },
  creature_lair: {
    id: 'creature_lair',
    text: "Following the scratching leads to a cavern filled with strange markings. Scattered belongings suggest recent victims. Your crystal pulses urgently.",
    choices: [
      { text: "Search for survivors", nextState: "rescue_attempt" },
      { text: "Study the markings", nextState: "marking_study" },
      { text: "Retreat quickly", nextState: "tactical_retreat" }
    ]
  }
};