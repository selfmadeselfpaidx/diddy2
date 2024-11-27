import { GameState } from '../../../types/game';

export const equipmentStates: Record<string, GameState> = {
  equipment: {
    id: 'equipment',
    text: "Your backpack contains essential items: a flashlight with dying batteries, an old map, and a strange crystal you found near the entrance. Your phone shows no signal.",
    choices: [
      { text: "Check the crystal", nextState: "crystal_examine" },
      { text: "Replace batteries", nextState: "equipment_prepared" },
      { text: "Study the map", nextState: "map_study" }
    ]
  },
  crystal_examine: {
    id: 'crystal_examine',
    text: "The crystal pulses with an inner light. As you hold it, whispers echo in your mind. It seems to react to the tunnel's presence, growing warmer as you face certain directions.",
    choices: [
      { text: "Focus on the whispers", nextState: "crystal_whispers" },
      { text: "Test crystal reactions", nextState: "crystal_test" },
      { text: "Return to equipment", nextState: "equipment" }
    ]
  },
  map_study: {
    id: 'map_study',
    text: "The map shows official tunnel routes, but someone has marked additional passages in red ink. Notes in the margins warn of 'shifting geometries' and 'temporal distortions.'",
    choices: [
      { text: "Enter with map knowledge", nextState: "entrance_with_map" },
      { text: "Check equipment again", nextState: "equipment" },
      { text: "Study markings more", nextState: "map_markings" }
    ]
  },
  equipment_prepared: {
    id: 'equipment_prepared',
    text: "With fresh batteries, your flashlight beam cuts strongly through the darkness. The crystal seems to resonate with the improved light, creating strange patterns on the walls.",
    choices: [
      { text: "Enter tunnels prepared", nextState: "entrance_prepared" },
      { text: "Examine crystal patterns", nextState: "crystal_patterns" },
      { text: "Final equipment check", nextState: "equipment_final" }
    ]
  }
};