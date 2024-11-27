import { GameState } from '../../types/game';

export const mainArea: Record<string, GameState> = {
  maintenance_tunnel: {
    id: 'maintenance_tunnel',
    text: "The maintenance tunnel is narrow but well-preserved. You find old tools and a worker's journal. The last entry mentions something about 'containing the ancient one' and 'sacrificial chambers.'",
    choices: [
      { text: "Read more of the journal", nextState: "journal_discovery" },
      { text: "Follow the tunnel deeper", nextState: "maintenance_deep" },
      { text: "Return to main entrance", nextState: "entrance_with_map" }
    ]
  },
  journal_discovery: {
    id: 'journal_discovery',
    text: "The journal reveals a horrifying truth: the tunnels were built to contain an ancient entity. The maintenance workers were actually cultists maintaining the seals. Your crystal matches the description of their containment artifacts.",
    choices: [
      { text: "Continue with new knowledge", nextState: "maintenance_deep" },
      { text: "Search for more journals", nextState: "archive_room" },
      { text: "Flee with the journal", nextState: "ending_with_knowledge" }
    ]
  },
  archive_room: {
    id: 'archive_room',
    text: "You discover a hidden room filled with ancient texts and modern research papers. Security footage shows something massive moving through the deeper tunnels. A map marks three ritual sites used for containment.",
    choices: [
      { text: "Study the ritual sites", nextState: "ritual_research" },
      { text: "Watch more footage", nextState: "security_footage" },
      { text: "Take documents and leave", nextState: "ending_with_evidence" }
    ]
  },
  railway: {
    id: 'railway',
    text: "The railway tracks lead to an old station platform. A powered control panel shows a network of tunnel routes. You hear mechanical sounds from a dark tunnel and scratching from another.",
    choices: [
      { text: "Investigate mechanical sounds", nextState: "mechanical_room" },
      { text: "Follow scratching sounds", nextState: "creature_lair" },
      { text: "Try to power the rails", nextState: "power_attempt" }
    ]
  },
  deep_tunnel: {
    id: 'deep_tunnel',
    text: "The tunnel descends sharply. Temperature drops significantly. Your crystal pulses with increasing intensity. You find fresh claw marks and hear distant chanting.",
    choices: [
      { text: "Track the chanting", nextState: "cultist_ceremony" },
      { text: "Follow the claw marks", nextState: "monster_den" },
      { text: "Find another route", nextState: "hidden_passage" }
    ]
  },
  dark_tunnel: {
    id: 'dark_tunnel',
    text: "In the weak light, you stumble through the darkness. Suddenly, your flashlight catches movement. Multiple pairs of eyes reflect in the beam. Your crystal starts vibrating violently.",
    choices: [
      { text: "Run back immediately", nextState: "ending_narrow_escape" },
      { text: "Hold up the crystal", nextState: "crystal_defense" },
      { text: "Hide in the shadows", nextState: "stealth_route" }
    ]
  }
};